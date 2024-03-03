import { Container } from '@/components/share'
import LeftToRight from '@/components/share/section/LeftToRight'
import { VisaServicesMigrationServicesDummyData } from '@/data/ServiceMigrationServicesData'
import React from 'react'

function VisaServicesSectionTwo() {
    const { sectionOne } = VisaServicesMigrationServicesDummyData
    const { left, right } = sectionOne
  return (
    <div className='py-16'>
      <Container>
        <LeftToRight title={right?.title} tiny_mceEditor={right?.text} sideImg={left?.img} class_name='' />
      </Container>
    </div>
  )
}

export default VisaServicesSectionTwo
