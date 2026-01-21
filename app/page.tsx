'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const positions = [
            { x: '10%', y: '20%' }, { x: '20%', y: '40%' }, { x: '30%', y: '10%' },
            { x: '40%', y: '60%' }, { x: '50%', y: '30%' }, { x: '60%', y: '70%' },
            { x: '70%', y: '15%' }, { x: '80%', y: '50%' }, { x: '15%', y: '80%' },
            { x: '25%', y: '25%' }, { x: '35%', y: '75%' }, { x: '45%', y: '45%' },
            { x: '55%', y: '85%' }, { x: '65%', y: '35%' }, { x: '75%', y: '65%' },
            { x: '85%', y: '25%' }, { x: '90%', y: '55%' }, { x: '5%', y: '45%' },
            { x: '95%', y: '75%' }, { x: '12%', y: '60%' }
          ];
          const pos = positions[i % positions.length];
          return (
            <motion.div
              key={i}
              className="absolute text-pink-300 text-2xl"
              style={{ left: pos.x, top: pos.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                y: [0, -50, -100],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: (i * 0.2) % 2,
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white/75 backdrop-blur-xl rounded-3xl p-8 md:p-12 pb-10 border-2 border-pink-200/50 shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: '0 8px 32px 0 rgba(255, 182, 193, 0.37)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 240, 245, 0.75) 100%)',
          }}
        >
          {/* Glass reflection effect */}
          <div 
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-3xl z-0"
          />
          {/* Content wrapper */}
          <div className="relative z-10">
          {/* Decorative top border */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded-full mb-6" />
          
          {/* Baby-themed emoji decoration */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="text-6xl mb-6 flex items-center justify-center gap-3 relative"
            style={{ lineHeight: '1', height: 'auto' }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              👶
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
            >
              🎀
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-normal pb-2"
            style={{ lineHeight: '1.2', paddingBottom: '0.5rem' }}
          >
            Pregnant Right Now
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed pb-2"
          >
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-300" />
              <span className="text-2xl">💝</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-300" />
            </div>
            
            <p className="font-medium">
              Join us on February 20th for a special EP release party celebrating PRN: Pregnant Right Now—a powerful project created with heart, honesty, and purpose.
            </p>
            
            {/* Decorative element */}
            <div className="flex justify-center my-2">
              <span className="text-3xl">🌸</span>
            </div>
            
            <p>
              This event is more than music; it&apos;s a gathering rooted in love, community, and support for moms in need. Come out to enjoy the EP, connect with others, and be part of something meaningful.
            </p>
            
            {/* Decorative element */}
            <div className="flex justify-center my-2">
              <span className="text-3xl">💕</span>
            </div>
            
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
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300" />
              <span className="text-xl">✨</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
            </div>
            
            <p className="text-pink-500 mb-8 text-xl font-semibold flex items-center justify-center gap-2">
              <span>-</span>
              <span>Chariah</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💕
              </motion.span>
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href="https://chariahs.world/rsvp"
                className="inline-block px-10 py-5 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white font-bold rounded-full hover:from-pink-500 hover:via-purple-500 hover:to-pink-600 transition-all duration-300 shadow-xl text-lg transform hover:shadow-2xl relative z-10"
              >
                RSVP Now 🎉
              </Link>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 rounded-full blur-xl opacity-50 -z-10 animate-pulse" />
            </motion.div>
            
            {/* Bottom decorative element */}
            <div className="flex justify-center mt-8 gap-2">
              <span className="text-2xl">🎈</span>
              <span className="text-2xl">🎁</span>
              <span className="text-2xl">🎂</span>
            </div>
          </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
