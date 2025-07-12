import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

const items = [
  {
    label: 'HOME',
    linkURL: '/',
  },
  {
    label: 'ABOUT',
    linkURL: '/#about',
  },
  {
    label: 'CREDITS',
    linkURL: '/#credits',
  },
  {
    label: 'MUSIC',
    linkURL: '/#music',
  },
  {
    label: 'CONTACT',
    linkURL: '/#contact',
  },
  {
    label: 'EPK',
    linkURL: '/electronicPressKit',
  },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 15) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <nav
      className={`fixed w-full h-20 z-[60] transition-all duration-500 ease-in-out ${
        shadow
          ? 'bg-black/90 backdrop-blur-sm border-b border-burgundy-950/20 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex justify-start items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="group">
                <span className="font-display font-bold text-xl text-cream group-hover:text-burgundy-950 transition-colors duration-300">
                  MH
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block ml-12">
              <div className="flex items-center space-x-8">
                {items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.linkURL}
                    className="group relative font-body font-medium text-sm text-cream/80 hover:text-cream uppercase tracking-wider transition-all duration-300 py-2"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-burgundy-950 to-burgundy-900 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="group relative p-2 rounded-lg text-cream hover:text-burgundy-950 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burgundy-950/50"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              
              {/* Hamburger Icon */}
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
                }`}></span>
                <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'translate-y-2.5'
                }`}></span>
                <span className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        {(ref) => (
          <div 
            ref={ref} 
            className="lg:hidden bg-black/90 backdrop-blur-sm border-t border-burgundy-950/20"
            id="mobile-menu"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {items.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.linkURL}
                  className="group block px-4 py-3 rounded-lg text-cream/80 hover:text-cream hover:bg-burgundy-950/10 transition-all duration-300 font-body font-medium text-base uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-burgundy-950 to-burgundy-900 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}

export default Nav
