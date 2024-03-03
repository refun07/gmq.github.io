import { Container } from '@/components/share'
import LeftToRight from '@/components/share/section/LeftToRight'
import { VisaServicesMigrationServicesDummyData } from '@/data/ServiceMigrationServicesData'
import React from 'react'

function VisaServicesSectionFour() {
    const { sectionThree } = VisaServicesMigrationServicesDummyData
    const { left, right } = sectionThree
  return (
    <div className='py-16'>
      <Container>
        <LeftToRight title={right?.title} tiny_mceEditor={right?.text} sideImg={left?.img} />
      </Container>
    </div>
  )
}

export default VisaServicesSectionFour
