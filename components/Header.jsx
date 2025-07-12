import React, { useState, useEffect } from 'react'
import { Trail } from './Trail'
import styles from '../styles/Header.module.css'

const Header = () => {
  const [open, set] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      id="home"
      className="relative w-full min-h-screen bg-headerBGI bg-cover bg-center bg-no-repeat md:bg-fixed flex items-center justify-center overflow-hidden"
      style={{
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Premium overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-burgundy-950/30"></div>
      
      {/* Animated background particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-burgundy-950/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cream/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-burgundy-950/20 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 md:px-12 lg:px-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="flex flex-col items-center" onClick={() => set((state) => !state)}>
          <Trail open={open}>
            <span className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cream leading-tight tracking-tight mb-4 md:mb-6">
              Matthew Hernandez
            </span>
            <div className="mt-4 md:mt-6">
              <span className="font-body font-light text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-cream/90 tracking-wider uppercase">
                Film | Game Composer
              </span>
            </div>
          </Trail>
        </div>

        {/* Premium subtitle */}
        <div className={`mt-8 md:mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.5s'}}>
          <p className="font-body text-sm sm:text-base md:text-lg text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Crafting immersive musical experiences for visual storytelling
          </p>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-8 bg-gradient-to-b from-burgundy-950 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
