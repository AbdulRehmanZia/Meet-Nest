import { connectDB } from "@/lib/db/connectDB";
import { Subcategory } from "@/lib/models/subcategories";

export async function GET(request) {
  await connectDB();
  const subcategories = await Subcategory.find();
  return Response.json(
    {
      subcategories,
      msg: "Subategories Fetched Successfully",
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  try {
    const newSubCategory = new Subcategory(obj);
    await newSubCategory.save();
    return Response.json(
      { newSubCategory, msg: "Subcategory Added Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { msg: "Error In Creating Subcategory", error: error },
      { status: 405 }
    );
  }
}

  
