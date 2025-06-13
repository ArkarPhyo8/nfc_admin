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
      const sale_cards = await prisma.card_sale.findMany({
        where: {
          customer_name: {
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
          sale_cards,
          pagination: {
            totalRecords: sale_cards.length,
            totalPages: 1,
            currentPage: 1,
            pageSize: sale_cards.length,
          },
        },
        { status: 200 }
      );
    }

    //If no searchKey, use normal pagination
    const totalRecords = await prisma.card_sale.count();
    const sale_cards = await prisma.card_sale.findMany({
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
        message: "Sale card getting successfully",
        sale_cards,
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
    const {
      cardName: cardID,
      customerName: customer_name,
      quantity,
      price,
      paymentType: payment_status,
      phone,
      address,
    } = body;
    const sale_card = await prisma.card_sale.create({
      data: {
        cardID,
        customer_name,
        quantity,
        price,
        payment_status,
        phone,
        address,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "sale  card created successfully",
        sale_card,
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
