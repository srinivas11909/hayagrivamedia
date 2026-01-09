"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
    const [dark, setDark] = useState(true)

    useEffect(() => {
        const stored = localStorage.getItem("theme")
        const isDark = stored !== "light"
        setDark(isDark)
        document.documentElement.classList.toggle("dark", isDark)
    }, [])

    const toggle = () => {
        const next = !dark
        setDark(next)
        document.documentElement.classList.toggle("dark", next)
        localStorage.setItem("theme", next ? "dark" : "light")
    }

    return (
        <button
            onClick={toggle}
            className="rounded-md border p-2 hover:bg-muted"
            aria-label="Toggle theme"
        >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}
