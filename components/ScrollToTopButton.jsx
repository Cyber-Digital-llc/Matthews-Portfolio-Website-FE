import React, { useState, useEffect } from 'react'
import { motion, useScroll, useAnimationControls } from 'framer-motion'

//The approach recommended by Next.js
// We have to make sure that we are on the browser
const isBrowser = () => typeof window !== 'undefined'

function scrollToTop() {
  if (!isBrowser()) return
  window.scrollTo({ top: 20, behavior: 'smooth' })
}

const ScrollToTopContainerVariants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
}

function ScrollToTopButton() {
  const { scrollYProgress } = useScroll()
  const controls = useAnimationControls()

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.5) {
        controls.start('show')
      } else {
        controls.start('hide')
      }
    })
  })

  return (
    <motion.button
      className="fixed bottom-0 right-0 p-3 rounded-md font-myriadpro text-xl  shadow-md shadow-[#ffffff] text-[#ffffff] hover:text-[#989898] cursor-pointer"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        class="w-4 h-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        ></path>
      </svg>
    </motion.button>
  )
}
export default ScrollToTopButton
