import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm, reset } from 'react-hook-form'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm()

  const [successMessage, setSuccessMessage] = useState('')
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

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  function onSubmit(data) {
    axios
      .post('/api/contact', data)
      .then((response) => {
        console.log('response', response)
        console.log(data)
        setSuccessMessage(
          `Thanks for contacting me! I'll reach back ASAP, look in your inbox for updates 😊`,
        )
      })
      .catch((e) => console.error(e))
      .finally(reset())
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black/95 flex items-center justify-center overflow-hidden"
    >
      {/* Premium border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-burgundy-950 to-transparent"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-burgundy-950 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-burgundy-950 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-burgundy-950 rounded-full"></div>
      </div>

      <div className={`relative z-10 w-full max-w-6xl mx-auto p-8 md:p-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-burgundy-950 to-transparent"></div>
                <span className="font-body text-sm text-burgundy-950 uppercase tracking-widest ml-4">Contact</span>
              </div>
              
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
                GET IN TOUCH
              </h2>
              
              <div className="space-y-6 text-cream/90">
                <div>
                  <h3 className="font-body font-semibold text-xl text-cream mb-2">MATTHEW HERNANDEZ</h3>
                  <p className="font-body text-lg text-cream/70">Film | Game Composer</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-burgundy-950 rounded-full"></div>
                    <span className="font-body text-cream/80">Office: Los Angeles, CA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-burgundy-950 rounded-full"></div>
                    <span className="font-body text-cream/80">Phone: Available upon request</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-burgundy-950 rounded-full"></div>
                    <span className="font-body text-cream/80">Direct Email: Available upon request</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success message */}
                         {successMessage && (
               <div className="p-6 bg-black/80 backdrop-blur-sm rounded-lg border border-burgundy-950/30">
                 <p className="font-body text-cream text-center">{successMessage}</p>
               </div>
             )}
          </div>

          {/* Contact Form */}
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-burgundy-950/20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body font-medium text-cream text-sm mb-2 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-black/50 border border-burgundy-950/30 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-burgundy-950 focus:bg-black/70 transition-all duration-300"
                    type="text"
                    placeholder="Enter your first name"
                    {...register('firstName', {
                      required: 'Required. Please enter your first name.',
                      minLength: 2,
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block font-body font-medium text-cream text-sm mb-2 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-black/50 border border-burgundy-950/30 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-burgundy-950 focus:bg-black/70 transition-all duration-300"
                    type="text"
                    placeholder="Enter your last name"
                    {...register('lastName', {
                      required: 'Required. Please enter your last name.',
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-body font-medium text-cream text-sm mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-3 bg-black/50 border border-burgundy-950/30 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-burgundy-950 focus:bg-black/70 transition-all duration-300"
                  type="email"
                  placeholder="Enter your email address"
                  {...register('email', {
                    required: 'Required. Please enter your email address.',
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block font-body font-medium text-cream text-sm mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-black/50 border border-burgundy-950/30 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-burgundy-950 focus:bg-black/70 transition-all duration-300 resize-none"
                  rows={6}
                  placeholder="Tell me about your project..."
                  {...register('message', {
                    required: 'Required. Please enter your message.',
                  })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-burgundy-950 to-burgundy-900 hover:from-burgundy-900 hover:to-burgundy-950 text-cream font-body font-medium text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover-lift hover-glow disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  
                  {/* Button hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/20 to-burgundy-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
