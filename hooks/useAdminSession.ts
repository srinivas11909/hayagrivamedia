"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"


export function useAdminSession() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const logged = sessionStorage.getItem("isLoggedIn") === "true"
        setIsLoggedIn(logged)
    }, [pathname])

    return isLoggedIn
}
