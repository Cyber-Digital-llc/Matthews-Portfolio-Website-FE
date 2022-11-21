import Image from 'next/image'
import React from 'react'
import headShot from '../public/headshot1536x1536px.jpg'

const About = () => {
  return (
    <div className="flex h-max bg-slate-600 py-0 px-0 w-full items-center ">
      <div className="flex justify-end w-full ">
        <div className="flex w-[100%] ">
          <Image
            draggable={false}
            src={headShot}
            alt="headshot image of matthew"
            // objectPosition=""
            quality={100}
          />
        </div>
      </div>

      <div className="flex w-full justify-start">
        <div className=" px-6 py-4 w-[100%] ">
          <h2 className="text-3xl py-3">About</h2>
          <p className="text-6xl py-3">Matthew Hernandez</p>
          <p className="py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            veniam consequatur dolorum recusandae corrupti voluptatem, obcaecati
            enim consectetur quis autem ipsa quisquam accusantium dignissimos
            aliquid cum totam, porro in ut.
          </p>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex,
            voluptatibus accusantium rem cumque vitae non voluptas sapiente
            expedita quisquam totam dolorum culpa alias minima ducimus
            consequatur neque commodi accusamus?
          </p>
          <p className="py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
