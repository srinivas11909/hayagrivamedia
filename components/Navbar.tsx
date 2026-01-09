"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "@/components/ThemeToggle"
import { usePathname } from "next/navigation"


const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 bg-background border-b border-border">
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
                    <span className="text-lg font-bold text-primary">
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
                                        ? "text-primary border-b-2 border-primary pb-1"
                                        : "text-foreground hover:text-primary"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Menu className="w-6 h-6 text-primary" />
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-black text-white">
                        <nav className="flex flex-col gap-0 mt-10">
                            {links.map(link => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg hover:text-brand-yellow p-3"
                                >
                                    {link.name}
                                </Link>
                            ))}
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
