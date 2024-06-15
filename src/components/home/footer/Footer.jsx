import { LogoSvg } from '@/static/icons'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col mt-32'>
      <div className='p-10 flex flex-col md:flex-row'>
        <div className='group w-full my-5 md:w-1/2'>
          <p className='text-gray-400 text-sm'>Got a Project?</p>
          <div className='w-full group px-2 border-l-4 cursor-pointer border-gray-600 hover:bg-gray-600 transition-all duration-300 ease-in'>
            <p className='font-bold text-3xl text-gray-300 group-hover:translate-x-2 transition-all duration-300 ease-in'>Know More About Us</p>
          </div>

        </div>
        <div className='w-full md:w-1/2 flex flex-col my-5 md:items-end'>
          <div className='cursor-pointer m-2'>
            <LogoSvg height={42}/>
          </div>

          <div className='flex flex-row gap-4 m-2'>
            <a href='/'><svg height="28" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M28 0C12.542 0 0 12.542 0 28s12.542 28 28 28c15.427 0 28-12.542 28-28S43.427 0 28 0zm18.495 12.907a23.807 23.807 0 0 1 5.405 14.88c-.79-.151-8.685-1.76-16.642-.759-.182-.395-.334-.82-.516-1.245a71.173 71.173 0 0 0-1.58-3.462c8.808-3.583 12.816-8.746 13.333-9.414zM28 4.13a23.862 23.862 0 0 1 15.852 6.013c-.425.608-4.039 5.436-12.542 8.625-3.917-7.198-8.26-13.089-8.928-14A24.321 24.321 0 0 1 28 4.13zM17.826 6.377c.638.85 4.89 6.773 8.868 13.818-11.176 2.976-21.045 2.916-22.108 2.916 1.548-7.41 6.56-13.575 13.24-16.734zM4.07 28.03v-.728c1.033.03 12.634.182 24.569-3.402a71.137 71.137 0 0 1 1.943 4.07c-.303.09-.637.182-.941.273-12.33 3.978-18.89 14.85-19.436 15.761A23.86 23.86 0 0 1 4.069 28.03zM28 51.93a23.75 23.75 0 0 1-14.668-5.04c.425-.881 5.284-10.235 18.768-14.942.06-.03.09-.03.152-.06 3.37 8.715 4.737 16.034 5.102 18.13A23.522 23.522 0 0 1 28 51.93zm13.332-4.1c-.243-1.457-1.519-8.442-4.647-17.036 7.502-1.184 14.061.76 14.881 1.032-1.032 6.651-4.859 12.39-10.234 16.005z" fill="hsla(234, 13%, 33%, 1)" fillRule="evenodd"></path></svg></a>
            <a href='/'><svg height="28" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M15.484.503h25.032c8.274 0 14.98 6.707 14.98 14.98v25.033c0 8.274-6.706 14.98-14.98 14.98H15.484c-8.274 0-14.98-6.706-14.98-14.98V15.484C.503 7.21 7.21.504 15.483.504zm0 4.994c-5.516 0-9.987 4.471-9.987 9.987v25.032c0 5.516 4.471 9.987 9.987 9.987h25.032c5.516 0 9.987-4.471 9.987-9.987V15.484c0-5.516-4.471-9.987-9.987-9.987H15.484zM40.47 26.059a12.497 12.497 0 1 1-24.723 3.666 12.497 12.497 0 0 1 24.723-3.666zm-11.261-5.59a7.503 7.503 0 1 0-2.201 14.845 7.503 7.503 0 0 0 2.2-14.844zm10.776-4.454a2.497 2.497 0 1 1 3.53-3.53 2.497 2.497 0 0 1-3.53 3.53z" fill="hsla(234, 13%, 33%, 1)" fillRule="nonzero"></path></svg></a>
            <a href='/'><svg height="28" viewBox="0 0 62 51" xmlns="http://www.w3.org/2000/svg"><path d="M59 2.526a27.834 27.834 0 0 1-7.993 3.866c-3.14-3.584-8.2-4.84-12.67-3.147C33.865 4.938 30.935 9.222 31 13.97v2.526c-9.086.234-17.686-4.063-22.91-11.444 0 0-10.18 22.736 12.728 32.842A29.793 29.793 0 0 1 3 42.947c22.91 12.632 50.91 0 50.91-29.052a11.286 11.286 0 0 0-.205-2.097A19.467 19.467 0 0 0 59 2.526z" stroke="hsla(234, 13%, 33%, 1)" strokeWidth="5.04" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
            <a href='/'> <svg height="28" viewBox="0 0 59 56" xmlns="http://www.w3.org/2000/svg"><path d="M40.1 18.79c8.781 0 15.9 7.069 15.9 15.789V53H45.4V34.579c0-2.907-2.373-5.263-5.3-5.263-2.927 0-5.3 2.356-5.3 5.263V53H24.2V34.579c0-8.72 7.119-15.79 15.9-15.79zM3 21.42h10.6V53H3V21.421zm5.3-7.895c-2.927 0-5.3-2.356-5.3-5.263S5.373 3 8.3 3c2.927 0 5.3 2.356 5.3 5.263s-2.373 5.263-5.3 5.263z" stroke="hsla(234, 13%, 33%, 1)" strokeWidth="5.264" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
            <a href='/'><svg height="28" viewBox="0 0 31 52" xmlns="http://www.w3.org/2000/svg"><path d="M28 3h-6.818C14.906 3 9.818 8.149 9.818 14.5v6.9H3v9.2h6.818V49h9.091V30.6h6.818L28 21.4h-9.09v-6.9c0-1.27 1.017-2.3 2.272-2.3H28V3z" stroke="hsla(234, 13%, 33%, 1)" strokeWidth="5.6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>

          </div>
        </div>
      </div>
      <div className='pt-10 px-10 flex flex-col md:flex-row'>
        <div className='group w-full lg:w-1/2 my-2'>
          <p className=' text-gray-500'>© Copyright 2019</p>
        </div>
        <div className='flex flex-col w-full my-2 lg:w-1/2 md:items-end'>
          <p className='text-sm text-gray-500'>
            C/o Cuboft Marketing & Software Solutions Pvt. Ltd.
          </p>
          <p className='text-sm text-gray-500'>CIN: U72200TG2015PTC101100</p>
        </div>
      </div>
  </div>

  )
}
