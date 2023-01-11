import React, { useState } from 'react'
import { Trail } from './Trail'
import styles from '../styles/Header.module.css'

const Header = () => {
  const [open, set] = useState(true)
  return (
    // <>
    <div
      id="home"
      className=" bg-fit lg:bg-cover 2xl:bg-cover bg-center bg-headerBGI bg-fixed md:w-[100vw] xl:h-[97vh]  mx-auto flex items-center  justify-center pt-16  flex-col lg:items-center  md:h-screen md:max-h-[1198px] min-h-[676px]  sm:min-h-[724px] md:min-h-[828px] 2xl:min-h-[940px] 2xl:h-[800px] w-full scrollbar-hide  relative overflow-y-auto overflow-x-hidden md:overflow-x-visible md:overflow-y-visible"
    >
      {/* //     <div className="flex-col">
    //       <h1 className="font-bold text-8xl pt-2 text-[32px] sm:text-6xl xl:text-8xl my-8 mb-2 md:mt-10 md:my-12 md:mb-6 ">
    //         Matthew Hernandez
    //       </h1>
    //       <h3 className="text-6xl">FILM/GAME COMPOSER</h3>
    //     </div>
    //    */}
      {/* // </> */}
      <div className={styles.container} onClick={() => set((state) => !state)}>
        <Trail open={open}>
          <span className="font-bold text-8xl pt-2 pb-2 text-[32px] sm:text-6xl xl:text-8xl my-8 mb-2 md:mt-10 md:my-12 md:mb-6">
            Matthew Hernandez
          </span>
          <span className="text-6xl">Film/Game Composer</span>
        </Trail>
      </div>
    </div>
  )
}

export default Header
