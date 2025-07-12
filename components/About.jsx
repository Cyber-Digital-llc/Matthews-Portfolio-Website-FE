import React, { useEffect, useState } from 'react'

const About = () => {
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

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black/95 flex flex-col lg:flex-row items-stretch overflow-hidden"
    >
      {/* Premium border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-burgundy-950 to-transparent"></div>
      
      {/* Left side - Image */}
      <div className="relative lg:w-1/2 h-96 lg:h-auto">
        <div className="absolute inset-0 bg-headShotBGI bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:from-black/40"></div>
        
        {/* Subtle overlay for premium effect */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Floating accent elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border border-burgundy-950/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 bg-burgundy-950/20 rounded-full"></div>
      </div>

      {/* Right side - Content */}
      <div className="relative lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 xl:p-20">
        <div className={`max-w-2xl ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {/* Section indicator */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-burgundy-950 to-transparent"></div>
            <span className="font-body text-sm text-burgundy-950 uppercase tracking-widest ml-4">About</span>
          </div>

          {/* Main heading */}
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight">
            Matthew Hernandez
          </h2>

          {/* Content with premium typography */}
          <div className="space-y-6 text-cream/90">
            <p className="font-body text-base md:text-lg leading-relaxed">
              Matthew Hernandez is a promising young composer hailing from Los
              Angeles County, California, USA. He was born and raised in this
              vibrant cultural hub, where he nurtured his passion for music from
              a young age.
            </p>
            
            <p className="font-body text-base md:text-lg leading-relaxed">
              Currently, Matthew is pursuing his education in music composition
              for visual media, honing his skills and knowledge to further his
              career.
            </p>
            
            <p className="font-body text-base md:text-lg leading-relaxed">
              His dedication to his craft has earned him recognition and
              opportunities internationally through the participation in modern
              classical music festivals/workshops.
            </p>
          </div>

          {/* Premium accent line */}
          <div className="mt-8 w-20 h-px bg-gradient-to-r from-burgundy-950 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default About
