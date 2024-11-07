import { connectDB } from "@/lib/db/connectDB";
import { User } from "@/lib/models/users";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
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
  const user = await User.findOne({email: obj.email});

if(user) {
  return Response.json({error: true, msg: "User with this email already exists"}, {status: 403})
}
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(obj.password, saltRounds)
obj.password = hashedPassword
console.log("obj=> ",obj);

try {
  const newUser = new User(obj);
  await newUser.save();
  var token = jwt.sign({ _id: newUser._id, role: newUser.role }, process.env.JWT_KEY);
  
    return Response.json(
      {
        user: newUser,
        token,
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
