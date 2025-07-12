import React, { useEffect } from 'react'
import { motion, useScroll, useAnimationControls } from 'framer-motion'

//The approach recommended by Next.js
// We have to make sure that we are on the browser
const isBrowser = () => typeof window !== 'undefined'

function scrollToTop() {
  if (!isBrowser()) return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const ScrollToTopContainerVariants = {
  hide: { opacity: 0, y: 100, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1 },
}

function ScrollToTopButton() {
  const { scrollYProgress } = useScroll()
  const controls = useAnimationControls()

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.3) {
        controls.start('show')
      } else {
        controls.start('hide')
      }
    })
  })

  return (
    <motion.button
      className="group z-50 fixed bottom-8 right-8 p-4 bg-black/90 backdrop-blur-sm rounded-full border border-burgundy-950/30 text-cream hover:text-burgundy-950 transition-all duration-300 hover-lift hover-glow focus:outline-none focus:ring-2 focus:ring-burgundy-950/50"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </motion.button>
  )
}

export default ScrollToTopButton
