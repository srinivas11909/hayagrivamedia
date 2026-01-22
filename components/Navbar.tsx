"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, Home, Info, CalendarDays, Image as ImageIcon, Phone, Icon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "@/components/ThemeToggle"
import { usePathname } from "next/navigation"


const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Events", href: "/events", icon: CalendarDays },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "Contact", href: "/contact", icon: Phone },
]

export default function Navbar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-black border-b border-white/10">
            <div className="container flex items-center justify-between h-16">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-primary">
                    {/* Replace with your real logo */}
                    <Image
                        src="/logo.jpeg"
                        alt="Highgreeva Media"
                        width={36}
                        height={36}
                        priority
                    />
                    <span className={`text-lg font-bold text-primary`}>
                        Hayagriva Media
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {links.map(link => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition ${isActive
                                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                                    : "text-white/80 hover:text-yellow-400"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile Nav */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger className="md:hidden">
                        <Menu className="w-6 h-6 text-primary" />
                    </SheetTrigger>
                    {/* <SheetContent side="left" className="bg-black text-white  w-[85%] sm:w-[380px] p-0 border-l border-white/10">
                        <nav className="flex flex-col gap-0 mt-10">
                            {links.map(link => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="
                                        px-6 py-2
                                        text-lg font-medium
                                        text-white/80
                                        hover:text-yellow-400
                                        hover:bg-white/5
                                        transition
                                        "
                                    onClick={() => setOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent> */}
                    <SheetContent
                        side="left"
                        className="bg-black text-white w-[85%] sm:w-[380px] p-0 border-l border-white/10"
                    >
                        {/* Mobile Logo */}
                        <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
                            <Image
                                src="/logo.jpeg"
                                alt="Hayagriva Media"
                                width={32}
                                height={32}
                            />
                            <span className="text-lg font-bold text-white">
                                Hayagriva Media
                            </span>
                        </div>

                        {/* Mobile Nav Links */}
                        <nav className="flex flex-col mt-2">
                            {links.map(link => {
                                const Icon = link.icon;
                                const isActive = pathname === link.href;

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`
            flex items-center gap-4
            px-6 py-4
            text-base font-medium
            transition
            ${isActive
                                                ? "bg-yellow-400/10 text-yellow-400"
                                                : "text-white/80 hover:text-yellow-400 hover:bg-white/5"
                                            }
          `}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{link.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </SheetContent>

                </Sheet>

            </div>
            {/* <div className="flex items-center gap-4">
                <ThemeToggle />
            </div> */}
        </header>
    )
}
