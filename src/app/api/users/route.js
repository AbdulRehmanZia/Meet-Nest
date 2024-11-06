import { connectDB } from "@/lib/db/connectDB";
import { User } from "@/lib/models/users";

export async function GET(request) {
  await connectDB();
  const users = await User.find();
  return Response.json(
    { users, msg: "Users Fetched Successfully" },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();

  try {
    const newUser = new User(obj);
    await newUser.save();
    return Response.json(
      {
        user: newUser,
        msg: "User Added Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        message: "Error creating user",
        error: error.message,
      },
      { status: 400 }
    );
  }
}

export async function PUT(request) {
  // Implement PUT logic here
}

export async function DELETE(request) {
  // Implement DELETE logic here
}
