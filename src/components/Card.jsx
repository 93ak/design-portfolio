import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Card({ video }) {
  const navigate = useNavigate()

  return (
    <motion.article
      className="scroll-snap-child flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden cursor-pointer bg-white relative group"
      whileHover={{
        scale: 1.03,
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-44">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: 'rgba(255,6,194,0.25)' }}>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#FF06C2' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
              <polygon points="5,3 13,8 5,13" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5" style={{ backgroundColor: 'white' }}>
        <p
          className="font-brand text-[9px] tracking-[0.3em] uppercase mb-2"
          style={{ color: '#FF06C2' }}
        >
          {video.category}
        </p>
        <h3
          className="font-brand text-sm leading-snug"
          style={{ color: '#000819' }}
        >
          {video.title}
        </h3>
        <p className="font-helvetica text-xs mt-2 leading-relaxed" style={{ color: '#000819', opacity: 0.5 }}>
          {video.description}
        </p>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: '#FF06C2' }}
      />
    </motion.article>
  )
}
