import { Container } from '@/components/share'
import CourseDetailsBodySection from '@/components/share/section/CourseDetailsBodySection'
import { PermanentResidencyPathwaysInAustraliaDummyData } from '@/data/ServiceMigrationServicesData'
import React from 'react'

function PermanentResidencyPathwaysInAustraliaBody() {
   const { left, right } = PermanentResidencyPathwaysInAustraliaDummyData
  return (
    <div className='py-16'>
      <Container>
        <div className="df">
        <CourseDetailsBodySection  text={left?.textData} ContactForm={right} class_name="w-full" />
        </div>
        
      </Container>
    </div>
  )
}

export default PermanentResidencyPathwaysInAustraliaBody
