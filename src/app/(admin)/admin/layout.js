import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
async function Layout({ children }) {
  const session = await auth();
  console.log("Session=>", session);

  // if (!session) redirect("/signin")
    if (!session) redirect('/signin');


  return (
    <html lang="en">
      <body>
        <Tabs defaultValue="dashboard">
          <TabsList className="bg-black h-12 text-white">
            <Link href={"/admin/dashboard"}>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </Link>

            <Link href={"/admin/users"}>
              <TabsTrigger value="users">Users</TabsTrigger>
            </Link>

            <Link href={"/admin/events"}>
              <TabsTrigger value="events">events</TabsTrigger>
            </Link>

            <Link href={"/admin/categories"}>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </Link>

            <Link href={"/admin/subcategories"}>
              <TabsTrigger value="subcategories">Sub-Categories</TabsTrigger>
            </Link>
          </TabsList>
          <TabsContent value="dashboard">{children} </TabsContent>
          <TabsContent value="users">{children} </TabsContent>
          <TabsContent value="events">{children} </TabsContent>
          <TabsContent value="categories">{children} </TabsContent>
          <TabsContent value="subcategories">{children} </TabsContent>
        </Tabs>
      </body>
    </html>
  );
}

export default Layout;
