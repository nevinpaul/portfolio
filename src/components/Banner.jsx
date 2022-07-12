import React from 'react'
import SocialIcons from './SocialIcons'

export default function Banner() {
  return (
    <div className='flex flex-col-reverse md:flex-row h-auto'>
      <div className='text-[7vw] md:text-[3.5vw] pt-[10%] pl-[4%] basis-4/6'>
        <h1 className='font-bold'>HI, I'M NEVIN. <br/> A FULL STACK DEVELOPER </h1>
        <h1 className='font-thin text-neutral-800'>I make web applications, usually with MERN</h1>
      </div>

      <div className='flex items-center  basis-3/6 px-1 md:px-20 py-5 md:py-10'>
        <div className='relative'>
          <SocialIcons className="flex flex-col absolute left-1 bottom-1 text-neutral-300" githubIconColor='hover:text-[#656565] hover:cursor-pointer' />  {/*here ClassName and githubIconColor is props value of this component*/}
          <img className=' shadow-2xl object-contain' src="./assets/nevin-banner.jpg" alt="" />
        </div>
      </div>
    
    </div>
  )
}
