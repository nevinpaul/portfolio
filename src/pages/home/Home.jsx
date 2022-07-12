import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}
