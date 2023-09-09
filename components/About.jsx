import React from 'react'

const About = () => {
  return (
    <div
      id="about"
      className="flex py-10 xl:py-0 2xl:py-0 lg:py-0 bg-black bg-opacity-95 flex-col h-full align-middle xxs:flex-col xs:flex-col xl:flex xl:flex-row xl:w-full xl:h-max lg:flex lg:flex-row lg:w-full md:flex md:h-max sm:flex sm:flex-row sm:h-max py-auto px-0 w-full sm:items-center border-t-[2rem] border-t-[rgba(63,10,10,0.98)]"
    >
      <div className="flex w-full xl:flex md:w-[50vw] lg:flex lg:justify-end lg:w-full xl:flex-end xl:w-[50vw] xl:h-full xl:py-0 2xl:w-[50vw]">
        <div className="w-full justify-end xl:items-end bg-headShotBGI bg-cover bg-center md:bg-contain lg:w-full md:min-h-max md:flex md:justify-end lg:bg-fit lg:h-full lg:flex lg:flex-row lg:justify-end lg:min-h-max xl:justify-end xl:w-[50vw] xl:h-full xl:min-h-[900px] xl:py-0 xl:flex 2xl:bg-fit 2xl:bg-contain h-full bg-scroll mx-auto bg-no-repeat 2xl:flex 2xl-h-full"></div>
      </div>

      <div className="flex w-full h-full justify-center md:w-[50vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[50vw] ">
        <div className="flex w-full justify-center mx-auto xl:py-5 lg:justify-start md:justify-start xl:justify-start ">
          <div className="w-full lg:mx-auto px-10 xl:mx-8 xl:px-5 2xl:px-10 md:w-1/2 md:px-0 ">
            <h2 className="text-2xl  max-w-prose">About</h2>
            <p className="text-5xl py-0 max-w-prose">Matthew Hernandez</p>
            <p className="py-3 max-w-prose">
              Matthew Hernandez is a promising young composer hailing from Los
              Angeles County, California, USA. He was born and raised in this
              vibrant cultural hub, where he nurtured his passion for music from
              a young age.
            </p>
            <p className="py-3 max-w-prose">
              Currently, Matthew is pursuing his education in music composition
              for visual media, honing his skills and knowledge to further his
              career.
            </p>
            <p className="py-3 maw-w-prose">
              His dedication to his craft has earned him recognition and
              opportunities internationally through the participation in modern
              classical music festivals/workshops.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
