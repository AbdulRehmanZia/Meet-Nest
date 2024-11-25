import Link from "next/link";
import { auth, signOut } from "../../auth";
import { Button } from "@/components/ui/button";

export default async function  Home() {
const session = await auth()
console.log("session=>", session);

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900">
      
      {
      session?  (<div>
      
      <form
        action={async (formData) => {
          "use server"
          await signOut()
          console.log("User SignOut");
          
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div> ): (<Link href={"/signin"}>
    <Button>SignIn</Button>
    </Link>)
    }
      <div className="text-center p-8 bg-white/10 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Welcome to <span className="text-blue-500">MeetNest</span>
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Connect, share, and grow with others in an engaging platform!
        </p>
        <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
}

