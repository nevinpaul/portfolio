import React from 'react'

export default function Navbar() {
  return (
    <div className=' h-20 px-[0.5%] md:px-[4%] flex justify-between items-center'>
        <h1 className=' text-2xl pb-3 md:pb-0 md:text-3xl text-[#6c7e72] hover:cursor-pointer '>NEVN<span className=' text-emerald-900 font-["Oswald"] text-4xl'>.</span> </h1>

        <div className=' flex justify-between gap-5 md:gap-16 items-center font-semibold text-xs md:text-lg'>
            <p className=' hover:underline hover:underline-offset-8 hover:text-emerald-700 decoration-black cursor-pointer'>Home</p>
            <p className=' hover:underline hover:underline-offset-8 hover:text-emerald-700 decoration-black cursor-pointer '>Skills</p>
            <p className=' hover:underline hover:underline-offset-8 hover:text-emerald-700 decoration-black cursor-pointer'>Projects</p>
        </div>

        <h1 className=' text-[8px] md:text-xs font-normal text-slate-900'>nevinpaul828@gmail.com</h1>
    </div>
  )
}
