'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { LucideIcon } from 'lucide-react'

type PlanetProps = {
  name: string
  href: string
  orbitRadius: number
  size: number
  speed: number
  color: string
  angle: number
  isExternal?: boolean
  floatOffset: number
  icon: LucideIcon
  onHoverChange?: (hovered: boolean) => void
}

export default function Planet({
  name,
  href,
  orbitRadius,
  size,
  speed,
  color,
  angle,
  isExternal,
  floatOffset,
  icon: Icon,
  onHoverChange,
}: PlanetProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered)
    onHoverChange?.(hovered)
  }

  const planetStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: `0 0 ${size * 0.8}px ${color}60, 0 0 ${size * 1.2}px ${color}40, inset 0 0 ${size * 0.3}px rgba(255, 255, 255, 0.3)`,
  }

  const glossStyle = {
    position: 'absolute' as const,
    top: '20%',
    left: '25%',
    width: '35%',
    height: '35%',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
    pointerEvents: 'none' as const,
  }

  // Calculate rotation speed - lower speed value = faster rotation (like real planets)
  // Convert speed (8-22) to rotation duration (slower planets take longer to orbit)
  const rotationDuration = speed * 4 // seconds per full rotation (doubled to slow down)

  const PlanetContent = (
      <motion.div
        style={{
          position: 'absolute' as const,
          left: '50%',
          top: '50%',
          marginLeft: `-${size / 2}px`,
          marginTop: `-${size / 2}px`,
          zIndex: 20,
          transformOrigin: 'center center',
        }}
        animate={{ 
          rotate: angle + 360,
        }}
        transition={{
          duration: rotationDuration,
          repeat: Infinity,
          ease: 'linear',
        }}
        initial={{ rotate: angle }}
      >
        <div
          style={{
            transform: `translateX(${orbitRadius}px)`,
          }}
        >
      <motion.div
        style={{
          ...planetStyle,
          minWidth: '44px',
          minHeight: '44px',
        }}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onFocus={() => handleHover(true)}
        onBlur={() => handleHover(false)}
        animate={{
          scale: isHovered ? 1.18 : 1,
          y: [0, -8, 0],
        }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
          y: {
            duration: speed * 2, // Doubled to slow down floating
            repeat: Infinity,
            ease: 'easeInOut',
            delay: floatOffset,
          },
        }}
        whileTap={{
          scale: 1.3,
        }}
        className="relative flex items-center justify-center touch-manipulation"
      >
        {/* Gloss highlight */}
        <div style={glossStyle} />
        
        {/* Icon */}
        <Icon 
          size={size * 0.55} 
          className="relative z-10"
          style={{ 
            color: 'rgba(255, 255, 255, 0.95)',
            filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4))',
            strokeWidth: 2.5,
          }}
        />
        
        {/* Sparkle effect on hover */}
        {isHovered && (
          <>
            <motion.div
              className="absolute"
              style={{
                top: '10%',
                right: '15%',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: `0 0 6px ${color}`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <motion.div
              className="absolute"
              style={{
                bottom: '20%',
                left: '20%',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'rgba(255, 140, 105, 0.9)',
                boxShadow: `0 0 4px ${color}`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
            />
          </>
        )}
        </motion.div>
        </div>
      </motion.div>
  )

  return (
    <>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
        >
          {PlanetContent}
        </a>
      ) : (
        <Link
          href={href}
          className="focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
        >
          {PlanetContent}
        </Link>
      )}
      
      {/* Tooltip */}
      <motion.div
        className="absolute pointer-events-none z-50 hidden md:block"
        style={{
          left: '50%',
          top: '50%',
          transform: `rotate(${angle}deg) translateX(${orbitRadius + size / 2 + 20}px) translate(-50%, -50%)`,
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-white/90 backdrop-blur-sm text-orange-600 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-lg">
          {name}
        </div>
      </motion.div>
    </>
  )
}
