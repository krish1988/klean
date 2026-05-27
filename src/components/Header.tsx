"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname === path ? "active" : "";
  };

  return (
    <header className={`nav ${isSolid ? "solid" : ""} ${isOpen ? "open" : ""}`} id="nav">
      <Link href="/" className="nav__brand">
        Kélane <i>créations</i>
      </Link>
      
      <nav className="nav__menu">
        <Link href="/" className={`nav__link ${isActive("/")}`}>
          Accueil
        </Link>
        <Link href="/services" className={`nav__link ${isActive("/services")}`}>
          Services
        </Link>
        <Link href="/about" className={`nav__link ${isActive("/about")}`}>
          L'Atelier
        </Link>
        <Link href="/contact" className={`nav__link ${isActive("/contact")}`}>
          Contact
        </Link>
        <a href="tel:0389604345" className="nav__cta">
          03 89 60 43 45
        </a>
      </nav>

      <button 
        className="nav__burger" 
        aria-label="Menu" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
