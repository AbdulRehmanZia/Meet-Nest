"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

export default function DropDown({ categories }) {
    console.log("fetching categories=>", categories)
    const searchParams = useSearchParams()
    const handleSelectCategory= (term)=>{
        console.log(term);
    }
    
    
  <Select onValueChange={handleSelectCategory}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select Category" />
    </SelectTrigger>
    <SelectContent>
      {categories.map((data) => (
        <SelectItem value={data._id} key={data._id}>
          {data.title}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>;
}
