import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//GET: /api/card
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const searchKey = searchParams.get("searchKey") || "";
    const pageParam = searchParams.get("page") || "1";
    const limitParam = searchParams.get("limit") || "10";
    const page = parseInt(pageParam, 10);
    const limit = parseInt(limitParam, 10);

    // If searchKey exists, return ALL matching results without pagination
    if (searchKey) {
      const cards = await prisma.cards.findMany({
        where: {
          cardName: {
            contains: searchKey,
            mode: "insensitive",
          },
        },
        orderBy: {
          created_at: "desc",
        },
      });

      return NextResponse.json(
        {
          success: true,
          message: "Search results found",
          cards,
          pagination: {
            totalRecords: cards.length,
            totalPages: 1,
            currentPage: 1,
            pageSize: cards.length,
          },
        },
        { status: 200 }
      );
    }

    //If no searchKey, use normal pagination
    const totalRecords = await prisma.cards.count();
    const cards = await prisma.cards.findMany({
      orderBy: {
        created_at: "desc",
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    const totalPages = Math.ceil(totalRecords / limit);

    return NextResponse.json(
      {
        success: true,
        message: "Card getting successfully",
        cards,
        pagination: {
          totalRecords,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    // Optional: Handle known Prisma errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error("Prisma error while fetching card:", error);
    } else {
      console.error("Unexpected error while fetching card:", error);
    }
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while retrieving card",
      },
      { status: 500 }
    );
  }
}

// POST: /api/user
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username: userID, cardName, cardType, status } = body;
    const newCard = await prisma.cards.create({
      data: {
        userID,
        cardName,
        cardType,
        status,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "card created successfully",
        card: newCard,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating card:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create card" },
      { status: 500 }
    );
  }
}
