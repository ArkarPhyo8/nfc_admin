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
    const { username, phoneNo, WebUUID } = body;
    const updatedUser = await prisma.users.update({
      where: { id },
      data: {
        username,
        phoneNo,
        WebUUID,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User updated successfully",
        user: updatedUser,
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
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }
    }
    return NextResponse.json(
      { success: false, message: "Failed to update user" },
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
    const deletedAdmin = await prisma.users.delete({
      where: { id },
    });
    return NextResponse.json(
      {
        success: true,
        message: "User deleted successfully",
        user: deletedAdmin,
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
          { success: false, message: "User not found" },
          { status: 404 }
        );
      }
      if (error.code === "P2003") {
        return NextResponse.json(
          {
            success: false,
            message: "Cannot delete user: user has related with card records.",
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { success: false, message: "Failed to delete user" },
      { status: 500 }
    );
  }
}
