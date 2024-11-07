import { connectDB } from "@/lib/db/connectDB";
import { User } from "@/lib/models/users";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  const user = await User.findOne({email: obj.email});
  if(!user) {
      return Response.json({error: true, msg: "User with this email doesn't exists"}, {status: 404})
    }
    
    const isPasswordValid = bcrypt.compare(obj.password, user.password)
    if(isPasswordValid) {
        return Response.json(
            {
                error: true,
                msg: "In-Valid Password"
            },
            {status: 403}
        )
    }

try {
  var token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_KEY);
    return Response.json(
      {
        user,
        token,
        msg: "User Added Successfully",
      },
      { status: 200 }
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
