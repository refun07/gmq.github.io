import { Container } from '@/components/share'
import LeftToRight from '@/components/share/section/LeftToRight'
import { VisaServicesMigrationServicesDummyData } from '@/data/ServiceMigrationServicesData'
import React from 'react'

function VisaServicesSectionThree() {
    const { sectionTwo } = VisaServicesMigrationServicesDummyData
    const { left, right } = sectionTwo
  return (
    <div className='py-16'>
      <Container>
        <LeftToRight title={right?.title} tiny_mceEditor={right?.text} sideImg={left?.img} leftImageToRight />
      </Container>
    </div>
  )
}

export default VisaServicesSectionThree
