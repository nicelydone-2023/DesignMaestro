import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold text-xl text-[#2D2D2D]">Design Studio</a>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "text-sm transition-colors hover:text-[#FF3366]",
                  location === item.href ? "text-[#FF3366]" : "text-[#2D2D2D]"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
