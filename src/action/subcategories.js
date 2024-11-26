"use server";

import { revalidatePath } from "next/cache";

export const addSubCategory = async (obj) => {
  const added = await fetch(`${process.env.BASE_URL}api/subcategories`, {
    method: "POST",
    body: JSON.stringify(obj),
  });

  if (added.ok) {
    console.log("Sub Category Added Successfully");
    revalidatePath("/admin/subcategories");
  }
};

export const getSubCategories = async (category) => {
  let url;
  if (category)
    url = `${process.env.BASE_URL}api/subcategories?category=${category}`;
  else url = `${process.env.BASE_URL}api/subcategories`;
  let subcategories = await fetch(url);
  subcategories = subcategories.json();
  console.log("Sub Categories Fetched Successfully");
  revalidatePath("/admin/categories/subcategories");
  return subcategories;
};
