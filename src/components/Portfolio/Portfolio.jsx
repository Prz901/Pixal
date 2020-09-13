import React from 'react'

import image from '../../utils/image-portfolio/lamp.jpg'

import wether from '../../utils/image-portfolio/wether.jpg'
import girl from '../../utils/image-portfolio/girl.jpg'

export default function Portfolio() {
  return (
    <div className='py-20'>
      <div className='min-h-screen relative'>
        <img src={image} alt='lamp' className='absolute left-20 top-0 object-cover lamp' />
        <img src={wether} alt='wether' className='absolute top-0 right-0' />
        <img src={girl} alt='girl' className='absolute bottom-0 right-0 object-cover w-1/4 left-60' />

        <div className='w-1/2 absolute  top-half left-25'>
          <div className='flex flex-col items-start w-1/2'>
            <h1 className='text-4xl text-gray-900'> About</h1>
            <p className='text-left text-xl w-full py-6'>
              I take inspiration from the innovative styles of photography. I capture natural but refined moments in a relaxed
              and stylish way, always looking for the perfect available light. I love emotive, natural photography and want you
              to feel as though you could be in a magazine.
            </p>
            <p className='text-black flex items-center border-solid justify-center cursor-pointer border-gray-800 border-2 p-4 w-full hover:bg-gray-800 font-medium hover:text-white'>
              More <i className='fas fa-arrow-right px-4 ' />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
