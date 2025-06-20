import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//GET: /api/user
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
      const users = await prisma.users.findMany({
        where: {
          username: {
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
          message: "Search users found",
          users,
          pagination: {
            totalRecords: users.length,
            totalPages: 1,
            currentPage: 1,
            pageSize: users.length,
          },
        },
        { status: 200 }
      );
    }

    //If no searchKey, use normal pagination
    const totalRecords = await prisma.users.count();
    const users = await prisma.users.findMany({
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
        message: "User getting successfully",
        users,
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
      console.error("Prisma error while fetching user:", error);
    } else {
      console.error("Unexpected error while fetching user:", error);
    }
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while retrieving user.",
      },
      { status: 500 }
    );
  }
}

// POST: /api/user
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, phoneNo } = body;

    const newUser = await prisma.users.create({
      data: {
        username,
        phoneNo,
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user", error);
    return NextResponse.json(
      { success: false, message: "Failed to create user" },
      { status: 500 }
    );
  }
}
