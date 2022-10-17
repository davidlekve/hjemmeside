import React from 'react'
import Image from 'next/future/image'

const Gallery = () => {
  return (
<section className="overflow-hidden text-gray-700">
  <div className="container px-5 py-1 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2 h-[30rem]">
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 h-1/2 p-1">
          <div className="w-full h-full relative overflow-hidden rounded-xl z-10">
            <Image alt="gallery" fill className="block object-cover object-top w-full h-full hover:scale-110 transition duration-300 ease-in-out"
              src="/../public/static/marathon.jpeg"></Image>
          </div>
        </div>
        <div className="w-1/2 h-1/2 p-1">
          <div className="w-full h-full relative overflow-hidden rounded-xl p-1 z-10">
            <Image fill alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
              src="/../public/static/balkos.jpg"></Image>
          </div>
        </div>
        <div className="w-full h-1/2 p-1">
          <div className="w-full h-full md:p-2 relative overflow-hidden rounded-xl p-1 z-10">
            <Image fill alt="gallery" className="block object-cover object-[100%_30%] w-full h-full hover:scale-110 transition duration-300 ease-in-out"
              src="/../public/static/palmesus.jpeg"></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 ">
        <div className="w-full h-1/2 p-1">
          <div className="w-full h-full md:p-2 relative overflow-hidden rounded-xl p-1 z-10">
            <Image fill alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
              src="/../public/static/trolljeger.jpg"></Image>
          </div>
        </div>
        <div className='w-1/2 h-1/2 p-1'>
          <div className="w-full h-full relative overflow-hidden rounded-xl p-1 z-10">
            <Image fill alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
              src="/../public/static/krabbe.jpg"></Image>
          </div>
        </div>
        
        <div className="w-1/2 h-1/2 p-1">
          <div className="relative w-full h-full overflow-hidden rounded-xl p-1 z-10">
            <Image fill alt="gallery" className="block object-cover object-center w-full h-full hover:scale-110 transition duration-300 ease-in-out"
              src="/../public/static/surfup.jpg"></Image>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Gallery