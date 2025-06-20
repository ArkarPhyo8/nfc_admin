import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

//GET: /api/all_card
export async function GET() {
  try {
 
    const all_cards = await prisma.cards.findMany();
    return NextResponse.json(
      {
        success: true,
        message: "Search results found",
        all_cards
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

