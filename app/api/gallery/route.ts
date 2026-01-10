import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Gallery from "@/models/Gallery"

export async function GET() {
    await connectDB()
    const images = await Gallery.find().sort({ createdAt: -1 })
    return NextResponse.json(images)
}

export async function POST(req: Request) {
    await connectDB()
    const data = await req.json()
    const image = await Gallery.create(data)
    return NextResponse.json(image)
}


export async function PATCH(req: Request) {
    await connectDB()
    const { id, category, caption } = await req.json()

    await Gallery.findByIdAndUpdate(id, {
        category,
        caption,
    })

    return NextResponse.json({ success: true })
}

// DELETE
export async function DELETE(req: Request) {
    await connectDB()
    const { id } = await req.json()

    await Gallery.findByIdAndDelete(id)

    return NextResponse.json({ success: true })
}