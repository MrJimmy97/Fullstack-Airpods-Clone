import { NextRequest } from "next/server";
import connectMongoDB from "@/app/database/mongodb";
import Item from "@/app/database/featuresModal";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { title, image, description, className, content, sup } =
    await request.json();
  await connectMongoDB();
  await Item.create({
    title,
    image,
    description,
    className,
    content,
    sup,
  });
  return NextResponse.json({ message: "Feature created" }, { status: 201 });
}