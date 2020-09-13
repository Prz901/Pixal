import React from 'react'

export default function Footer() {
  return (
    <div className='min-h-screen container mx-auto flex flex-col justify-center relative'>
      <div className='flex flex-col items-center w-full '>
        <div className='flex flex-col items-center w-full absolute bottom-70'>
          <p className='text-2xl text-gray-800 font-thin py-2 '>Tell me about your story, your passion, or your idea.</p>
          <div className='flex flex-col items-center'>
            <p className='text-2xl text-gray-800 font-thin '>
              And I'll be happy to get back to you and talk about the tailor-made photo
            </p>
            <p className='text-2xl text-gray-800 font-thin '>shoot. Let's connect here.</p>
          </div>
        </div>
        <div className='flex flex-col items-center '>
          <h2 className='text-5xl text-gray-800 font-thin'>+1 256 10 87 000</h2>
          <h3 className='text-3xl text-gray-800 font-thin tracking-wider'>4401 Waldeck Street Grapevine, Nashville, TX 76051</h3>
        </div>
        <div>
          <p className='text-xl text-gray-800 font-thin tracking-wider py-20'>info@demolink.org</p>
        </div>
        <div className='flex flex-col items-center py-20 absolute bottom-10 w-1/4'>
          <h1 className='text-6xl text-gray-900 '>Pixal</h1>
          <div className='flex items-center justify-between w-full py-4'>
            <p className='text-2xl font-thin cursor-pointer'>facebook</p>
            <p className='text-2xl font-thin cursor-pointer'>instagram</p>
          </div>
          <div className='flex items-center'>
            <i className='far fa-copyright' />
            <p className='text-xl pl-2'>2020. Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
