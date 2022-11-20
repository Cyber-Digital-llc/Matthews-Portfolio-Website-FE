import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <div className=" bg-cover bg-center bg-headerBGI bg-fixed w-[100vw] h-[90vh] mx-auto  flex flex-wrap items-center justify-between">
        {/* <Navbar /> */}
        <div>
          <h1 className="text-8xl">Matthew Hernandez</h1>
          <h3 className="text-6xl">FILM/GAME COMPOSER</h3>
        </div>
      </div>
    </>
  )
}

export default Header
