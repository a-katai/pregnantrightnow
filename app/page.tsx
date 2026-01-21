'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const positions = [
            { x: '10%', y: '20%' }, { x: '20%', y: '40%' }, { x: '30%', y: '10%' },
            { x: '40%', y: '60%' }, { x: '50%', y: '30%' }, { x: '60%', y: '70%' },
            { x: '70%', y: '15%' }, { x: '80%', y: '50%' }, { x: '15%', y: '80%' },
            { x: '25%', y: '25%' }, { x: '35%', y: '75%' }, { x: '45%', y: '45%' },
            { x: '55%', y: '85%' }, { x: '65%', y: '35%' }, { x: '75%', y: '65%' }
          ];
          const pos = positions[i % positions.length];
          return (
            <motion.div
              key={i}
              className="absolute text-pink-300 text-xl"
              style={{ left: pos.x, top: pos.y }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -30, -60],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + (i % 2),
                repeat: Infinity,
                delay: (i * 0.3) % 3,
              }}
            >
              ❤️
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-pink-200/60 shadow-2xl"
          style={{
            boxShadow: '0 8px 32px 0 rgba(255, 182, 193, 0.3)',
          }}
        >
          {/* Baby-themed emoji decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl mb-6 flex items-center justify-center gap-3"
            style={{
              imageRendering: 'crisp-edges',
              WebkitFontSmoothing: 'antialiased',
              textRendering: 'optimizeLegibility',
              transform: 'translateZ(0)',
            }}
          >
            <span style={{ display: 'inline-block', transform: 'translateZ(0)' }}>👶</span>
            <span style={{ display: 'inline-block', transform: 'translateZ(0)' }}>✨</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            style={{ lineHeight: '1.2' }}
          >
            Pregnant Right Now
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            <p className="font-medium">
              Join us on February 20th for a special EP release party celebrating PRN: Pregnant Right Now—a powerful project created with heart, honesty, and purpose.
            </p>
            <p>
              This event is more than music; it&apos;s a gathering rooted in love, community, and support for moms in need. Come out to enjoy the EP, connect with others, and be part of something meaningful.
            </p>
            <p className="text-pink-600 font-medium">
              Attend, celebrate, and if you&apos;re able, donate through the link provided to help support moms who need it most.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10"
          >
            <p className="text-pink-500 mb-8 text-xl font-semibold">
              - Chariah <span style={{ display: 'inline-block', imageRendering: 'crisp-edges', transform: 'translateZ(0)' }}>💕</span>
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://chariahs.world/rsvp"
                className="inline-block px-10 py-5 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white font-bold rounded-full hover:from-pink-500 hover:via-purple-500 hover:to-pink-600 transition-all duration-300 shadow-xl text-lg"
              >
                RSVP Now <span style={{ display: 'inline-block', imageRendering: 'crisp-edges', transform: 'translateZ(0)' }}>🎉</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
