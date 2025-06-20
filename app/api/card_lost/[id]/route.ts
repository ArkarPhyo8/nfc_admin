import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

//GET: /card/id
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const card_loss = await prisma.cards_loss.findFirst({
      where: { cardID: id },
    });
    return NextResponse.json({
      success: true,
      message: "getting card lost successfully",
      card_loss,
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
