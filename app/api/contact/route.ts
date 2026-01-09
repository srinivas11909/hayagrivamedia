import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Contact from "@/models/Contact"
import { transporter } from "@/lib/mailer"

export async function POST(req: Request) {
  try {
    await connectDB()

    const { name, email, phone, message } = await req.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // 1️⃣ Save to DB
    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    })

    // 2️⃣ Email → Admin
    await transporter.sendMail({
      from: `"Highgreeva Media" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Contact Enquiry",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    })

    // 3️⃣ Auto-reply → User
    await transporter.sendMail({
      from: `"Highgreeva Media" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for contacting Highgreeva Media",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to <b>Highgreeva Media</b>.</p>
        <p>We have received your message and our team will contact you shortly.</p>
        <br/>
        <p>— Highgreeva Media Team</p>
      `,
    })

    // 4️⃣ WhatsApp trigger (click-to-chat)
    const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER?.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(
      `New enquiry from ${name}\nPhone: ${phone}\nMessage: ${message}`
    )}`

    return NextResponse.json(
      {
        success: true,
        whatsappUrl,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
