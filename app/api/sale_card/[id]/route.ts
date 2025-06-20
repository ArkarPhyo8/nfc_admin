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
    const {
      cardName: cardID,
      customerName: customer_name,
      quantity,
      price,
      paymentType: payment_status,
      phone,
      address,
    } = body;
    const updatedSaleCard = await prisma.card_sale.update({
      where: { id },
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
        message: "Sale card updated successfully",
        saleCard: updatedSaleCard,
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
          { success: false, message: "sale card not found" },
          { status: 404 }
        );
      }
    }
    return NextResponse.json(
      { success: false, message: "Failed to update sale card" },
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
    const deletedSaleCard = await prisma.card_sale.delete({
      where: { id },
    });
    return NextResponse.json(
      {
        success: true,
        message: "sale card deleted successfully",
        saleCard: deletedSaleCard,
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
          { success: false, message: "sale card not found" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          {
            success: false,
            message:
              "Cannot delete sale card: sale card has related with another records.",
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
