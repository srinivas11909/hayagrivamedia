import { NextResponse } from "next/server"
import {connectDB} from "@/lib/db"
import Hero from "@/models/Hero"

type Context = {
    params: Promise<{ id: string }>
}

export async function PUT(req: Request, { params }: Context) {
    await connectDB()
    const { id } = await params
    const body = await req.json()

    const updated = await Hero.findByIdAndUpdate(id, body, { new: true })
    return NextResponse.json(updated)
}

export async function DELETE(_: Request, { params }: Context) {
    await connectDB()
    const { id } = await params

    await Hero.findByIdAndDelete(id)
    return NextResponse.json({ success: true })
}
