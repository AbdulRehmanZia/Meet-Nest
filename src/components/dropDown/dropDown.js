"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function DropDown({ categories }) {
  const categoryList = categories?.categories;
  // console.log("Category List=>", categoryList);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSelectCategory = (category) => {
    // console.log(category);
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
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
