import { NextResponse } from "next/server"
import cloudinary from "@/lib/cloudinary"

export async function POST(req: Request) {
    const data = await req.formData()
    const file = data.get("file") as File

    if (!file) {
        return NextResponse.json({ error: "No file" }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())

    const uploadResult = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { folder: "highgreeva-media" },
            (error, result) => {
                if (error) reject(error)
                resolve(result)
            }
        ).end(buffer)
    })

    return NextResponse.json({ url: uploadResult.secure_url })
}
