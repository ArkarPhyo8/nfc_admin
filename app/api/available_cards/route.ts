import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = req.nextUrl;
    const searchKey = searchParams.get("searchKey") || "";
    const pageParam = searchParams.get("page") || "1";
    const limitParam = searchParams.get("limit") || "10";
    const page = parseInt(pageParam, 10);
    const limit = parseInt(limitParam, 10);

    if (searchKey) {
      const totalRecords = await prisma.cards.count({
        where: {
          cardName: {
            contains: searchKey,
            mode: "insensitive",
          },
          userID: null,
        },
      });
      const available_cards = await prisma.cards.findMany({
        where: {
          cardName: {
            contains: searchKey,
            mode: "insensitive",
          },
          userID: null,
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
        message: "available cards getting is successfully",
        available_cards,
        pagination: {
          totalRecords,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
        status: 200,
      });
    }

    //If no searchKey, use normal pagination

    const [available_cards, totalRecords] = await prisma.$transaction([
      prisma.cards.findMany({
        where: {
          userID: null,
        },
        orderBy: {
          created_at: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.cards.findMany({
        where: {
          userID: null,
        },
      }),
    ]);
    console.log(available_cards.length);

    const totalPages = Math.ceil(totalRecords.length / limit);
    return NextResponse.json({
      success: true,
      message: "available cards getting is successfully",
      available_cards,
      status: 200,
      pagination: {
        totalRecords,
        totalPages,
        currentPage: page,
        pageSize: limit,
      },
    });
  } catch (err) {
    console.log("error", err);

    return NextResponse.json({
      success: false,
      message: "Server error",
      status: 500,
    });
  }
};
