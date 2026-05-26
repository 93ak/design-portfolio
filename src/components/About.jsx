import { motion } from 'framer-motion'
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal'

export default function About() {
  const { ref, controls } = useScrollReveal()

  return (
    <section
      id="about"
      className="py-12 px-8 md:px-20"
      style={{ backgroundColor: '#000819' }}
    >
      <motion.div
        ref={ref}
        animate={controls}
        variants={fadeUpVariants}
        initial="hidden"
        className="max-w-4xl mx-auto"
      >
        {/* Section label */}
        <p
          className="font-brand text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: '#FF06C2' }}
        >
          about me
        </p>

        {/* Divider */}
        <div className="w-16 h-px mb-10" style={{ backgroundColor: '#00F5DF' }} />

        {/* Main copy */}
        <div className="grid md:grid-cols-2 gap-12 font-helvetica">
          <div>
            <h2
              style={{ color: '#00F5DF' }}
              className="font-brand text-3xl md:text-4xl leading-tight mb-6 text-white"
            > 
              my digital creative journey:
              <br />
            </h2>
            <p className="text-white/60 leading-relaxed text-sm" style={{ color: '#ffffff' }}>
              My name is Akshara Sundaresan, and I’m a Computer Science student with a strong
              interest in graphic design, motion graphics, and video editing. Most of my work
              online is shared under the alias “vlackvink,” where I experiment with visual
              editing styles, music-driven edits, and digital design.
            </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-white/60 leading-relaxed text-sm">
                I originally started by creating fan edits and creative content, but over time
                my work expanded into more professional projects, including promotional videos,
                event visuals, and poster designs for my college. I enjoy combining technical
                skills with creativity to create visuals that feel polished, expressive, and memorable.
              </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-2">
              {['Photoshop', 'Graphic Desgin','Poster Design','Motion Graphics', 'Color Grading'].map((skill) => (
                <span
                  key={skill}
                  className="font-brand text-[10px] tracking-widest uppercase px-3 py-1 border"
                  style={{ borderColor: '#00F5DF', color: '#00F5DF' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
