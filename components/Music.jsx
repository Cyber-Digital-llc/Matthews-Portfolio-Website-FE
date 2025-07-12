import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Music = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('music')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="music"
      className="relative min-h-screen bg-black/95 flex flex-col lg:flex-row items-stretch overflow-hidden"
    >
      {/* Premium border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-burgundy-950 to-transparent"></div>
      
      {/* Left side - Background Image */}
      <div className="relative lg:w-1/2 h-96 lg:h-auto">
        <div 
          className="absolute inset-0 bg-musicBGI bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent lg:from-black/50"></div>
        
        {/* Subtle overlay for premium effect */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Floating accent elements */}
        <div className="absolute top-8 right-8 w-12 h-12 border border-burgundy-950/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-6 h-6 bg-burgundy-950/20 rounded-full"></div>
      </div>

      {/* Right side - Content */}
      <div className="relative lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 xl:p-20">
        <div className={`w-full max-w-4xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          {/* Section header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-burgundy-950 to-transparent"></div>
              <span className="font-body text-sm text-burgundy-950 uppercase tracking-widest ml-4">Portfolio</span>
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-cream mb-2">
              MUSIC
            </h2>
            <h3 className="font-body font-light text-xl md:text-2xl text-cream/70 uppercase tracking-wider">
              Recent Work
            </h3>
          </div>

          {/* Videos section */}
          <div className="space-y-8">
            {/* First video */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg shadow-2xl hover-glow transition-all duration-500">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/WYMdHSTCdI0?si=cVl4pUK5wsSY_msB"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen="allowfullscreen"
                  ></iframe>
                </div>
                
                {/* Premium overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="mt-4 p-4 glass-effect rounded-lg">
                <h4 className="font-body font-medium text-cream text-lg mb-2">
                  Descent and Mortality
                </h4>
                <p className="font-body text-sm text-cream/70">
                  World Premiere - Music by Matthew Hernandez
                </p>
              </div>
            </div>

            {/* Second video */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg shadow-2xl hover-glow transition-all duration-500">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/HZUqk458IDQ?si=I6juknz6GVq92sAd"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Premium overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="mt-4 p-4 glass-effect rounded-lg">
                <h4 className="font-body font-medium text-cream text-lg mb-2">
                  Latest Composition
                </h4>
                <p className="font-body text-sm text-cream/70">
                  Contemporary classical piece showcasing innovative techniques
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 p-6 glass-effect rounded-lg">
                             <p className="font-body text-base md:text-lg text-cream/90 leading-relaxed">
                 Each composition represents a unique journey through sound, where traditional 
                 classical elements meet contemporary innovation. These pieces demonstrate 
                 Matthew&apos;s ability to create emotionally resonant music that enhances 
                 visual storytelling and immersive experiences.
               </p>
            </div>
          </div>

          {/* Premium accent line */}
          <div className="mt-8 w-20 h-px bg-gradient-to-r from-burgundy-950 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default Music
