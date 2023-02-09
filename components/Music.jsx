import React from 'react'
import Image from 'next/image'

const Music = () => {
  return (
    <div
      id="music"
      className="flex flex-col align-middle xxs:flex-col xs:flex-col xl:flex xl:flex-row xl:w-full lg:flex lg:flex-row lg:h-max md:flex md:h-max sm:flex sm:flex-row sm:h-max py-0 px-0 w-full sm:items-center border-t-[2rem] 
      border-t-[rgb(63,10,10)]"
    >
      <div className="w-full">
        <div className="flex w-full bg-center bg-musicBGI bg-contain bg-scroll md:bg-center md:bg-contain xl:bg-contain lg:w-full lg:bg-fixed lg:bg-fit lg:bg-center lg:bg-contain xl:w-full xl:bg-center xl:bg-fit xl:h-full xl:min-h-[980px] xl:flex h-96 mx-auto bg-no-repeat  "></div>
      </div>

      <div className="flex justify-center w-full h-full px-3">
        <div className="flex justify-center mx-auto py-[3%] lg:justify-start lg:px-14 md:justify-start md:px-14 xl:justify-start xl:px-14 ">
          <div className="w-full">
            <p className="text-6xl py-2">MUSIC</p>
            <h2 className="text-3xl py-2">RECENT WORK</h2>
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220146829&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>

            <p className="py-3 max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex,
              voluptatibus accusantium rem cumque vitae non voluptas sapiente
              expedita quisquam totam dolorum culpa alias minima ducimus
              consequatur neque commodi accusamus?
            </p>
            <p className="py-3 max-w-prose">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music
