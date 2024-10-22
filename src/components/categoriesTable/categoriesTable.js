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
  
const categories = [
    {
      id: 1,
      name: "Technology",
      description: "Explore the latest advancements in technology.",
      thumbnail: "https://github.com/shadcn.png",
    },
    {
      id: 2,
      name: "Health & Fitness",
      description: "Discover tips for a healthier lifestyle.",
      thumbnail: "https://github.com/shadcn.png",
    },
    {
      id: 3,
      name: "Business & Finance",
      description: "Learn about the world of business and finance.",
      thumbnail: "https://github.com/shadcn.png",
    },
    {
      id: 4,
      name: "Art & Design",
      description: "Creative insights in the world of art and design.",
      thumbnail: "https://github.com/shadcn.png",
    },
    {
      id: 5,
      name: "Entertainment",
      description: "Catch up on the latest in movies, music, and games.",
      thumbnail: "https://github.com/shadcn.png",
    },
  ];
  
  
  export default function CategoriesTable() {
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
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <Image 
                  src={category.thumbnail}
                  height={50}
                  width={50}
                  />
                  
                  </TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  