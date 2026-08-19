import { useRef } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import CardPoster from './CardPoster'
import { videos, posters } from '../assets/portfolioData'
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal'

const SCROLL_AMOUNT = 340

export default function Portfolio() {
  const scrollRef = useRef(null)
  const { ref: videoRef, controls: videoControls } = useScrollReveal()
  const { ref: posterRef, controls: posterControls } = useScrollReveal()

  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current?.scrollBy({ left:  SCROLL_AMOUNT, behavior: 'smooth' })

  return (
    <section
      id="portfolio"
      // overflow-hidden on the section was trapping vertical scroll inside —
      // removed it. Each scroll track handles its own overflow.
      style={{ backgroundColor: '#000819' }}
    >

      {/* ─── Block 1: Video Editing ──────────────────────── */}
      <div className="pt-24 pb-16">
        <motion.div
          ref={videoRef}
          animate={videoControls}
          variants={fadeUpVariants}
          initial="hidden"
          className="flex items-end justify-between px-8 md:px-20 mb-10"
        >
          <div>
            <p
              className="font-brand text-xs tracking-[0.4em] uppercase mb-5"
              style={{ color: '#FF06C2' }}
            >
              portfolio
            </p>
            <h2 className="font-brand text-3xl md:text-4xl text-white leading-tight">
              Video
              <br />
              <span style={{ color: '#00F5DF' }}>Editing</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <ArrowButton direction="left"  onClick={scrollLeft}  />
            <ArrowButton direction="right" onClick={scrollRight} />
          </div>
        </motion.div>

        <div className="relative pl-8 md:pl-20">
          <div
            className="absolute top-0 right-0 h-full w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #000819 0%, rgba(0,8,25,0.85) 35%, transparent 100%)' }}
          />
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-snap-x py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflowY: 'hidden' }}
          >
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card video={video} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Divider ─────────────────────────────────────── */}
      <div className="px-8 md:px-20">
        <div className="w-full h-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }} />
      </div>

      {/* ─── Block 2: Posters & Graphics ─────────────────── */}
      <div className="pt-16 pb-24">
        <motion.div
          ref={posterRef}
          animate={posterControls}
          variants={fadeUpVariants}
          initial="hidden"
          className="px-8 md:px-20 mb-10"
        >
          <h2 className="font-brand text-3xl md:text-4xl text-white leading-tight">
            Posters &amp;
            <br />
            <span style={{ color: '#00F5DF' }}>Graphics</span>
          </h2>
        </motion.div>

        <div className="relative px-8 md:px-20">
          <div
            className="absolute top-0 right-8 md:right-20 h-full w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #000819 0%, transparent 100%)' }}
          />
          {/* overflowY: hidden is the key fix — stops the tall cards from
              creating an internal vertical scrollbar inside the track */}
          <div
            className="flex gap-10 overflow-x-auto py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflowY: 'hidden' }}
          >
            {posters.map((poster, i) => (
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <CardPoster poster={poster} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

function ArrowButton({ direction, onClick }) {
  const isLeft = direction === 'left'
  return (
    <button
      onClick={onClick}
      className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[#FF06C2] hover:border-[#FF06C2] group"
      style={{ borderColor: 'rgba(255,255,255,0.2)' }}
      aria-label={isLeft ? 'Scroll left' : 'Scroll right'}
    >
      <svg
        width="16" height="16" viewBox="0 0 16 16" fill="none"
        className="text-white/60 group-hover:text-white transition-colors"
        style={{ transform: isLeft ? 'none' : 'rotate(180deg)' }}
      >
        <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}