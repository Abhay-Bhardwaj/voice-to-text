import { BlogItem } from '@/static/BlogItem'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'


export default function BlogGrid() {
  return (
    <div className='rounded-b-3xl overflow-hidden'>
      <div className='bg-gray-100 px-5 md:px-16 py-40 text-black'>
        <div>
          <h4 className='text-2xl text-gray-800 font-semibold'>Pick Our Brains</h4>
          <h5 className='text-xl text-gray-500 font-semibold'>News, Blogs, Good Intentions etc.</h5>
        </div>
        <div className='cursor-pointer my-10'>
          <Carousel>
            <CarouselContent>
              {BlogItem.map((item, id) => (
                <CarouselItem key={id} className="basis-full flex flex-row align-middle justify-center items-center sm:basis-1/2 lg:basis-1/3 my-10">
                  <div key={id} className="bg-white group w-72 flex flex-col shadow-lg rounded-xl overflow-hidden">
                    <div className="flex items-center h-72  z-0 overflow-hidden">
                      <img src={item.img} alt={item.title} className="h-full w-auto object-cover group-hover:scale-125 transition-all duration-500 ease-out" />
                    </div>
                    <div className="absolute bottom-0 w-72 bg-white p-4 rounded-xl overflow-hidden transition-transform duration-500 transform  group-hover:translate-y-[-20%]">
                      <h4 className="text-xl ">{item.title}</h4>
                      <p className="text-gray-500 group-hover:opacity-0 transition-all duration-500 ease-out" >{item.author}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className='bg-white px-10 py-32 text-black rounded-b-3xl'>
        <div className='p-5 w-full lg:w-1/3'>
            <svg height="61" viewBox="0 0 72 61" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#FFF" d="M-147-5271h1440v6532H-147z"></path><path d="M17.429 34.776C7.803 34.776 0 26.99 0 17.388 0 7.785 7.803 0 17.429 0c9.625 0 17.428 7.785 17.428 17.388 0 9.603-7.803 17.388-17.428 17.388zm50.364-6.418l.034.034-32.584 32.583-10.792-10.792L44.524 30.11c-.319-.274-.63-.562-.933-.865-6.457-6.457-6.476-16.906-.043-23.34 6.434-6.433 16.883-6.414 23.34.043 6.155 6.154 6.46 15.936.905 22.41z" fill="#33343E"></path></g></svg>
            <p className='text-2xl text-gray-400'>Lesser bullshit leads to larger impact.</p>
            <div className='group px-2 border-l-4 border-slate-200 cursor-pointer hover:bg-slate-200 transition-all duration-300 ease-in'>
              <p className='font-bold group-hover:translate-x-2 transition-all duration-300 ease-in'>Know More About Us</p>
            </div>
        </div>
      </div>
    </div>
  )
}
