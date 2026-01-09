import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Contact from "@/models/Contact"

export async function POST(req: Request) {
    await connectDB()
    const data = await req.json()
    await Contact.create(data)
    return NextResponse.json({ success: true })
}
