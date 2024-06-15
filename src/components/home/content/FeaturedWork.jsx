import { FeaturedWorkList } from '@/static/FeaturedWork'
import Image from 'next/image'
import React from 'react'


export default function FeaturedWork() {
  return (
    <div className='bg-white text-black h-auto flex flex-col p-2 rounded-t-3xl overflow-hidden'>
      <div className='h-auto w-full flex flex-col md:flex-row p-5 rounded-lg overflow-hidden my-20 md:p-12'>
        <svg className="absolute top-[-20%] left-[-10%] w-[60%] h-[150%] md:h-[200%]" viewBox="0 0 780 668" xmlns="http://www.w3.org/2000/svg"><path d="M375.692 201.683c0 98.816-80.066 178.912-178.846 178.912C98.08 380.595 18 300.5 18 201.683 18 102.88 98.08 22.771 196.846 22.771c98.78 0 178.846 80.109 178.846 178.912zM762 196.84c0 54.205-24.44 102.722-62.974 135.485L384.572 643l-128.11-127.16 195.72-193.62c-32.017-32.303-51.886-76.504-51.886-125.38 0-98.789 80.951-178.84 180.84-178.84C680.944 18 762 98.051 762 196.84z" stroke="#3A47B7" strokeWidth="35" fill="none" fillRule="evenodd" opacity=".1"></path></svg>
        <div className='w-full md:w-1/2'>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='text-xl text-gray-800 font-semibold tracking-tight md:text-6xl'>Strategic UX Design & Brand Studio.</h2>
          <p className='text-sm text-gray-500 tracking-tight	md:text-3xl'>We help entrepreneurs and businesses achieve ambitious dreams by building design centric products and brands.</p>
        </div>
      </div>
      <div className='bg-white my-16 px-10'>
        <div className='flex flex-row justify-start items-center align-middle'>
          <h5 className='w-fit text-2xl font-semibold'>Featured Work.</h5>
          <div className='flex-grow font-bold opacity-0 md:opacity-100'><hr/></div>
        </div>
        <div className='my-5 flex flex-col md:flex-row'>
          {FeaturedWorkList.map((featuredWork, id) => (
            <div className='w-full md:w-1/2 my-4 items-start ' key={id}>
              <div className='w-fit rounded-xl overflow-hidden m-2 hover:scale-95 transition-transform duration-300 ease-out' dangerouslySetInnerHTML={{__html: featuredWork.img}}></div>
              <div className='relative w-auto h-8 m-2'>
                <Image
                  src={featuredWork.logo}
                  alt={featuredWork.description}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className='text-sm text-gray-500 tracking-tight m-2'>{featuredWork.description}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
