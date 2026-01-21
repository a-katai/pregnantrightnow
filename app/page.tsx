'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-2xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border-2 border-pink-200 shadow-2xl"
        >
          {/* Baby-themed emoji decoration */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="text-6xl mb-4"
          >
            👶✨
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Pregnant Right Now
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed"
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
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <p className="text-pink-500 mb-6 text-xl font-semibold">
              - Chariah 💕
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://chariahs.world/rsvp"
                className="inline-block px-10 py-5 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white font-bold rounded-full hover:from-pink-500 hover:via-purple-500 hover:to-pink-600 transition-all duration-300 shadow-xl text-lg transform hover:shadow-2xl"
              >
                RSVP Now 🎉
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
