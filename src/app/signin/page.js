import { redirect } from "next/navigation";
import { auth, signIn } from "../../../auth";

export default async function SignIn() {
  const session = await auth();
  console.log("session=>", session);
  if (session) {
    if (session.user.role == "user") redirect("/");
    if (session.user.role == "admin") redirect("/admin/dashboard");
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </div>
  );
}