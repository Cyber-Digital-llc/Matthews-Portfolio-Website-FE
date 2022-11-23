import React from 'react'

const items = [
  {
    label: <a href="#home">HOME</a>,
    key: 'home',
    // icon: <MailOutlined />,
  },
  {
    label: <a href="#about">ABOUT</a>,
    key: 'about',
  },
  {
    label: <a href="#credits">CREDITS</a>,
    key: 'credits',
    // disabled: true,
  },
  {
    label: <a href="#music">MUSIC</a>,
    key: 'music',
  },
  {
    label: <a href="#contact">CONTACT</a>,
    key: 'contact',
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
                <ul className="flex py-2 px-6 " key={item.key}>
                  <li
                    className="flex-row border-t-4 hover:border-t-red-500"
                    key={item.key}
                  >
                    {item.label}
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
