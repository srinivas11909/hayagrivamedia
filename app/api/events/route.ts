import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Event from "@/models/Event"

export async function GET() {
  await connectDB()
  const events = await Event.find().sort({ createdAt: -1 })
  return NextResponse.json(events)
}

export async function POST(req: Request) {
  await connectDB()
  const data = await req.json()
  const event = await Event.create(data)
  return NextResponse.json(event)
}
