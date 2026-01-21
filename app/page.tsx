'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a2e] to-[#16213e] text-white flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500"
          >
            Pregnant Right Now
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed"
          >
            <p>
              Join us on February 20th for a special EP release party celebrating PRN: Pregnant Right Now—a powerful project created with heart, honesty, and purpose.
            </p>
            <p>
              This event is more than music; it&apos;s a gathering rooted in love, community, and support for moms in need. Come out to enjoy the EP, connect with others, and be part of something meaningful.
            </p>
            <p>
              Attend, celebrate, and if you&apos;re able, donate through the link provided to help support moms who need it most.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <p className="text-white/70 mb-6 text-lg">
              - Chariah ❤️
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://chariahs.world/rsvp"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-800 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-900 transition-all duration-300 shadow-lg text-lg"
              >
                RSVP Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
