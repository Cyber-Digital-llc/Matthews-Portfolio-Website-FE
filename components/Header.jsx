import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <div className=" bg-cover bg-center bg-headerBGI bg-fixed w-[100vw] h-[100vh] mx-auto flex items-center justify-center ">
        {/* <Navbar /> */}
        <div className="flex-col ">
          <h1 className="font-bold text-8xl ">Matthew Hernandez</h1>
          <h3 className="text-6xl">FILM/GAME COMPOSER</h3>
        </div>
      </div>
    </>
  )
}

export default Header
