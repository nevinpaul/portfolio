import React from 'react'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <div className='mt-[10%] h-96 px-[4%] flex flex-col  justify-around'>
        <div>
            <h1 className='text-3xl font-extrabold'>Have an idea? Let's build your business together.</h1>
            <p className='mt-4 md:mt-[1%] text-sm md:text-lg'>Feel free to reach out if you’re in need of a Developer. Whether that means you need a website, <br /> web app, or you’re looking to fill a full-time position. I’m always open to a conversation.</p>
        </div>
        <h1 className=' text-xl font-normal underline text-slate-900'>nevinpaul828@gmail.com</h1>
        <div className='flex justify-between'>
            <h1 className=' text-4xl text-[#6c7e72] hover:cursor-pointer'>NEVN<span className=' text-emerald-900 font-["Oswald"] text-4xl'>.</span> </h1>
            <SocialIcons className='text-neutral-500 flex justify-between w-52 pt-2 md:pt-0' githubIconColor='hover:text-[#333] hover:cursor-pointer'/> {/* here ClassName and githubIconColor is props value of this component */}
        </div>
        
    </div>
  )
}
