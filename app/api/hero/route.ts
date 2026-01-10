import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Hero from "@/models/Hero"

export async function GET() {
    await connectDB()
    const heroes = await Hero.find().sort({ order: 1, createdAt: -1 })
    return NextResponse.json(heroes)
}

export async function POST(req: Request) {
    await connectDB()
    const body = await req.json()

    const count = await Hero.countDocuments()

    const hero = await Hero.create({
        ...body,
        order: count,
    })

    return NextResponse.json(hero, { status: 201 })
}
