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
      className={
        shadow
          ? 'fixed w-full h-20 z-[60] ease-in-out duration-300  bg-[rgba(63,10,10,0.98)] bg-cover bg-center bg-no-repeat shadow-black shadow-xl'
          : 'fixed w-full h-20 z-[60]  bg-cover bg-center bg-no-repeat'
      }
    >
      <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-start items-center">
            <div className="flex-shrink-0">
              {/* <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              /> */}
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-start ">
                {/* 
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>
              */}
                {items.map((item) => {
                  return (
                    <ul
                      className="hidden py-14 lg:flex pb-3 px-6 "
                      key={item.label}
                    >
                      <li
                        // className="flex-row hover:border-t-4 py-3 focus-within:text-white focus-within:border-t-4"
                        className="
                        flex hover:border-t-4 py-3 focus-within:text-white focus-within:border-t-4 mx-2 text-lg uppercase group hover:cursor-pointer text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] to-[#66707f] hover:text-[#ffffff] self-center "
                        key={item.label}
                      >
                        {/* focus:border-t-4  */}
                        <Link href={item.linkURL}>{item.label}</Link>
                      </li>
                    </ul>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-stone-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden  bg-[rgba(63,10,10,0.5)]" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>

              <a
                href="#credits"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Credits
              </a>

              <a
                href="#music"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Music
              </a>

              <a
                href="#contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <a
                href="#epk"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                EPK
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}

export default Nav
