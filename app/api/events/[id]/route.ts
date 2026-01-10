import { NextResponse } from "next/server"
import {connectDB} from "@/lib/db"
import Event from "@/models/Event"

type Context = {
  params: Promise<{ id: string }>
}

export async function PUT(
  req: Request,
  { params }: Context
) {
  try {
    await connectDB()

    const { id } = await params
    const body = await req.json()

    const updated = await Event.findByIdAndUpdate(
      id,
      {
        title: body.title,
        image: body.image,
      },
      { new: true }
    )

    if (!updated) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(updated)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update event" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _: Request,
  { params }: Context
) {
  try {
    await connectDB()

    const { id } = await params
    const deleted = await Event.findByIdAndDelete(id)

    if (!deleted) {
      return NextResponse.json(
        { error: "Event not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete event" },
      { status: 500 }
    )
  }
}
