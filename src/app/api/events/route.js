import { connectDB } from "@/lib/db/connectDB";
import { Events } from "@/lib/models/events";
import { Category } from "@/lib/models/categories";
import { Subcategory } from "@/lib/models/subcategories";
import { User } from "@/lib/models/users";

export async function GET(request) {
  await connectDB();

  const query = {};

  const events = await Events.find(query)
    .populate("category", "title")
    .populate("category", "title")
    .populate("createdBy", "fullname email profileImg")
    .populate("going", "fullname email profileImg");
  return Response.json(
    {
      events,
      msg: "Events Fetched Successfully",
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();

  const user = await User.findOne({ _id: obj.createdBy });
  if (!user) {
    return Response.json(
      { msg: "User Not Found", data: null, error: true },
      { status: 403 }
    );
  }

  try {
    const newEvent = new Events(obj);
    await newEvent.save();
    return Response.json(
      { newEvent, msg: "Event Added Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { msg: "Error In Creating Event", error: error },
      { status: 405 }
    );
  }
}
