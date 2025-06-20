// app/api/card/status/[cardID]/[status]/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string; status: string }> }
) {
  const { id, status } = await params;

  // Convert status string to boolean
  const statusBoolean = status === "true";
  try {
    const card = await prisma.cards.update({
      where: { id },
      data: {
        status: statusBoolean,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Card status updated successfully",
        data: card,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[PATCH /card/status]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error updating card status",
      },
      { status: 500 }
    );
  }
}
