import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

//GET: /card/id
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const card = await prisma.cards.findFirst({
      where: { id },
    });
    return NextResponse.json({
      success: true,
      message: "getting card successfully",
      card,
      status: 200,
    });
  } catch (err) {
    console.error("error-->", err);
    return NextResponse.json({
      success: false,
      message: "Server Error",
      status: 500,
    });
  }
}

//PATCH: /api/card/id
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { username: userID, cardName, cardType, status } = body;
    const updatedCard = await prisma.cards.update({
      where: { id },
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
        message: "added user into card successfully",
        card: updatedCard,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    // console.error("Update admin error:", error);
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      typeof error.code === "string"
    ) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { success: false, message: "card not found" },
          { status: 404 }
        );
      }
    }
    return NextResponse.json(
      { success: false, message: "Failed to update card" },
      { status: 500 }
    );
  }
}

//DELETE: /api/card/id
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deletedCard = await prisma.cards.delete({
      where: { id },
    });
    return NextResponse.json(
      {
        success: true,
        message: "card deleted successfully",
        card: deletedCard,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      typeof error.code === "string"
    ) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { success: false, message: "card not found" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          {
            success: false,
            message:
              "Cannot delete card: card has related with another records.",
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { success: false, message: "Failed to delete card" },
      { status: 500 }
    );
  }
}
