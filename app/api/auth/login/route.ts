export const runtime = "nodejs"

import { NextResponse } from "next/server"
//import bcrypt from "bcrypt"
import bcrypt from "bcrypt"
import { signToken } from "@/lib/auth"

export async function POST(req: Request) {
    bcrypt.hash("admin123", 10).then(console.log)

    const { email, password } = await req.json()
    console.log(process.env.ADMIN_PASSWORD_HASH)
    console.log(process.env.ADMIN_EMAIL)
    console.log(process.env.ADMIN_PASSWORD)
    console.log("HASH VALUE:", process.env.ADMIN_PASSWORD_HASH)
    console.log("HASH LENGTH:", process.env.ADMIN_PASSWORD_HASH?.length)

    if (email !== process.env.ADMIN_EMAIL) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const valid = await bcrypt.compare(
        password,
        process.env.ADMIN_PASSWORD_HASH!
    )


    console.log("PASSWORD RECEIVED:", password)
    console.log("PASSWORD LENGTH:", password.length)
    console.log("BCRYPT RESULT:", valid)

    if (!valid) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const token = signToken({ email })

    const res = NextResponse.json({ success: true })
    res.cookies.set("admin_token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        path: "/",
    })

    return res
}
