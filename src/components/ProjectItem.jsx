import React from 'react'
import {ArrowRightAlt} from '@mui/icons-material'
export default function ProjectItem(project) {
    //console.log(project)
  return (
    <div className='flex flex-col  md:w-[50%] h-auto p-4 '>
            <img className='h-4/6 shadow-lg'   src={project.projectImg} alt="" />

            <div className='font-bold h-1/6 px-3 pt-6 md:text-[2.5vw]'>
                <h1>{project.name}</h1>
            </div>
            <div className=' h-1/6 px-3 m-1 flex flex-col'>
                <p className='h-1/2 text-xs md:text-[1.2vw] '>{project.about}</p>
                <a className='pl-3 md:pl-4 bg-white md:py-1 mt-1 w-40 md:mt-[3vh] md:font-medium p- md:w-44' href={project.url} target="_blank" rel="noopener noreferrer" >view live project<ArrowRightAlt className='md:mx-2'/></a>
            </div>                              {/* rel is added in the above line is to prevent Tabnabbing, a phishing attack! */}
            
    </div>
  )
}
