import Image from 'next/image'
import React from 'react'
import headShot from '../public/headshot1536x1536px.jpg'

const About = () => {
  return (
    <div className="flex h-[75vh] w-full bg-slate-900 py-0 px-0 items-center border-t-[2rem] border-t-red-900">
      <div className="flex justify-end w-full h-[100%] xl:max-h-screen-xl xl:max-w-screen-xl">
        <div className=" flex justify-end xl:w-[80%] ">
          <Image
            draggable={false}
            src={headShot}
            alt="headshot image of matthew"
            // objectPosition=""
            quality={100}
          />
        </div>
      </div>

      <div className="flex w-full xl:w-[100vw] ">
        <div className="flex justify-start px-14 ">
          <div className="w-[60%] ">
            <h2 className="text-2xl  max-w-prose">About</h2>
            <p className="text-5xl py-0 max-w-prose">Matthew Hernandez</p>
            <p className="py-3 max-w-prose">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              veniam consequatur dolorum recusandae corrupti voluptatem,
              obcaecati enim consectetur quis autem ipsa quisquam accusantium
              dignissimos aliquid cum totam, porro in ut.
            </p>
            <p className="py-3 max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex,
              voluptatibus accusantium rem cumque vitae non voluptas sapiente
              expedita quisquam totam dolorum culpa alias minima ducimus
              consequatur neque commodi accusamus?
            </p>
            <p className="py-3 maw-w-prose">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
