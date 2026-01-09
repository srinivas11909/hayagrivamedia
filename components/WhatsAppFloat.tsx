import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  )
}
