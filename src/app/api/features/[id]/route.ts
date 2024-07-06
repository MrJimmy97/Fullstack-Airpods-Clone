import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../database/mongodb";
import Item from "@/app/database/featuresModal";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(params);
  const id = params.id;
  const { title, image, description, className, content, sup } =
    await request.json();
  await connectMongoDB();
  await Item.findByIdAndUpdate(id, {
    title,
    image,
    description,
    className,
    content,
    sup,
  });
  return NextResponse.json({ message: "Feature Updated" }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(params);
  const id = params.id;
  await connectMongoDB();
  await Item.findByIdAndDelete(id);
  return NextResponse.json({ message: "Feature deleted" }, { status: 200 });
}
