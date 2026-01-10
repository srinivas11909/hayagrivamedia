import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="container py-12 grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-lg">
            Highgreeva Media
          </h3>
          <p className="mt-3 text-sm text-white max-w-xs">
            Cinematic event management, movie production and photography
            services that create unforgettable experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <p className="text-sm text-white">
            📍 India<br />
            📞 +91 90149 70993<br />
            ✉ hayagrivamedia@gmail.com
          </p>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-yellow-500/10">
        © {new Date().getFullYear()} Hayagriva Media. All rights reserved.
      </div>
    </footer>
  )
}
