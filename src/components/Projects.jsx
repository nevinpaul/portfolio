import React from 'react'
import ProjectItem from './ProjectItem'
import {ProjectData} from "../projectData"


export default function Projects() {
  return (
    <div className='mt-[7%] h-auto px-10'>
        <h1 className=' text-center font-bold text-4xl p-5'>PROJECTS</h1>
        <div className='flex flex-col md:flex-row h-auto md:p-5'>
            {ProjectData.map((p) => (
                <ProjectItem key={p.id} name={p.name} projectImg={p.projectImg} about={p.about} url={p.url}/>
            ))}
        </div>
        
    </div>
  )
}
