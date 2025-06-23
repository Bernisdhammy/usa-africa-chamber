import Link from "next/link"
import { Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Organization: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/leadership" },
      { name: "Mission & Vision", href: "/mission" },
      { name: "Annual Reports", href: "/reports" },
    ],
    Services: [
      { name: "Employment Services", href: "/services/employment" },
      { name: "Financial Programs", href: "/services/financial" },
      { name: "Business Development", href: "/services/business" },
      { name: "Education & Training", href: "/services/education" },
    ],
    "Unity First": [
      { name: "Summit Overview", href: "/unity-first" },
      { name: "Speakers", href: "/unity-first/speakers" },
      { name: "Sponsors", href: "/unity-first/sponsors" },
      { name: "Register", href: "/unity-first/register" },
    ],
    Resources: [
      { name: "Member Portal", href: "/members" },
      { name: "News & Updates", href: "/news" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-sm font-bold">USA AFRICA</span>
                <span className="text-xs opacity-80">CHAMBER</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-4">
              Empowering African diaspora communities through business development, workforce training, and
              unity-building initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">© {currentYear} USA Africa Chamber of Commerce. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
