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
  
  const users = [
    {
      fullname: "John Doe",
      profilePic: "https://github.com/shadcn.png",
      age: 28,
      location: "New York, USA",
      email: "johndoe@example.com",
      numberOfEvents: 2,
    },
    {
      fullname: "Jane Smith",
      profilePic: "https://github.com/shadcn.png",
      age: 32,
      location: "London, UK",
      email: "janesmith@example.com",
      numberOfEvents: 1,
    },
    {
      fullname: "Carlos Hernandez",
      profilePic: "https://github.com/shadcn.png",
      age: 24,
      location: "Mexico City, Mexico",
      email: "carloshernandez@example.com",
      numberOfEvents: 4,
    },
    {
      fullname: "Aiko Tanaka",
      profilePic: "https://github.com/shadcn.png",
      age: 29,
      location: "Tokyo, Japan",
      email: "aikotanaka@example.com",
      numberOfEvents: 10,
    },
    {
      fullname: "Emma Müller",
      profilePic: "https://github.com/shadcn.png",
      age: 26,
      location: "Berlin, Germany",
      email: "emmamuller@example.com",
      numberOfEvents: 6,
    },
  ];
  
  export default function UsersTable() {
    return (
      
      <div className="min-h-screen mx-auto">
        <Table >
          <TableCaption>A list of your recent Users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Profile Picture</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>location</TableHead>
              <TableHead >Events</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.fullname}>
                <TableCell>
                  <Image 
                  src={user.profilePic}
                  height={50}
                  width={50}
                  />
                  
                  </TableCell>
                <TableCell>{user.fullname}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.location}</TableCell>
                <TableCell >
                  {user.numberOfEvents}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  