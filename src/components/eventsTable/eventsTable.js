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
  
const events = [
    {
      eventName: "Tech Conference 2024",
      eventDescription: "A gathering of tech enthusiasts and industry leaders to discuss the latest trends in technology.",
      eventLocation: "New York, USA",
      thumbnail: "https://github.com/shadcn.png",
      date: new Date().toLocaleDateString(),
    },
    {
      eventName: "Art Expo 2024",
      eventDescription: "An exhibition showcasing the work of contemporary artists from around the world.",
      eventLocation: "London, UK",
      thumbnail: "https://github.com/shadcn.png",
      date: new Date().toLocaleDateString(),
    },
    {
      eventName: "Cultural Festival 2024",
      eventDescription: "A celebration of cultural diversity featuring food, music, and performances from various cultures.",
      eventLocation: "Mexico City, Mexico",
      thumbnail: "https://github.com/shadcn.png",
      date: new Date().toLocaleDateString(),
    },
    {
      eventName: "Japan Tech Fair 2024",
      eventDescription: "An expo highlighting the latest advancements in technology from Japanese companies.",
      eventLocation: "Tokyo, Japan",
      thumbnail: "https://github.com/shadcn.png",
      date: new Date().toLocaleDateString(),
    },
    {
      eventName: "Berlin Music Festival 2024",
      eventDescription: "A vibrant music festival featuring performances by international artists across multiple genres.",
      eventLocation: "Berlin, Germany",
      thumbnail: "https://github.com/shadcn.png",
      date: new Date().toLocaleDateString(),
    },
  ];
  
  
  export default function EventsTable() {
    return (
      
      <div className="min-h-screen mx-auto">
        <Table >
          <TableCaption>A list of your recent Events.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Thumbnail</TableHead>
              <TableHead>Event Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.thumbnail}>
                <TableCell>
                  <Image 
                  src={event.thumbnail}
                  height={50}
                  width={50}
                  />
                  
                  </TableCell>
                <TableCell>{event.eventName}</TableCell>
                <TableCell>{event.eventLocation}</TableCell>
                <TableCell>{event.eventDescription}</TableCell>
                <TableCell>{event.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  