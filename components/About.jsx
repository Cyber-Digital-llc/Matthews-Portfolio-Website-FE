import React from 'react'

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col align-middle xxs:flex-col xs:flex-col xl:flex xl:flex-row xl:w-full lg:flex lg:flex-row lg:h-max md:flex md:h-max sm:flex sm:flex-row sm:h-max py-0 px-0 w-[100vw] sm:items-center border-t-[2rem] border-t-[rgba(63,10,10,0.98)]"
    >
      <div className="flex w-full xl:flex md:w-[50vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[50vw]">
        <div className="w-full flex justify-end bg-headShotBGI bg-cover md:bg-contain lg:w-[50vw] md:min-h-max md:flex md:justify-end lg:bg-cover lg:flex lg:flex-row lg:justify-end  lg:min-h-max xl:justify-end xl:w-[893px] xl:h-[893px] xl:min-h-[980px] xl:bg-cover xl:flex h-96 bg-scroll mx-auto bg-no-repeat 2xl:flex "></div>
      </div>

      <div className="flex w-full justify-center md:w-[50vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[50vw] ">
        <div className="flex w-full justify-center mx-auto py-[3%] lg:justify-start md:justify-start xl:justify-start ">
          <div className="w-full lg:mx-auto px-10 lg:px-2 xl:mx-8 xl:px-36 md:w-1/2 md:px-0 ">
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
