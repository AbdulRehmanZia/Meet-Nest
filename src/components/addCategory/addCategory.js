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
import { addCategory } from "@/action/categories";
import { useToast } from "@/hooks/use-toast";

export default function AddCategory() {
  const { toast } = useToast();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    thumbnail: "",
    description: "",
  });

  const handleAddCategory = async (formData) => {
    console.log("Form Data=>", formData);
    setLoading(true);
    let uploadLink = await uploadImage(formData);
    // console.log("uploadLink =>", uploadLink)
    const obj = {
      title: formData.get("title"),
      description: formData.get("description"),
      thumbnail: uploadLink,
    };
    await addCategory(obj);
    formRef?.current?.reset();
    setLoading(false);

    toast({
      title: "Category Added Successfully",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to an API
    console.log("New category submitted:", newCategory);
    setNewCategory({ name: "", thumbnail: "", description: "" }); // Clear the inputs after submission
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
          <DialogDescription>
            Please fill out the form below to add a new category.
          </DialogDescription>
        </DialogHeader>
        <form
          ref={formRef}
          action={handleAddCategory}
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
          </div>
          <Button disabled={loading} type="submit">
            {loading ? "Loading...." : "Add Category"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
