import React from 'react'
import {Instagram} from '@mui/icons-material'
import {LinkedIn} from '@mui/icons-material'
import {Twitter} from '@mui/icons-material'
import {GitHub} from '@mui/icons-material'


export default function SocialIcons(props) {
  return (
    <div className={props.className} >
      
        <Instagram className='hover:text-[#DD2A7B] hover:cursor-pointer' fontSize='large' onClick={() => window.open('https://instagram.com/nevinpol')} /> 
        <LinkedIn className='hover:text-[#0077B5] hover:cursor-pointer'  fontSize='large' onClick={() => window.open('https://linkedin.com/in/nevinpol')} /> 
        <Twitter className='hover:text-[#1DA1F2] hover:cursor-pointer' fontSize='large' onClick={() => window.open('https://twitter.com/nev_paul')} />
        <GitHub className={props.githubIconColor} fontSize='large' onClick={() => window.open('https://github.com/nevinpaul')} />
    </div>
  )
}
