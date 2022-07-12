import React from 'react'

export default function SkillItem(props) {
  return (
    <div className=' flex justify-center items-center min-w-[23%] h-9 md:h-16 md:w-48 m-4 bg-[#f2f1ef] border-2 border-black hover:bg-black hover:text-white'>
      <h1>{props.value}</h1>
    </div>
  )
}
