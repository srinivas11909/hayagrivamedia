// import Link from "next/link"

// export default function Footer() {
//   return (
//     <footer className="bg-black border-t border-yellow-500/20">
//       <div className="container py-12 grid gap-8 md:grid-cols-3">

//         {/* Brand */}
//         <div>
//           <h3 className="text-white font-bold text-lg">
//             Highgreeva Media
//           </h3>
//           <p className="mt-3 text-sm text-white max-w-xs">
//             Cinematic event management, movie production and photography
//             services that create unforgettable experiences.
//           </p>
//         </div>

//         {/* Links */}
//         <div>
//           <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
//           <ul className="space-y-2 text-sm text-white">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/about">About</Link></li>
//             <li><Link href="/events">Events</Link></li>
//             <li><Link href="/gallery">Gallery</Link></li>
//             <li><Link href="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-semibold mb-4 text-white">Contact</h4>
//           <p className="text-sm text-white">
//             📍 India<br />
//             📞 +91 90149 70993<br />
//             ✉ hayagrivamedia@gmail.com
//           </p>
//         </div>

//       </div>

//       <div className="text-center text-xs text-gray-500 py-4 border-t border-yellow-500/10">
//         © {new Date().getFullYear()} Hayagriva Media. All rights reserved.
//       </div>
//     </footer>
//   )
// }

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, YoutubeIcon } from 'lucide-react'
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"

const footerLinks = {
  services: [
    { label: 'Movie Trailers', href: '/movie-trailers' },
    { label: 'Wedding Events', href: '/weddings' },
    { label: 'Photography', href: '/photography' },
    { label: 'Corporate Events', href: '/corporate-events' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}


const socialLinks = [
  { icon: FaPinterestP, href: 'https://in.pinterest.com/hayagrivamedia/', label: 'Pinterest' },
  { icon: Instagram, href: 'https://www.instagram.com/hayagriva_media', label: 'Instagram' },
  { icon: FaXTwitter, href: 'https://x.com', label: 'X' },
  { icon: Youtube, href: 'https://www.youtube.com/@hayagrivamedia', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold mb-4 text-[#ffca29] font-bold text-lg flex items-center">
              <Image
                src="/logo.jpeg"
                alt="Highgreeva Media"
                className="mr-2"
                width={36}
                height={36}
                priority
              /> Hayagriva Media
            </h3>
            <p className="text-sm mb-4" style={{ color: 'rgba(255, 202, 41, 0.8)' }}>
              Transforming moments into memories with professional media production and event management services.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80 bg-[#ffca29]"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-[#020201]" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4  text-white">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'rgba(255, 202, 41, 0.8)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4  text-white">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'rgba(255, 202, 41, 0.8)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                <div>
                  <a
                    href="tel:+919014970993"
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'rgba(255, 202, 41, 0.8)' }}
                  >
                    +91 90149 70993
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5  text-white" />
                <div>
                  <a
                    href="mailto:hayagrivamedia@gmail.com"
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'rgba(255, 202, 41, 0.8)' }}
                  >
                    hayagrivamedia@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5  text-white" />
                <span className="text-sm" style={{ color: 'rgba(255, 202, 41, 0.8)' }}>
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8" style={{ borderColor: 'rgba(255, 202, 41, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <p className="text-sm w-full text-center" style={{ color: 'rgba(255, 202, 41, 0.8)' }}>
              © {new Date().getFullYear()} Hayagriva Media. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: 'rgba(255, 202, 41, 0.8)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
