import { connectDB } from "@/lib/db/connectDB";
import { Category } from "@/lib/models/categories";

export async function GET(request) {
  await connectDB();
  const categories = await Category.find();
  return Response.json(
    {
      categories,
      msg: "Categories Fetched Successfully",
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  try {
    const newCategory = new Category(obj);
    await newCategory.save();
    return Response.json(
      { newCategory, msg: "Category Added Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { msg: "Error In Creating Category", error: error },
      { status: 405 }
    );
  }
}

  
