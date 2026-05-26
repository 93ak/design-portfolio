import { motion } from 'framer-motion'
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal'

const CONTACT_LINKS = [
  { platform: 'Instagram', handle: '@vlackvink', href: 'https://www.instagram.com/vlackvink' },
  { platform: 'TikTok', handle: '@vlackvink', href: 'https://www.tiktok.com/@vlackvink_/' },
  { platform: 'Youtube', handle: '@vlackvink', href: 'https://www.youtube.com/@vlackvink'},
]

export default function Footer() {
  const { ref, controls } = useScrollReveal()

  return (
    <footer
      id="contact"
      className="py-24 px-8 md:px-20 border-t"
      style={{ backgroundColor: '#000819', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <motion.div
        ref={ref}
        animate={controls}
        variants={fadeUpVariants}
        initial="hidden"
        className="max-w-4xl mx-auto"
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2
              className="font-brand text-4xl md:text-5xl text-white mb-3"
              style={{ letterSpacing: '-0.02em' }}
            >
              let's work
              <br />
              <span style={{ color: '#FF06C2' }}>together.</span>
            </h2>
            <p className="font-helvetica text-sm text-white/40 max-w-xs leading-relaxed mt-4">
              Open to commissions, collaborations, and freelance graphic design & video editing projects.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {/* Social links */}
            {/* Social links */}
            {CONTACT_LINKS.map(({ platform, handle, href }) => (
              <div key={platform}>
                <p
                  className="font-brand text-[10px] tracking-[0.3em] uppercase mb-2"
                  style={{ color: '#00F5DF' }}
                >
                  {platform}
                </p>  

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-helvetica text-white text-lg md:text-xl transition-all duration-300 hover:text-[#FF06C2] hover:underline underline-offset-4"
                  style={{ color: '#ff32b7' }}
                >
                  {handle}
                </a>
              </div>
            ))}

            {/* Email — plain text, no mailto per PRD */}
            <div>
              <p
                className="font-brand text-[10px] tracking-[0.3em] uppercase mb-1"
                style={{ color: '#00F5DF' }}
              >
                Email
              </p>
              <p className="font-helvetica text-white text-lg md:text-xl transition-all duration-300 hover:text-[#FF06C2] hover:underline underline-offset-4"
                  style={{ color: '#ff32b7' }}>alp.akshara@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-brand text-xs tracking-widest uppercase text-white/30">
            vlackvink
          </p>
          <p className="font-helvetica text-xs text-white/20">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
