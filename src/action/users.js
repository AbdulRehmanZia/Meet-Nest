"use server";

import { revalidatePath } from "next/cache";


export const getUsers = async () => {
  let users = await fetch(`${process.env.BASE_URL}api/users`);
  users = users.json();
  console.log("Users Fetched Successfully");
  revalidatePath("/admin/users");
  return users;
};
