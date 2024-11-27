"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

export default function DropDown({ categories }) {
  const categoryList = categories?.categories;
  console.log("Category List=>", categoryList);
  const searchParams = useSearchParams();
  const handleSelectCategory = (term) => {
    console.log(term);
  };

  return (
    <Select onValueChange={handleSelectCategory}>
      <SelectTrigger className="w-[180px]">
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
  );
}
