"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon, Menu } from "lucide-react"
import { cn } from "../../lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Set active tab based on current route
    const current = items.find(item =>
      item.url === '/'
        ? location.pathname === '/'
        : location.pathname.startsWith(item.url)
    )
    if (current) {
      setActiveTab(current.name)
    } else {
      setActiveTab("") // Clear active tab if no match
    }
  }, [location.pathname, items])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-background/80 border-b border-border backdrop-blur-lg",
        className,
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 min-h-[80px]">
        {/* Company Name with Responsive Gradient and 3D Font */}
        <Link to="/" className="flex items-center gap-2 font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight select-none" style={{ fontFamily: 'Orbitron, Poppins, Montserrat, sans-serif' }}>
          <img src="/assets/img/logo.svg" alt="RichverseEcoTech Logo" loading="lazy" className="w-11 h-11 object-contain" />
          <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 text-transparent bg-clip-text drop-shadow-lg text-lg sm:text-2xl md:text-4xl">RichverseEcoTech</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 bg-background/5 border border-border backdrop-blur-lg py-2 px-2 rounded-full shadow-lg min-h-[56px]">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative flex items-center gap-2 cursor-pointer text-base font-semibold px-5 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 text-white shadow-lg" : undefined,
                )}
              >
                <Icon size={20} strokeWidth={2.2} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 rounded-full -z-10 opacity-90"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 22,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 rounded-t-full blur-sm" />
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
        {/* Hamburger for Mobile with Animated X */}
        <button
          className="md:hidden p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          <span className="relative w-7 h-7 flex items-center justify-center">
            {!menuOpen && <Menu size={24} className="transition-all" />}
            {menuOpen && (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </span>
        </button>
      </div>
      {/* Mobile Nav Dropdown */}
      {isMobile && menuOpen && (
        <div className="md:hidden absolute right-4 left-auto top-[80px] w-[92vw] max-w-xs bg-background/95 border border-border shadow-2xl rounded-2xl py-3 px-2 z-40 animate-fade-in flex flex-col items-center gap-1">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            return (
              <motion.div
                key={item.name}
                whileTap={{ scale: 1.12 }}
                whileHover={{ scale: 1.06 }}
                className="w-full flex justify-center"
              >
                <Link
                  to={item.url}
                  onClick={() => {
                    setActiveTab(item.name)
                    setMenuOpen(false)
                  }}
                  className={cn(
                    "relative flex items-center gap-2 justify-center cursor-pointer text-base font-semibold p-2 rounded-full transition-colors w-11/12",
                    "text-foreground/80 hover:text-primary",
                    isActive ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 text-white shadow-lg" : undefined,
                  )}
                >
                  <Icon size={22} strokeWidth={2.2} />
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp-mobile"
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 rounded-full -z-10 opacity-90"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 22,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </div>
      )}
    </nav>
  )
} 