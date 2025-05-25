import React from 'react'

import CardsSection from '../Sections/CardsSection'
import PageHeaderSection from '../Sections/PageHeaderSection'
import Footer from '../components/Footer'
import SocialAct from '../Sections/SocialAct'
import ProjectContactSection from '../Sections/ProjectContactSection'

function Services() {
  return (
    <div >
        <PageHeaderSection/>
        <CardsSection/>
        <ProjectContactSection/>
        <div className='mb-20'>
        <SocialAct/>
        </div>
    </div>
  )
}

export default Services