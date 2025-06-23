"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ChevronDown, Ticket, Info } from "lucide-react"
import Image from "next/image"

const navigation = [
  {
    name: "Home",
    href: "/",
    description: "Welcome to our community",
    icon: "🏠",
  },
  {
    name: "About",
    href: "/about",
    description: "Our story and mission",
    icon: "📖",
  },
  {
    name: "Events",
    href: "/events",
    description: "Past and upcoming events",
    icon: "📅",
  },
  {
    name: "Services",
    href: "/services",
    description: "Comprehensive support programs",
    icon: "🛠️",
  },
  {
    name: "Leadership",
    href: "/leadership",
    description: "Meet our visionary team",
    icon: "👥",
  },
  {
    name: "Unity Feast",
    href: "/unity-feast",
    description: "Annual summit event",
    icon: "🎯",
    hasDropdown: true,
    subItems: [
      {
        name: "Get Tickets",
        href: "/unity-feast#tickets",
        description: "Purchase your summit tickets",
        icon: <Ticket className="h-4 w-4" />,
      },
      {
        name: "About This Event",
        href: "/unity-feast#about",
        description: "Learn about the summit",
        icon: <Info className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Get in touch with us",
    icon: "📞",
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href.split("#")[0])
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false)
      }
      if (activeDropdown && !target.closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }

    if (isMenuOpen || activeDropdown) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen, activeDropdown])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl"
          : "bg-background/90 backdrop-blur-lg border-b border-transparent shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-16 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 p-1 border border-border/20">
                <Image
                  src="/images/usa-africa-logo.png"
                  alt="USA Africa Chamber Logo"
                  width={56}
                  height={40}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="absolute inset-0 w-16 h-12 bg-gradient-to-br from-blue-500 via-red-500 to-green-500 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-black text-primary group-hover:text-accent transition-all duration-300 tracking-tight">
                USA AFRICA
              </span>
              <span className="text-sm text-muted-foreground group-hover:text-secondary transition-all duration-300 font-semibold tracking-wider">
                CHAMBER
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group dropdown-container">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                        isActive(item.href)
                          ? "text-white bg-gradient-to-r from-primary to-accent shadow-lg"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl py-2 z-50">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-muted/50 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="text-primary">{subItem.icon}</div>
                            <div>
                              <div className="font-medium text-sm">{subItem.name}</div>
                              <div className="text-xs text-muted-foreground">{subItem.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                      isActive(item.href)
                        ? "text-white bg-gradient-to-r from-primary to-accent shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                )}

                {!item.hasDropdown && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-3 bg-foreground/95 backdrop-blur-sm text-background text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-border/20">
                    {item.description}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-foreground/95" />
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl px-6 py-3 border-2 border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
              asChild
            >
              <Link href="/admin">
                <span className="mr-2">👤</span>
                Member Login
              </Link>
            </Button>

            <Button
              size="sm"
              className="bg-gradient-to-r from-accent via-secondary to-primary hover:from-accent/90 hover:via-secondary/90 hover:to-primary/90 text-white rounded-xl px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group font-semibold"
              asChild
            >
              <Link href="/unity-feast#tickets">
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                Unity Feast Tickets
              </Link>
            </Button>
          </div>

          <div className="lg:hidden mobile-menu-container">
            <Button
              variant="ghost"
              size="sm"
              className="relative w-12 h-12 rounded-xl hover:bg-primary/10 transition-all duration-300 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-foreground transition-all duration-300 group-hover:bg-primary ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1.5"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-foreground transition-all duration-300 top-3 group-hover:bg-primary ${
                    isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-foreground transition-all duration-300 group-hover:bg-primary ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-4.5"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        <div
          className={`lg:hidden mobile-menu-container transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 border-t border-border/50" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-8 space-y-6 bg-gradient-to-b from-background to-muted/30 rounded-b-2xl">
            <nav className="flex flex-col space-y-3 px-2">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/70 hover:scale-102"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                      opacity: isMenuOpen ? 1 : 0,
                      transition: `all 0.3s ease ${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-base">{item.name}</div>
                        <div className="text-xs opacity-70">{item.description}</div>
                      </div>
                    </div>
                    <ChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {item.hasDropdown && item.subItems && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center space-x-3 p-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="text-primary">{subItem.icon}</div>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex flex-col space-y-4 pt-6 border-t border-border/50 px-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-2xl py-4 border-2 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 font-semibold"
                asChild
              >
                <Link href="/admin">
                  <span className="mr-2">👤</span>
                  Member Login
                </Link>
              </Button>

              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-accent via-secondary to-primary hover:from-accent/90 hover:via-secondary/90 hover:to-primary/90 text-white rounded-2xl py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
                asChild
              >
                <Link href="/unity-feast#tickets">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Unity Feast Tickets
                </Link>
              </Button>
            </div>

            <div className="pt-6 border-t border-border/50 px-2">
              <div className="text-center">
                <Badge className="bg-gradient-to-r from-primary via-secondary to-accent text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-lg">
                  <span className="mr-2">📞</span>
                  Need Help? Call 0708-473-6983
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
