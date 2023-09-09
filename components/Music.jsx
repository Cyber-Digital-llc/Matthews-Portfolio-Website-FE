import React from 'react'
import Image from 'next/image'

const Music = () => {
  return (
    <div
      id="music"
      className=" bg-black bg-opacity-95 flex-col align-middle xxs:flex-col xs:flex-col xl:flex xl:flex-row xl:w-full lg:flex lg:flex-row lg:h-max md:flex md:h-max sm:flex sm:flex-row sm:h-max py-0 px-0 w-full sm:items-center border-t-[2rem] 
      border-t-[rgb(63,10,10)]"
    >
      <div className="xl:w-[50vw]">
        <div className="flex w-full bg-center bg-musicBGI bg-cover bg-scroll sm:bg-left sm:w-[100vw] md:bg-left md:bg-fit md:flex md:flex-row md:w-full md:bg-contain xl:bg-contain lg:w-full lg:bg-fixed lg:bg-fit lg:bg-left lg:bg-contain xl:w-full xl:bg-left xl:bg-fit xl:h-full xl:min-h-[980px] xl:flex h-96 mx-auto bg-no-repeat "></div>
      </div>

      <div className="flex py-0 justify-center xl:w-[50vw] h-auto ">
        <div className="flex justify-center mx-auto py-[3%] lg:justify-start lg:px-14 md:justify-start md:px-0 xl:justify-start xl:px-0 ">
          <div className="w-full">
            <p className="text-6xl py-2">MUSIC</p>
            <h2 className="text-3xl py-2">RECENT WORK</h2>
            {/* <div className="lex flex-col justify-center items-center align-middle">
              <div className=" w-full aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220146829&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></iframe>
              </div>
            </div> */}

            <div className="w-full lg:w-full xl:w-full 2xl:w-full lg:px-auto xl:px-auto 2xl:px-auto flex flex-col justify-center items-center align-middle ">
              <div className="flex flex-col justify-center item-center align-middle w-[100vw] l:w-full xl:w-full 2xl:w-full aspect-w-16 aspect-h-9">
                <div className=" py-4 lg:py-3 xl:py-3 2xl:py-3">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/WYMdHSTCdI0?si=cVl4pUK5wsSY_msB"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                  {/* <div className="flex flex-col justify-center items-center align-middle">
                    <p className="flex py-2 ">
                      Descent and Mortality (World Premiere) Music by Matthew
                      Hernandez
                    </p>
                  </div> */}
                </div>
              </div>
              <div className=" w-full aspect-w-16 aspect-h-9">
                <div className=" py-2 lg:py-3 xl:py-3 2xl:py-3">
                  <iframe
                    width="100%"
                    height="100%"
                    src="
                    https://www.youtube.com/embed/HZUqk458IDQ?si=I6juknz6GVq92sAd
                    "
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <p className=" py-2 lg:py-3 xl:py-3 2xl:py-3 max-w-prose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                ex, voluptatibus accusantium rem cumque vitae non voluptas
                sapiente expedita quisquam totam dolorum culpa alias minima
                ducimus consequatur neque commodi accusamus?
              </p>
              {/* <p className="py-3 max-w-prose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music
