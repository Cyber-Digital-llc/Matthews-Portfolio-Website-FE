import React from 'react'
import Link from 'next/link'

const items = [
  {
    label: 'HOME',
    linkURL: '/',
  },
  {
    label: 'ABOUT',
    linkURL: '#about',
  },
  {
    label: 'CREDITS',
    linkURL: '#credits',
  },
  {
    label: 'MUSIC',
    linkURL: '#music',
  },
  {
    label: 'CONTACT',
    linkURL: '#contact',
  },
  {
    label: 'EPK',
    linkURL: '/electronicPressKit',
  },
]

function Navbar() {
  return (
    // NAVBAR
    <>
      <div className="flex py-7 px-5 text-base z-20 fixed top-0 left-0 justify-start">
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
    </>
  )
}

export default Navbar
