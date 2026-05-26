// Reusable hook that returns Framer Motion props for scroll-reveal animations.
// Usage: const { ref, controls, variants } = useScrollReveal()
// Apply: <motion.div ref={ref} animate={controls} variants={variants} initial="hidden">

import { useEffect } from 'react'
import { useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return { ref, controls }
}
