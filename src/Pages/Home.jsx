import React from 'react'

import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Form from "../components/Form"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Info from "../components/Info"
import LogoBar from "../components/LogoBar"
import News from "../components/News"
import Pricing from "../components/Pricing"
import ServiceCard from "../components/ServiceCard"
import Stats from "../components/Stats"
import SeoService from '../Sections/SeoService'

function Home() {
  return (
    <div>
        
      <Hero/>
      <ServiceCard/>
      <SeoService/>
      <Info/>
      <Form/>
      <Pricing/>
      <LogoBar/>
      <Feature/>
      <News/>
     
    </div>
  )
}

export default Home