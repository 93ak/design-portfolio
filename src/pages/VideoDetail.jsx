import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { videos } from '../assets/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, duration: 0.4 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function VideoDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const video = videos.find((v) => v.id === id)

  if (!video) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-6"
        style={{ backgroundColor: '#000819' }}
      >
        <p className="font-brand text-white text-2xl">Video not found.</p>
        <button
          onClick={() => navigate('/')}
          className="font-brand text-xs tracking-widest uppercase px-6 py-3 border border-white/30 text-white hover:border-[#FF06C2] hover:text-[#FF06C2] transition-colors duration-300"
        >
          ← Back to home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000819' }}>
      {/* Minimal top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b"
        style={{ backgroundColor: '#000819', borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 font-brand text-xs tracking-widest uppercase text-white/60 hover:text-[#00F5DF] transition-colors duration-300 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="group-hover:-translate-x-1 transition-transform duration-300"
          >
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          back
        </button>

        <span className="font-brand text-white text-sm tracking-widest uppercase">vlackvink</span>
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 pt-28 pb-20"
      >
        {/* Category tag */}
        <motion.p
          variants={itemVariants}
          className="font-brand text-[10px] tracking-[0.4em] uppercase mb-4"
          style={{ color: '#FF06C2' }}
        >
          {video.category}
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-brand text-4xl md:text-6xl text-white leading-none mb-2"
          style={{ letterSpacing: '-0.02em' }}
        >
          {video.title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-16 h-px my-8"
          style={{ backgroundColor: '#00F5DF' }}
        />

        {/* YouTube embed */}
        <motion.div
          variants={itemVariants}
          className="relative w-full rounded-xl overflow-hidden mb-10"
          style={{ paddingBottom: '56.25%', height: 0 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
            style={{ borderRadius: '12px' }}
          />
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="max-w-2xl">
          <h2
            className="font-brand text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: '#00F5DF' }}
          >
            About this project
          </h2>
          <p className="font-helvetica text-white/60 leading-relaxed">
            {video.description}
          </p>
        </motion.div>

        {/* Related videos nudge */}
        <motion.div variants={itemVariants} className="mt-16 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p
            className="font-brand text-xs tracking-widest uppercase mb-6"
            style={{ color: '#FF06C2' }}
          >
            More work
          </p>
          <div className="flex gap-4 flex-wrap">
            {videos
              .filter((v) => v.id !== id)
              .slice(0, 3)
              .map((v) => (
                <button
                  key={v.id}
                  onClick={() => navigate(`/video/${v.id}`)}
                  className="font-brand text-xs tracking-widest uppercase text-white/40 hover:text-[#00F5DF] transition-colors duration-300 border-b border-transparent hover:border-[#00F5DF] pb-0.5"
                >
                  {v.title} →
                </button>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
