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
      <div className="flex py-7 px-5 text-base z-20 fixed top-0 left-0 justify-start w-full h-full 2xl:px-4 max-w-[2000px] mx-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {items.map((item) => {
              return (
                <ul className="flex py-2 px-6 " key={item.label}>
                  <li
                    className="flex-row border-t-4 hover:border-t-red-500"
                    key={item.label}
                  >
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
