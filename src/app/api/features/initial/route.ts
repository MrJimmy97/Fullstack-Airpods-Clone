import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../database/mongodb";
import Item from "@/app/database/featuresModal";

export async function POST(request: NextRequest) {
  const data = await request.json();
  await connectMongoDB();
  await Item.deleteMany();
  await Item.create(data);
  return NextResponse.json({ message: "initialization" }, { status: 200 });
}
