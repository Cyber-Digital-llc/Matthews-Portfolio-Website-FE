import React, { useEffect, useState } from 'react'

const Credits = () => {
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

    const element = document.getElementById('credits')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="credits"
      className="relative min-h-screen bg-black/95 flex flex-col lg:flex-row-reverse items-stretch overflow-hidden"
    >
      {/* Premium border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-burgundy-950 to-transparent"></div>
      
      {/* Right side - Background Image */}
      <div className="relative lg:w-1/2 h-96 lg:h-auto">
        <div 
          className="absolute inset-0 bg-creditsBGI bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:from-black/50"></div>
        
        {/* Subtle overlay for premium effect */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Floating accent elements */}
        <div className="absolute top-8 left-8 w-12 h-12 border border-burgundy-950/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-6 h-6 bg-burgundy-950/20 rounded-full"></div>
      </div>

      {/* Left side - Content */}
      <div className="relative lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 xl:p-20">
        <div className={`max-w-2xl ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {/* Section indicator */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-burgundy-950 to-transparent"></div>
            <span className="font-body text-sm text-burgundy-950 uppercase tracking-widest ml-4">Experience</span>
          </div>

          {/* Main heading */}
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-cream mb-2">
            Selected
          </h2>
          <h3 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-cream mb-8">
            Credits
          </h3>

          {/* Content */}
          <div className="space-y-6 text-cream/90 mb-8">
            <p className="font-body text-base md:text-lg leading-relaxed">
              TBA
            </p>
            {/* Additional content can be added here as needed */}
          </div>

          {/* Premium download button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-burgundy-950 to-burgundy-900 hover:from-burgundy-900 hover:to-burgundy-950 text-cream font-body font-medium text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover-lift hover-glow overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Full Bio (PDF)</span>
            </span>
            
            {/* Button hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/20 to-burgundy-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Premium accent line */}
          <div className="mt-8 w-20 h-px bg-gradient-to-r from-burgundy-950 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default Credits
