import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const textVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center overflow-hidden noise-overlay"
      style={{ backgroundColor: '#1e7069' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgb(255,255,255) 1px, transparent 1px), linear-gradient(90deg, rgb(255,255,255) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 gap-10 py-24 md:py-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Left: Brand text ─── */}
        <motion.div variants={textVariants} className="flex-1 flex flex-col gap-4">
          <p
            className="font-brand text-[10px] md:text-xs tracking-[0.3em] uppercase"
            style={{ color: '#ffffff' }}
          >
            Graphic Design · Video Editing · Motion Graphics
          </p>

          <h1
            className="font-brand leading-none select-none"
            style={{
              color: '#ff35cd',
              fontSize: 'clamp(2.2rem, 6vw, 7rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Akshara
            <br />
            Sundaresan
          </h1>

          <h2
            className="font-brand leading-none select-none"
            style={{
              color: '#f9b7e9',
              fontSize: 'clamp(1rem, 2.5vw, 3rem)',
              letterSpacing: '-0.02em',
            }}
          >
            vlackvink
          </h2>

          <p
            className="font-helvetica text-sm max-w-xs mt-1 leading-relaxed"
            style={{ color: '#ffffff', opacity: 0.7 }}
          >
            Video edits, motion graphics, and design.
          </p>

          {/* ─── Buttons row ─── */}
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="font-brand text-xs tracking-widest uppercase px-6 py-3 border-2 transition-all duration-300 hover:bg-[#FF06C2] hover:border-[#FF06C2] hover:text-white"
              style={{ borderColor: '#ffffff', color: '#ffffff' }}
            >
              view work
            </button>

            <a
              href="http://www.fiverr.com/s/ZmEy7rk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-brand text-xs tracking-widest uppercase px-6 py-3 border-2 transition-all duration-300 hover:bg-[#00F5DF] hover:border-[#00F5DF] hover:text-[#000819]"
              style={{ borderColor: '#00F5DF', color: '#00F5DF' }}
            >
              fiverr (commissions)
            </a>
          </div>
        </motion.div>

        {/* ─── Right: Image ─── */}
        <motion.div
          variants={imageVariants}
          className="flex-1 self-stretch flex justify-end"
        >
          <div className="relative h-full w-full max-w-4xl overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 w-1/2 z-10 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, #1e7069 0%, rgba(30,112,105,0.85) 15%, rgba(30,112,105,0.4) 40%, transparent 100%)',
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-40 z-10 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to bottom, #1e7069 0%, rgba(30,112,105,0.7) 30%, transparent 100%)',
              }}
            />
            <img
              src="https://i.pinimg.com/1200x/71/88/86/718886ccff63857bd635cb02c44116cf.jpg"
              alt="vlackvink hero"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.3) contrast(1.1)' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to bottom, transparent 0%, rgba(30,112,105,0.6) 40%, #1e7069 100%)',
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{ background: 'linear-gradient(to bottom, transparent, #000819)' }}
      />
    </section>
  )
}