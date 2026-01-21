'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { 
  Music, 
  Mic, 
  Sparkles, 
  Instagram, 
  User, 
  Video, 
  Mail, 
  FileText,
  Calendar,
  LucideIcon 
} from 'lucide-react'
import Planet from './Planet'

type Planet = {
  name: string
  href: string
  orbitRadius: number
  size: number
  speed: number
  color: string
  isExternal?: boolean
  icon: LucideIcon
}

const planets: Planet[] = [
  {
    name: 'Music',
    href: '/music',
    orbitRadius: 120,
    size: 40,
    speed: 8,
    color: '#FF8C69', // Light orange
    icon: Music,
  },
  {
    name: 'Podcast',
    href: '/podcast',
    orbitRadius: 160,
    size: 36,
    speed: 10,
    color: '#FF7F50', // Coral
    icon: Mic,
  },
  {
    name: 'the glo collection',
    href: 'https://comeglowwithme.com',
    orbitRadius: 200,
    size: 38,
    speed: 12,
    color: '#8B3E5E', // Burgundy
    isExternal: true,
    icon: Sparkles,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/chariah_/?hl=en',
    orbitRadius: 240,
    size: 34,
    speed: 14,
    color: '#FF8C69', // Light orange
    isExternal: true,
    icon: Instagram,
  },
  {
    name: 'About',
    href: '/about',
    orbitRadius: 280,
    size: 42,
    speed: 16,
    color: '#FFF8DC', // Cream
    icon: User,
  },
  {
    name: 'Videos',
    href: 'https://www.youtube.com/@chariahgordon5741/featured',
    orbitRadius: 320,
    size: 38,
    speed: 18,
    color: '#FF7F50', // Coral
    isExternal: true,
    icon: Video,
  },
  {
    name: 'Contact',
    href: '/contact',
    orbitRadius: 360,
    size: 36,
    speed: 20,
    color: '#FF8C69', // Light orange
    icon: Mail,
  },
  {
    name: 'Press',
    href: '/press',
    orbitRadius: 400,
    size: 34,
    speed: 22,
    color: '#8B3E5E', // Burgundy
    icon: FileText,
  },
  {
    name: 'RSVP',
    href: 'https://chariahs.world/rsvp',
    orbitRadius: 440,
    size: 36,
    speed: 24,
    color: '#FF7F50', // Coral
    isExternal: true,
    icon: Calendar,
  },
]

export default function SolarNav() {
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Adjust orbit radii for mobile - more aggressive scaling for smaller screens
  const getOrbitRadius = (baseRadius: number) => {
    if (isMobile) {
      // Scale down more for very small screens
      return baseRadius * 0.5
    }
    return baseRadius
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden z-10">
      {/* Container - no global rotation since each planet rotates independently */}
      <div className="absolute w-full h-full">
        {/* Orbits */}
        {planets.map((planet, index) => {
          const radius = getOrbitRadius(planet.orbitRadius)
          const angle = (360 / planets.length) * index
          const isHovered = hoveredPlanet === planet.name
          return (
            <div
              key={planet.name}
              className="absolute border rounded-full transition-all duration-300"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderColor: isHovered ? 'rgba(255, 140, 105, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                boxShadow: isHovered ? '0 0 20px rgba(255, 140, 105, 0.2)' : 'none',
              }}
            >
              {/* Dotted star markers along orbit */}
              {Array.from({ length: 12 }).map((_, i) => {
                const starAngle = (360 / 12) * i
                const x = radius + radius * Math.cos((starAngle * Math.PI) / 180)
                const y = radius + radius * Math.sin((starAngle * Math.PI) / 180)
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                )
              })}
            </div>
          )
        })}
        {/* Center Chariah core */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6, // Doubled to slow down pulsing
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Glowing orb with transitioning colors */}
            <motion.div
              className="rounded-full relative overflow-hidden"
              style={{
                width: isMobile ? '80px' : '120px',
                height: isMobile ? '80px' : '120px',
              }}
            >
              {/* Base gradient layer */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FF8C69 0%, #FF7F50 50%, #8B3E5E 100%)',
                  boxShadow: '0 0 40px rgba(255, 140, 105, 0.6), 0 0 80px rgba(255, 127, 80, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.3)',
                }}
                animate={{
                  opacity: [1, 0.3, 0.3, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Second gradient layer */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FF7F50 0%, #8B3E5E 50%, #FF8C69 100%)',
                  boxShadow: '0 0 40px rgba(255, 127, 80, 0.6), 0 0 80px rgba(139, 62, 94, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.3)',
                }}
                animate={{
                  opacity: [0.3, 1, 0.3, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Third gradient layer */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #8B3E5E 0%, #FF8C69 50%, #FF7F50 100%)',
                  boxShadow: '0 0 40px rgba(139, 62, 94, 0.6), 0 0 80px rgba(255, 140, 105, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.3)',
                }}
                animate={{
                  opacity: [0.3, 0.3, 1, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
            {/* Glint highlight - outside animated layers */}
            <div
              className="absolute top-4 left-6 w-8 h-8 rounded-full pointer-events-none z-20"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
              }}
            />
            
            {/* Heart-like glint - outside animated layers */}
            <div
              className="absolute top-8 right-8 w-4 h-4 pointer-events-none z-20"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 70%)',
                borderRadius: '50%',
              }}
            />
            
            {/* Pulsing halo */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255, 140, 105, 0.3) 0%, transparent 70%)',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 4, // Doubled to slow down halo pulsing
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>

        {/* Planets */}
        {planets.map((planet, index) => {
          const radius = getOrbitRadius(planet.orbitRadius)
          const angle = (360 / planets.length) * index
          return (
            <Planet
              key={planet.name}
              name={planet.name}
              href={planet.href}
              orbitRadius={radius}
              size={isMobile ? Math.max(planet.size * 0.9, 36) : planet.size}
              speed={planet.speed}
              color={planet.color}
              angle={angle}
              isExternal={planet.isExternal}
              floatOffset={index * 0.5}
              icon={planet.icon}
              onHoverChange={(hovered) => setHoveredPlanet(hovered ? planet.name : null)}
            />
          )
        })}
      </div>
    </div>
  )
}
