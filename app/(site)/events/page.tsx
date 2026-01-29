// import Image from "next/image"
// import { connectDB } from "@/lib/db"
// import Event from "@/models/Event"
// import { unstable_noStore as noStore } from "next/cache"


// export const metadata = {
//   title: "Events | Highgreeva Media",
//   description: "Explore our events managed by Highgreeva Media",
// }

// export default async function EventsPage() {
//   noStore()
//   await connectDB()
//   const events = await Event.find().sort({ createdAt: -1 }).lean()

//   console.log(events)

//   return (
//     <section className="section">
//       <div className="container">
//         <h1 className="section-title">Events</h1>

//         <div className="grid md:grid-cols-3 gap-8 mt-12">
//           {events.map((event: any) => (
//             <div
//               key={event._id}
//               className="border border-yellow-500/20 rounded-lg overflow-hidden"
//             >
//               {event.image && (
//                 <Image
//                   src={event.image}
//                   alt={event.title}
//                   width={400}
//                   height={300}
//                   className="h-48 w-full object-cover"
//                 />
//               )}
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-brand-yellow">
//                   {event.title}
//                 </h3>
//                 {event.description && (
//                   <p className="text-sm text-gray-400 mt-2">
//                     {event.description}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {events.length === 0 && (
//           <p className="text-gray-400 mt-8">
//             No events published yet.
//           </p>
//         )}
//       </div>
//     </section>
//   )
// }

import { connectDB } from "@/lib/db"
import Event from "@/models/Event"
import { unstable_noStore as noStore } from "next/cache"
import EventsClient from "./EventsClient"

export const metadata = {
  title: "Events | Hayagriva Media",
  description:
    "Explore cinematic weddings, corporate events, and premium experiences crafted by Hayagriva Media.",
}

export default async function EventsPage() {
  noStore()
  await connectDB()

  const events = await Event.find()
    .sort({ createdAt: -1 })
    .lean()

  return (
    <section className="section">
      <div className="container">
        {/* Hero */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">Our Events</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of unforgettable moments crafted with cinematic
            precision and creative excellence.
          </p>
        </div>

        {/* Client UI */}
        <EventsClient events={events} />
      </div>
    </section>
  )
}
