import { connectDB } from "@/lib/db/connectDB";
import { User } from "@/lib/models/users";

export async function GET(request) {
  await connectDB();
  const users = await User.find();
  return Response.json(users, { status: 200 });
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();

  try {
    const newUser = new User(obj);
    await newUser.save();
    return Response.json({ status: 201, user: newUser });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: 400,
      message: "Error creating user",
      error: error.message,
    });
  }
}

export async function PUT(request) {
  // Implement PUT logic here
}

export async function DELETE(request) {
  // Implement DELETE logic here
}
