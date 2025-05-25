import React from 'react'
import ContactCardSection from '../Sections/ContactCardSection'
import ContactUsSection from '../Sections/ContactUsSection'
import PageHeaderSection from '../Sections/PageHeaderSection'

function Contact() {
  return (
    <div>
      <PageHeaderSection />
        <ContactCardSection/>
        <ContactUsSection/>
    </div>
  )
}

export default Contact