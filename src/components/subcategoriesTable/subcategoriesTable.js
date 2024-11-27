import { getCategories } from "@/action/categories";
import { getSubCategories } from "@/action/subcategories";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import Image from "next/image";
import DropDown from "../dropDown/dropDown";
import AddSubCategory from "../addSubCategory/addSubCategory";
  

  export default async function SubCategoriesTable() {
    const subcategories = await getSubCategories()
    const categories = await getCategories()    
    console.log("categories=>", categories);
    
    return (
      <>
      <div className="flex justify-between my-4">
      <AddSubCategory />
              <DropDown categories={categories}/>
        </div>
      <div className="min-h-screen mx-auto flex justify-center">
        <Table >
          <TableCaption>Sub-Categories</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead >Thumbnail</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subcategories?.subcategories?.map((data) => (
              <TableRow key={data.id}>
                <TableCell>
                  <Image 
                  src={data.thumbnail}
                  height={150}
                  width={150}
                  alt={data.thumbnail}
                  />
                  
                  </TableCell>
                <TableCell>{data.title}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell>{data.category?.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </div>
      </>
    );
  }
  