"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function FloatingThemeToggle() {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        const dark = storedTheme !== "light"
        setIsDark(dark)
        document.documentElement.classList.toggle("dark", dark)
    }, [])

    const toggleTheme = () => {
        const next = !isDark
        setIsDark(next)
        document.documentElement.classList.toggle("dark", next)
        localStorage.setItem("theme", next ? "dark" : "light")
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
        fixed bottom-6 left-6 z-50
        h-12 w-12 rounded-full
        bg-background border border-border
        flex items-center justify-center
        shadow-lg
        hover:scale-110 transition
      "
        >
            {isDark ? (
                <Sun className="h-5 w-5 text-primary" />
            ) : (
                <Moon className="h-5 w-5 text-primary" />
            )}
        </button>
    )
}
