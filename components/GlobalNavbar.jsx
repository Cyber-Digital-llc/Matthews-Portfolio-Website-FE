import React, { useState, useEffect } from 'react'
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

function GlobalNavBar() {
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
    <div
      className={
        shadow
          ? 'fixed w-full h-20 z-[60] ease-in-out duration-300  bg-[rgb(63,10,10)] bg-cover bg-center bg-no-repeat shadow-black shadow-xl'
          : 'fixed w-full h-20 z-[60]  bg-cover bg-center bg-no-repeat'
      }
    >
      <div className="flex py-7 px-5 text-base text-stone-400 z-20 fixed justify-start items-start h-full 2xl:px-4 max-w-[2000px] mx-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {items.map((item) => {
              return (
                <ul className="flex pb-3 px-6 " key={item.label}>
                  <li
                    className="flex-row hover:border-t-4 py-3 focus-within:text-white focus-within:border-t-4"
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
    </div>
  )
}

export default GlobalNavBar
