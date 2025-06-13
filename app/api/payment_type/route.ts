import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

//GET: /api/card type
export async function GET() {
  try {
    const card_types = await prisma.payment_types.findMany();
    return NextResponse.json(
      {
        success: true,
        message: "payment type getting successfully",
        card_types,
      },
      { status: 200 }
    );
  } catch (error) {
    // Optional: Handle known Prisma errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error("Prisma error while fetching payment type:", error);
    } else {
      console.error("Unexpected error while fetching payment type:", error);
    }
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while retrieving payment type",
      },
      { status: 500 }
    );
  }
}
