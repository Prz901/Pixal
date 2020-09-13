import React from 'react'

import love from '../../utils/image-portfolio/love.jpg'

export default function Descriptions() {
  return (
    <div className='flex relative min-h-screen flex-col'>
      <img src={love} alt='love history' className='absolute left-10 bottom-10' />
      <div className='px-6 flex flex-col items-start absolute bottom-50 left-60'>
        <p className='py-2 text-2xl text-gray-900 tracking-widest'>Faces</p>
        <p className='py-2 text-2xl text-gray-900 tracking-widest'>Fashion</p>
        <p className='py-2 text-2xl text-gray-900 tracking-widest'>Wedding</p>
        <p className='py-2 text-2xl text-gray-900 tracking-widest'>Children</p>
        <p className='py-2 text-2xl text-gray-900 tracking-widest'>Love Store</p>
        <p className='py-2 text-2xl text-gray-900 tracking-widest'>Motion</p>
      </div>
    </div>
  )
}
