import { connectDB } from "@/lib/db/connectDB";
import { userModal } from "@/lib/models/users";

export async function GET(request) {
  await connectDB();
  const users = await userModal.find();
  return Response.json(users, { status: 200 });
}

export async function POST(request) {
 await connectDB()
 const obj = await request.json()
 let newUser = new userModal(obj)
 await newUser.save()

  return Response.json(newUser, { status: 201 });
}


export async function PUT(request) {}

export async function DELETE(request) {}
