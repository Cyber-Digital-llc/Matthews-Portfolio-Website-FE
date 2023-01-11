import React from 'react'
import Image from 'next/image'

const Credits = () => {
  return (
    <div
      id="credits"
      className="flex-col justify-center xxs:flex-col xs:flex-col sm:flex xl:flex xl:h-[65vh] xl:flex-row xl:w-full lg:flex lg:flex-row lg:h-max  bg-black-900 py-0 px-0 w-full items-center "
    >
      <div className="flex px-0 justify-center w-full h-max">
        <div className="  mx-[30%]">
          <h2 className="text-3xl py-2">Selected</h2>
          <p className="text-6xl py-2">Credits</p>
          <p className="py-3 max-w-prose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          </p>
          <p className="py-3 max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex,
          </p>
          <p className="py-3 max-w-prose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione.
          </p>
          <p className="py-3 max-w-prose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione.
          </p>
          <button className="px-0 py-0 my-4 bg-red-900 h-12 w-[220px]">
            Download Full Bio (PDF)
          </button>
        </div>
      </div>

      <div className="w-full h-full">
        <div className="flex justify-center w-full bg-creditsBGI h-full bg-center bg-cover bg-local mx-auto"></div>
      </div>
    </div>
  )
}

export default Credits
