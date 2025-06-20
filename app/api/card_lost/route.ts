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
      const totalRecords = await prisma.cards_loss.count();
      const cards_loss = await prisma.cards_loss.findMany();
      const totalPages = Math.ceil(totalRecords / limit);
      return NextResponse.json({
        success: true,
        message: "loss cards getting is successfully",
        cards_loss,
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

    const [cards_loss, totalRecords] = await prisma.$transaction([
      prisma.cards_loss.findMany({
        orderBy: {
          applyDate: "desc",
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
    const totalPages = Math.ceil(totalRecords.length / limit);
    return NextResponse.json({
      success: true,
      message: "loss cards getting is successfully",
      cards_loss,
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
