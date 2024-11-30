import { getUsers } from "@/action/users";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
  
  
  
  export default async function UsersTable() {
    const users = await getUsers()
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
          <TableBody >
            {users?.users?.map((user) => (
              <TableRow key={user.fullname}>
                <TableCell>
                <Avatar>
                  <AvatarImage height={150} width={150} src={user.profileImg} />
                  <AvatarFallback>-</AvatarFallback>
                </Avatar>
                  
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
  