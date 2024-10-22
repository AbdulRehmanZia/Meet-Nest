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
  
const subCategories = [
  {
    id: 1,
    categoryId: 1, // Reference to 'Technology'
    name: "Software Development",
    description: "Guides and tutorials on web and software development.",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    categoryId: 1, // Reference to 'Technology'
    name: "Artificial Intelligence",
    description: "Latest trends and research in AI and machine learning.",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    categoryId: 2, // Reference to 'Health & Fitness'
    name: "Nutrition",
    description: "Tips on maintaining a balanced and healthy diet.",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    id: 4,
    categoryId: 2, // Reference to 'Health & Fitness'
    name: "Exercise & Workouts",
    description: "Exercise plans and workout routines.",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    id: 5,
    categoryId: 3, // Reference to 'Business & Finance'
    name: "Investing",
    description: "Investment strategies for beginners and experts.",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    id: 6,
    categoryId: 3, // Reference to 'Business & Finance'
    name: "Entrepreneurship",
    description: "Guidance on starting and growing your own business.",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    id: 7,
    categoryId: 4, // Reference to 'Art & Design'
    name: "Graphic Design",
    description: "Creative tips and tools for graphic design.",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    id: 8,
    categoryId: 4, // Reference to 'Art & Design'
    name: "Photography",
    description: "Photography tips and editing techniques.",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    id: 9,
    categoryId: 5, // Reference to 'Entertainment'
    name: "Movies & TV",
    description: "Latest reviews and news on movies and TV shows.",
    thumbnail: "https://github.com/shadcn.png",
  },
  {
    id: 10,
    categoryId: 5, // Reference to 'Entertainment'
    name: "Music",
    description: "Trends and updates in the music industry.",
    thumbnail: "https://github.com/shadcn.png",
  },
];

  
  
  export default function SubCategoriesTable() {
    return (
      
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
            {subCategories.map((data) => (
              <TableRow key={data.id}>
                <TableCell>
                  <Image 
                  src={data.thumbnail}
                  height={50}
                  width={50}
                  />
                  
                  </TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell>{data.categoryId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  