import AdminSidebar from "./AdminSidebar"
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
