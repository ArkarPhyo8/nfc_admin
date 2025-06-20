// app/api/card/status/[cardID]/[status]/route.ts
import { LossStatus } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string; status: string }> }
) {
  const { id, status } = await params;
  console.log(id, status);

  try {
    if (!Object.values(LossStatus).includes(status as LossStatus)) {
      return NextResponse.json(
        {
          success: false,
          message: "Incorrect Status",
        },
        { status: 400 }
      );
    }
    const card = await prisma.cards_loss.update({
      where: { id },
      data: {
        status: status as LossStatus,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Approve successfully",
        data: card,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[PATCH /card_lost/status]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error updating card lost status",
      },
      { status: 500 }
    );
  }
}
