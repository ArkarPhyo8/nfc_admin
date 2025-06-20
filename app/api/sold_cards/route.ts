import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl;
  const searchKey = searchParams.get("searchKey") || "";
  const pageParam = searchParams.get("page") || "1";
  const limitParam = searchParams.get("limit") || "10";
  const page = parseInt(pageParam, 10);
  const limit = parseInt(limitParam, 10);

  try {
    if (searchKey) {
      const totalRecords = await prisma.cards.count({
        where: {
          cardName: {
            contains: searchKey,
            mode: "insensitive",
          },
          userID: {
            not: null,
          },
        },
      });

      const sold_cards = await prisma.cards.findMany({
        where: {
          cardName: {
            contains: searchKey,
            mode: "insensitive",
          },
          userID: {
            not: null,
          },
        },
        orderBy: {
          created_at: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      });
      const totalPages = Math.ceil(totalRecords / limit);
      return NextResponse.json({
        success: true,
        message: "sold cards getting is successfully",
        sold_cards,
        pagination: {
          totalRecords,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
        status: 200,
      });
    }

    const [sold_cards, totalRecords] = await prisma.$transaction([
      prisma.cards.findMany({
        where: {
          userID: {
            not: null,
          },
        },
        orderBy: {
          created_at: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.cards.findMany({
        where: {
          userID: {
            not: null,
          },
        },
      }),
    ]);

    const totalPages = Math.ceil(totalRecords.length / limit);
    return NextResponse.json({
      success: true,
      message: "sold cards getting is successfully",
      sold_cards,
      pagination: {
        totalRecords,
        totalPages,
        currentPage: page,
        pageSize: limit,
      },
      status: 200,
    });
  } catch (err) {
    console.error("error", err);

    return NextResponse.json({
      success: false,
      message: "Server error",
      status: 500,
    });
  }
};
