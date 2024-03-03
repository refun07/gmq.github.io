import { Container } from '@/components/share'
import LeftToRight from '@/components/share/section/LeftToRight'
import { WhichVisaIsRightForMeDummyData } from '@/data/ServiceMigrationServicesData';
import React from 'react'

function WhichVisaIsRightForMeSectionThree() {
    const { sectionTwo } = WhichVisaIsRightForMeDummyData;
    const { left, right } = sectionTwo;
  return (
    <div className='py-16'>
      <Container>
        <LeftToRight title={right?.title} tiny_mceEditor={right?.text} sideImg={left?.img} />
      </Container>
    </div>
  )
}

export default WhichVisaIsRightForMeSectionThree
