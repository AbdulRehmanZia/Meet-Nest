import { getCategories } from "@/action/categories";
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
  


export default async function CategoriesTable() {
    const categories = await getCategories()
    console.log("Categories=>", categories);
    
    return (
      
      <div className="min-h-screen mx-auto flex justify-center">
        <Table >
          <TableCaption>Categories</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead >Thumbnail</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories?.categories?.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <Image 
                  src={category.thumbnail}
                  height={150}
                  width={150}
                  alt= {category.thumbnail}
                  />
                  
                  </TableCell>
                <TableCell>{category.title}</TableCell>
                <TableCell>{category.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  