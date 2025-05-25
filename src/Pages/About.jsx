import React from 'react'
import PageHeader from '../Sections/PageHeaderSection'
import AboutSection from '../Sections/AboutSection'
import StatsSection from '../Sections/StatsAboutSection'
import BusinessSolutions from '../Sections/BusinessSolution'
import News from '../components/News'
import LogoBar from '../components/LogoBar'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Stats from '../components/Stats'
import ServiceCard from '../components/ServiceCard'
import Feature from '../components/Feature'

function About() {
  return (
    <div>
        <PageHeader/>
        <AboutSection/>
        <StatsSection/>
        <BusinessSolutions/>
        <Feature/>
        <div className='mb-40'>
        <LogoBar/>
        </div>
        
    </div>
  )
}

export default About