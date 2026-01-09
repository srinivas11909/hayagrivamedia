import { NextResponse } from "next/server"
//import bcrypt from "bcrypt"
import bcrypt from "bcrypt"
import { signToken } from "@/lib/auth"

export async function POST(req: Request) {
    const { email, password } = await req.json()
    console.log(process.env.ADMIN_EMAIL)
    console.log(email)
    console.log("HAS HASH:", !!process.env.ADMIN_PASSWORD_HASH)

    if (email !== process.env.ADMIN_EMAIL) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const valid = await bcrypt.compare(
        password,
        process.env.ADMIN_PASSWORD_HASH!
    )

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
