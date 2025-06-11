import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

//PATCH: /api/user/id
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { username: userID, cardName, cardType: cardTypeId, status } = body;
    const updatedUser = await prisma.cards.update({
      where: { id },
      data: {
        userID,
        cardName,
        cardTypeId,
        status,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Card updated successfully",
        userAccounts: updatedUser,
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

//DELETE: /api/user/id
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deletedAdmin = await prisma.cards.delete({
      where: { id },
    });
    return NextResponse.json(
      {
        success: true,
        message: "card deleted successfully",
        userAccounts: deletedAdmin,
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
