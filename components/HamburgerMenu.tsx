'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Music, Mic, Sparkles, Instagram, User, Video, Mail, FileText, Calendar } from 'lucide-react'

const menuItems = [
  { name: 'Music', href: '/music', icon: Music },
  { name: 'Podcast', href: '/podcast', icon: Mic },
  { name: 'the glo collection', href: 'https://comeglowwithme.com', icon: Sparkles, isExternal: true },
  { name: 'Instagram', href: 'https://www.instagram.com/chariah_/?hl=en', icon: Instagram, isExternal: true },
  { name: 'About', href: '/about', icon: User },
  { name: 'Videos', href: 'https://www.youtube.com/@chariahgordon5741/featured', icon: Video, isExternal: true },
  { name: 'Contact', href: '/contact', icon: Mail },
  { name: 'Press', href: '/press', icon: FileText },
  { name: 'RSVP', href: 'https://chariahs.world/rsvp', icon: Calendar, isExternal: true },
]

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-4 left-4 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 mt-2 w-64 max-w-[calc(100vw-2rem)] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
          >
            <div className="p-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <motion.div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-800 font-medium">{item.name}</span>
                  </motion.div>
                )

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        {content}
                      </Link>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
