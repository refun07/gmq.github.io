import { Container } from '@/components/share';
import LeftToRight from '@/components/share/section/LeftToRight';
import { WhichVisaIsRightForMeDummyData } from '@/data/ServiceMigrationServicesData';
import React from 'react'

function WhichVisaIsRightForMeSectionSix() {
    const { sectionSix } = WhichVisaIsRightForMeDummyData;
    const { left, right, } = sectionSix;
  return (
    <div className='py-16'>
      <Container>
        <LeftToRight title={right?.title} tiny_mceEditor={right?.text} sideImg={left?.img} isBtn btn={right?.btn}  />
      </Container>
    </div>
  )
}

export default WhichVisaIsRightForMeSectionSix
