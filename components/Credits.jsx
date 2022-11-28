import React from 'react'
import Image from 'next/image'
import CreditsImg from '../public/2304x1000px.jpg'
const Credits = () => {
  return (
    <div
      id="credits"
      className="flex h-max bg-black-900 py-0 px-0 w-full items-center "
    >
      <div className="flex justify-center w-full">
        <div className=" py-14 mx-[30%]">
          <h2 className="text-3xl py-2">Selected</h2>
          <p className="text-6xl py-2">Credits</p>
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

      <div className="flex justify-end w-full h-[full] ">
        <div className="flex h-[65vh]">
          <Image
            draggable={false}
            src={CreditsImg}
            alt="headshot image of matthew"
            // objectPosition=""
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default Credits
