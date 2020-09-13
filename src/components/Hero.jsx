import React from 'react'

import image from '../utils/lion.jpg'

export default function Hero() {
  return (
    <div className='flex flex-col items-center container mx-auto'>
      <h1 className='font-medium text-6xl pb-2 pt-16'>Felipe</h1>
      <div className='flex flex-rol items-center py-6'>
        <p className='px-8 text-2xl font-thin'>Home</p>
        <p className='px-8 text-2xl font-thin'>About me</p>
        <p className='px-8 text-2xl font-thin'>Services</p>
        <p className='px-8 text-2xl font-thin'>Gallery</p>
        <p className='px-8 text-2xl font-thin'>Pages</p>
        <p className='px-8 text-2xl font-thin'>Contacts</p>
      </div>
      <div className='flex items-center '>
        <img src={image} alt='lion' className='w-2/3 relative rounded-md opacity-75 py-10' />
        <div className='absolute left-half bottom-0 text-5xl font-thin'>
          <p>My name is Felipe Perozo</p>
          <p>
            I’m a Front end developer and <br />
            Back end developer
            <br /> React and Node from Brazil.
          </p>
        </div>
      </div>
    </div>
  )
}
