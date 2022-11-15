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
      <div className="flex py-7 px-5 text-base">
        {items.map((item) => {
          return (
            <ul className="flex px-6" key={item.key}>
              <li className="flex-row hover:border-red-800 py-2" key={item.key}>
                {item.label}
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default Navbar
