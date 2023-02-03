import React from 'react'

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col align-middle xxs:flex-col xs:flex-col xl:flex xl:flex-row xl:w-full lg:flex lg:flex-row lg:h-max md:flex md:h-max sm:flex sm:flex-row sm:h-max py-0 px-0 w-full sm:items-center  border-t-[2rem] 
      border-t-[rgb(63,10,10)]"
    >
      <div className="w-full">
        <div className="flex justify-end w-full bg-headShotBGI bg-cover md:bg-contain lg:bg-contain lg:w-[893px] lg:h-[893px] xl:w-[893px] xl:h-[893px] xl:min-h-[980px] xl:bg-cover xl:flex h-96  bg-scroll mx-auto bg-no-repeat "></div>
      </div>

      <div className="flex w-full justify-center ">
        <div className="flex justify-center mx-auto py-[3%] lg:justify-start lg:px-14 md:justify-start md:px-14 xl:justify-start xl:px-14 ">
          <div className="w-[65%] ">
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
