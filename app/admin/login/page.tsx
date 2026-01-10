"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import BrandButton from "@/components/BrandButton"
import { useRouter } from "next/navigation"


export default function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()


    const submit = async (e: any) => {
        e.preventDefault()
        setError("")

        const res = await fetch("/api/auth/login", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })

        if (!res.ok) {
            setError("Invalid credentials")
            return
        }
        const data = await res.json()
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data.user))
        sessionStorage.setItem("isLoggedIn", "true")
        router.push("/admin/dashboard")
    }

    return (
        <div className="min-h-screen  flex items-center justify-center">
            <form
                onSubmit={submit}
                className="border bg-white border-yellow-500/20 p-8 rounded-lg w-96"
            >
                <h1 className="text-xl font-bold text-brand-yellow mb-6">
                    Admin Login
                </h1>

                <Input
                    placeholder="Email"
                    className="mb-4"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    className="mb-4"
                    onChange={e => setPassword(e.target.value)}
                />

                {error && (
                    <p className="text-red-500 text-sm mb-3">{error}</p>
                )}

                <BrandButton className="w-full">
                    Login
                </BrandButton>
            </form>
        </div>
    )
}
