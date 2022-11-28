import React from 'react'
import Image from 'next/image'
import analogImg from '../public/1479x1536px.jpg'
const Music = () => {
  return (
    <div
      id="music"
      className="flex h-max bg-black-900 py-0 px-0 w-full items-center "
    >
      <div className="w-full">
        <div className="flex justify-center w-full bg-musicBGI h-[90vh] bg-contain bg-fixed mx-auto"></div>
      </div>

      <div className="flex justify-center w-full">
        <div className=" py-14 mx-[30%]">
          <p className="text-6xl py-2">MUSIC</p>
          <h2 className="text-3xl py-2">RECENT WORK</h2>
          <p className="py-3 max-w-prose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            veniam consequatur dolorum recusandae corrupti voluptatem, obcaecati
            enim consectetur quis autem ipsa quisquam accusantium dignissimos
            aliquid cum totam, porro in ut.
          </p>
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
