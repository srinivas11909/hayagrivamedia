import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Contact from "@/models/Contact"
import { transporter } from "@/lib/mailer"

export async function POST(req: Request) {
  try {
    await connectDB()

    const { name, email, phone, message } = await req.json()
    console.log(name, email)

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
      to: "hayagrivamedia@gmail.com",
      subject: "📩 New Contact Enquiry",
      html: `
  <div style="background:#f5f5f5;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <tr>
        <td style="background:#f5c400;padding:24px 32px;">
          <h1 style="margin:0;font-size:22px;color:#111;">Hayagriva Media</h1>
          <p style="margin:6px 0 0;font-size:14px;color:#111;">
            New Website Enquiry
          </p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:32px;">
          <h2 style="margin:0 0 16px;font-size:20px;color:#111;">
            Contact Form Submission
          </h2>

          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;color:#333;">
            <tr>
              <td style="padding:10px 0;width:120px;color:#666;">Name</td>
              <td style="padding:10px 0;font-weight:600;color:#111;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#666;">Email</td>
              <td style="padding:10px 0;font-weight:600;color:#111;">${email}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#666;">Phone</td>
              <td style="padding:10px 0;font-weight:600;color:#111;">${phone}</td>
            </tr>
          </table>

          <!-- Message Box -->
          <div style="margin-top:24px;">
            <p style="margin:0 0 8px;font-size:14px;color:#666;">Message</p>
            <div style="background:#f9f9f9;border-left:4px solid #f5c400;padding:16px;border-radius:6px;color:#111;font-size:15px;line-height:1.6;">
              ${message}
            </div>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:20px 32px;background:#fafafa;border-top:1px solid #eee;text-align:center;">
          <p style="margin:0;font-size:13px;color:#777;">
            This enquiry was submitted from the Hayagriva Media website.
          </p>
          <p style="margin:6px 0 0;font-size:12px;color:#aaa;">
            © ${new Date().getFullYear()} Hayagriva Media
          </p>
        </td>
      </tr>

    </table>
  </div>
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
