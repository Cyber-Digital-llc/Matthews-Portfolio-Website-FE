import React from 'react'
import Image from 'next/image'

const Credits = () => {
  return (
    <div
      id="credits"
      className="flex flex-col-reverse align-middle xxs:flex-col xs:flex-col xl:flex xl:flex-row xl:w-full xl:h-[50vh] lg:flex lg:flex-row lg:h-max md:flex md:h-max sm:flex sm:flex-row sm:h-max py-0 px-0 w-full sm:items-center"
    >
      <div className="flex w-full justify-center ">
        <div className="flex justify-center mx-auto px-0 lg:justify-start lg:px-14 md:justify-start md:px-14 xl:justify-start xl:px-14 ">
          <div className="w-[65%] ">
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
      </div>

      <div className="flex w-full h-full xl:flex lg:h-full xl:h-full xl:align-middle xl:items-center ">
        <div className="flex justify-center w-full bg-creditsBGI h-[300px] lg:h-[90vh] xl:h-[90vh] bg-no-repeat bg-contain bg-scroll mx-auto bg-center"></div>
      </div>
    </div>
    // <div
    //   id="credits"
    //   className="flex-col justify-center h-max xxs:flex-col xxs:h-max xs:flex-col sm:flex xl:flex xl:h-[65vh] xl:flex-row xl:w-full lg:flex lg:flex-row lg:h-max  bg-black-900 py-0 px-0 w-full items-center "
    // >
    //   <div className="flex px-0 justify-center w-full">
    //     <div className="flex justify-center mx-auto px-0 lg:justify-start lg:px-14 md:justify-start md:px-14 xl:justify-start xl:px-14">
    //       <div className="  mx-[10.5%]">
    //         <h2 className="text-3xl py-2">Selected</h2>
    //         <p className="text-6xl py-2">Credits</p>
    //         <p className="py-3 max-w-prose">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
    //         </p>
    //         <p className="py-3 max-w-prose">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex,
    //         </p>
    //         <p className="py-3 max-w-prose">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione.
    //         </p>
    //         <p className="py-3 max-w-prose">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione.
    //         </p>
    //         <button className="px-0 py-0 my-4 bg-red-900 h-12 w-[220px]">
    //           Download Full Bio (PDF)
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="w-full h-full">
    //     <div className="flex justify-center w-full bg-creditsBGI h-full bg-center bg-cover bg-local mx-auto"></div>
    //   </div>
    // </div>
  )
}

export default Credits
