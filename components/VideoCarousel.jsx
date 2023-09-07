// components/VideoCarousel.js
import React from 'react'

const VideoCarousel = ({ videos }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex-col w-full">
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex w-full xl:h-full max-h-full align-middle justify-center items-center p-2
              
            "
          >
            <div className="flex justify-center align-middle items-center w-[100vw] xl:w-[25vw] 2xl:w-[20vw]l:w-[25vw] h-[20vh] bg-gray-300 rounded-lg overflow-hidden">
              {/* Replace with your video embed code or thumbnail */}
              <iframe
                src={video.url}
                title={`Video ${index}`}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoCarousel
