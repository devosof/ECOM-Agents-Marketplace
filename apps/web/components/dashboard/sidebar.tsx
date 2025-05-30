"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Bot,
  CreditCard,
  ShoppingCart,
  Settings,
  Key,
  Share2
} from "lucide-react"

const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "My Agents",
    href: "/dashboard/my-agents",
    icon: Bot
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingCart
  },
  {
    title: "API Keys",
    href: "/dashboard/api-keys",
    icon: Key
  },
  {
    title: "Integrations",
    href: "/dashboard/integrations",
    icon: Share2
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  }
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-background border-r min-h-screen p-6">
      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/5"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
} 