"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { uploadImage } from "@/action/upload";
import { addSubCategory } from "@/action/subcategories";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddSubCategory({categories}) {
  const categoryList = categories?.categories
  const { toast } = useToast();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState({
    name: "",
    thumbnail: "",
    description: "",
  });

  const handleAddSubCategory = async (formData) => {
    console.log("Form Data=>", formData);
    setLoading(true);
    let uploadLink = await uploadImage(formData);
    const obj = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      thumbnail: uploadLink,
    };
    console.log("obj =>", obj)
    await addSubCategory(obj);
    formRef?.current?.reset();
    setLoading(false);

    toast({
      title: "SubCategory Added Successfully",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSubCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to an API
    console.log("New subcategory submitted:", newSubCategory);
    setNewSubCategory({ name: "", thumbnail: "", description: "" }); // Clear the inputs after submission
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Subcategory</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Sub-category</DialogTitle>
          <DialogDescription>
            Please fill out the form below to add a new sub-category.
          </DialogDescription>
        </DialogHeader>
        <form
          ref={formRef}
          action={handleAddSubCategory}
          className={"grid items-start gap-4"}
        >
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              required
              name="title"
              type="title"
              id="title"
              placeholder="Tilte"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              required
              name="description"
              id="description"
              placeholder="About Category"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <Input required name="thumbnail" type="file" />

            <Select  name="category">
      <SelectTrigger >
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
       
        {categoryList &&
          categoryList?.map((data) => (
            <SelectItem value={data._id} key={data._id}>
              {data.title}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  ;
          </div>
          <Button disabled={loading} type="submit">
            {loading ? "Loading...." : "Add Subcategory"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
