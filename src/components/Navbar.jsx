import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'home', target: 'hero' },
  { label: 'about me', target: 'about' },
  { label: 'portfolio', target: 'portfolio' },
  { label: 'contact me', target: 'contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{ backgroundColor: '#000819' }}
    >
      {/* Brand */}
      <button
        onClick={() => scrollTo('hero')}
        className="font-brand text-white text-lg tracking-widest uppercase hover:text-[#FF06C2] transition-colors duration-300"
      >
        vlackvink
      </button>

      {/* Links */}
      <ul className="flex gap-8">
        {NAV_LINKS.map(({ label, target }) => (
          <li key={target}>
            <button
              onClick={() => scrollTo(target)}
              className="font-brand text-xs text-white/70 tracking-widest uppercase hover:text-[#00F5DF] transition-colors duration-300 relative group"
            >
              {label}
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00F5DF] group-hover:w-full transition-all duration-300" />
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
