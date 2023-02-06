import React from 'react'
import Image from 'next/image'

const Music = () => {
  return (
    <div
      id="music"
      className="flex flex-col-reverse xxs:flex xxs:flex-col-reverse sm:flex sm:flex-col-reverse xl:flex xl:flex-row h-max bg-black-900 py-0 px-0 w-full items-center"
    >
      <div className="w-full">
        <div className="flex justify-center w-full bg-musicBGI h-[90vh] bg-contain bg-scroll 2xl:bg-fixed xl:bg-fixed lg:bg-fixed md:bg-fixed mx-auto bg-no-repeat "></div>
      </div>

      <div className="flex justify-center w-full">
        <div className=" py-14 mx-[10%]">
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
  )
}

export default Music
