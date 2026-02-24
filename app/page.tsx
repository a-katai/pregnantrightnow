'use client'

import { motion } from 'framer-motion'

const APPLE_MUSIC_URL = 'https://music.apple.com/us/album/p-r-n-pregnant-right-now/1878487242'
const SPOTIFY_URL = 'https://open.spotify.com/album/7Dxbh2V0kFetIn6iHGM0MM?si=aQ_i36LSRkGji6R7P9DrtA'

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Full-screen video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Minimal player overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-md text-center"
        >
          {/* EP Title */}
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/60">
            P.R.N
          </p>
          <h1 className="mb-2 font-light tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', lineHeight: 1.1 }}>
            Pregnant Right Now
          </h1>
          <p className="mb-12 text-sm font-light tracking-wide text-white/70">
            Chariah · EP
          </p>

          {/* Stream links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
          >
            <a
              href={APPLE_MUSIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.994 17.974a12.332 12.332 0 00-.096-1.313 11.12 11.12 0 00-.273-1.283 6.612 6.612 0 00-.539-1.24 5.496 5.496 0 00-.828-1.067 5.9 5.9 0 00-1.212-.88 6.611 6.611 0 00-1.508-.585 9.84 9.84 0 00-1.88-.288 10.283 10.283 0 00-1.139-.053c-.203 0-.402.01-.597.03a10.17 10.17 0 00-1.073.123 7.351 7.351 0 00-1.015.241 5.985 5.985 0 00-.861.39 5.5 5.5 0 00-.646.53 5.637 5.637 0 00-1.553 4.033 5.79 5.79 0 00.17 1.212 6.412 6.412 0 00.527 1.263 5.743 5.743 0 00.847 1.076 6.075 6.075 0 001.233.868 6.834 6.834 0 001.567.556 9.304 9.304 0 001.863.292c.336.022.677.033 1.02.033.264 0 .524-.01.779-.03a9.17 9.17 0 001.004-.12 7.564 7.564 0 001.032-.245 6.382 6.382 0 00.895-.402 5.85 5.85 0 00.695-.557 5.642 5.642 0 001.399-1.861 5.324 5.324 0 00.473-1.222 7.417 7.417 0 00.255-1.347zm-6.776-5.613c.302.414.506.906.588 1.434a12.068 12.068 0 01-.146 2.81 6.023 6.023 0 01-.344 1.287 4.444 4.444 0 01-.568 1.023 3.89 3.89 0 01-1.781 1.224 4.264 4.264 0 01-2.229.138 3.916 3.916 0 01-1.639-.769 4.122 4.122 0 01-1.075-1.278 4.544 4.544 0 01-.39-1.647 4.004 4.004 0 01.098-.93 4.159 4.159 0 01.324-.882 4.344 4.344 0 011.528-1.592 4.135 4.135 0 011.891-.576 4.37 4.37 0 011.418.156 4.015 4.015 0 011.296.581 4.377 4.377 0 011.026.932zM8.631 2.283c.152-.185.318-.357.496-.513a3.79 3.79 0 012.607-.92 3.924 3.924 0 011.313.251 3.79 3.79 0 011.183.654 3.982 3.982 0 01.79.849 4.265 4.265 0 01.268 1.004 4.07 4.07 0 01-.136 1.094 4.12 4.12 0 01-.362.927 3.964 3.964 0 01-2.711 1.873 3.89 3.89 0 01-1.268-.016 3.94 3.94 0 01-1.133-.346 3.753 3.753 0 01-.969-.673 3.926 3.926 0 01-.653-.806 4.152 4.152 0 01-.402-1.015 3.877 3.877 0 01-.143-1.072 3.913 3.913 0 01.122-1.096 4.058 4.058 0 01.363-.943 3.774 3.774 0 01.613-.858z" />
              </svg>
              Apple Music
            </a>
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Spotify
            </a>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}
