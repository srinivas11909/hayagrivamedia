"use client"
import AdminSidebar from "./AdminSidebar"
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"
import { useEffect } from "react"

import { Toaster } from "@/components/ui/sonner"
import { useRouter } from "next/navigation"
import { useAdminSession } from "@/hooks/useAdminSession"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const isLoggedIn = useAdminSession()
  useEffect(() => {
    if (isLoggedIn === false) {
      router.replace("/admin/login")
    }
  }, [isLoggedIn])

  // 🔒 Prevent UI flash while checking session
  if (isLoggedIn === null) {
    return null // or loader
  }

  // 🚫 Extra safety
  if (isLoggedIn === false) {
    return children
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Page Content */}
        <SidebarInset className="p-8">
          {children}
        </SidebarInset>

      </div>
    </SidebarProvider>
  )
}
