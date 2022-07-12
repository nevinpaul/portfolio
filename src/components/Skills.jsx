import React from 'react'
import SkillItem from './SkillItem'

const skills=['JavaScript','Reactjs','Nodejs','CSS','Tailwind','Express','Bootstrap','UI Design','MySQL','MongoDB','Git']

export default function Skills() {
  return (
    <div className=' h-auto mt-[7%] md:px-40'>
      <h1 className=' text-center font-bold text-4xl p-5'>SKILLS</h1>
      <div className='flex justify-between flex-wrap'>
        <SkillItem value={skills[0]} />
        <SkillItem value={skills[1]} />
        <SkillItem value={skills[2]} />
        <SkillItem value={skills[3]} />
        <SkillItem value={skills[4]} />
        <SkillItem value={skills[5]} />
        <SkillItem value={skills[6]} />
        <SkillItem value={skills[7]} />
        <SkillItem value={skills[8]} />
        <SkillItem value={skills[9]} />
        <SkillItem value={skills[10]} />

      </div>
    </div>
  )
}
