import { getEvents } from "@/action/events";
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
  

function formatEventDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the number of days
  const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1; // +1 to include the start date

  if (start.toDateString() === end.toDateString()) {
    return `1 Day (${start.getDate()} ${start.toLocaleString('default', { month: 'short' })}, ${start.getFullYear()})`;
  }

  const startDay = start.getDate();
  const endDay = end.getDate();
  const month = start.toLocaleString('default', { month: 'short' });
  const year = start.getFullYear();

  return `${durationInDays} Days (${startDay}-${endDay} ${month}, ${year})`;
}


  
  export default async function EventsTable() {
    const events = await getEvents()
    // console.log("events=>", events);
    const eventsList = events?.events
    
    return (
      
      <div className="min-h-screen mx-auto">
        <Table >
          <TableCaption>A list of your recent Events.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Thumbnail</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eventsList.map((event) => (
              <TableRow key={event.title}>
                <TableCell>
                  <Image 
                  src={event.thumbnail}
                  height={100}
                  width={100}
                  alt={event.title}
                  />
                  
                  </TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.address}</TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>{event.category?.title}</TableCell>
                <TableCell>{formatEventDuration(event.startDate, event.endDate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  