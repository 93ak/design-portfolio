import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CardPoster({ poster }) {
  return (
    <Link to={`/poster/${poster.id}`} className="block">
      <motion.article
        className="flex-shrink-0 w-[340px] cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        {/* overflow-hidden only on image wrapper — keeps rounded corners on scale */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={poster.image}
            alt={poster.title}
            className="w-full h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
          />
        </div>

        <div className="pt-4">
          <h3 className="font-brand text-lg text-white">{poster.title}</h3>
          <p className="text-white/50 text-sm mt-1">{poster.description}</p>
        </div>
      </motion.article>
    </Link>
  )
}