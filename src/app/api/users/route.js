import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { connectDB } from "@/lib/db/connectDB";
import { User } from "@/lib/models/users";

export async function GET(request) {
    await connectDB()
    const users = await User.find()
    return Response.json({
    msg : "Users Fetched Successfully",
    users : users
    }, {status : 200})
}

export async function POST(request) {
    await connectDB()
    const userObj = await request.json()
    const user = await User.findOne({email : userObj.email})
    if(user){
      return Response.json({error : "Email already in use"},
        {status : 403}
      )
    }
    
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(userObj.password, saltRounds)
    userObj.password = hashedPassword

    const newUser = new User(userObj)
    await newUser.save()
    var token = jwt.sign(
      { _id: newUser._id, role: newUser.role },
      process.env.JWT_KEY
    );

    return Response.json(
      {
        msg: "User Added Successfully",
        addedUser: newUser,
        token : token
      },
      { status: 201 }
    );
}

export async function PUT(request) {}

export async function DELETE(request) {}