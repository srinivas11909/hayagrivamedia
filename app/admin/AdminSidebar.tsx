"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
    LayoutDashboard,
    Image,
    Mail,
    LogOut,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"



const items = [
    {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Gallery",
        href: "/admin/gallery",
        icon: Image,
    },
    {
        title: "Events",
        href: "/admin/events",
        icon: Image,
    },
    {
        title: "Contacts",
        href: "/admin/contacts",
        icon: Mail,
    },
]

export default function AdminSidebar() {
    const pathname = usePathname()
    const router = useRouter()

    const logout = async () => {
        await fetch("/api/auth/logout", {
            method: "POST",
            credentials: "include",
        })

        // Clear client storage
        localStorage.clear()
        sessionStorage.clear()

        router.replace("/admin/login")
    }


    return (
        <Sidebar>
            <SidebarContent>

                {/* Brand */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-primary text-lg font-bold">
                        Highgreeva Admin
                    </SidebarGroupLabel>
                </SidebarGroup>

                {/* Navigation */}
                <SidebarGroup>
                    {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                const active = pathname === item.href
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={active}
                                        >
                                            <Link href={item.href}>
                                                <item.icon className="h-4 w-4" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>

            {/* Footer */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={logout} className="text-red-500">
                                <LogOut className="h-4 w-4" />
                                <span>Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
