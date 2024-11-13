import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { connectDB } from "@/lib/db/connectDB";
import { User } from "@/lib/models/users";
export async function POST(request){
    await connectDB()
    const userObj = await request.json()
    const user = await User.findOne({email : userObj.email})
    if(!user){
        return Response.json({ error : "User not found"}, {status : 404})
    }

    const isPasswordValid = await bcrypt.compare(user.password, userObj.password)
    if(!isPasswordValid){
        return Response.json({error : "Incorrect Password"}, {status : 403})
    }

    var token = jwt.sign({_id : user._id, role : user.role}, process.env.JWT_KEY)

    return Response.json({msg : "Login Successful", user, token}, {status : 200})
}