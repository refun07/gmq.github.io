import { Container } from '@/components/share'
import LeftToRight from '@/components/share/section/LeftToRight'
import { hospitality_and_cookeryDummyData } from '@/data/popular-courses/hospitality_and_cookeryData'
import React from 'react'

function CookeryCoursesAboutSection() {
    const {CookeryCoursesAboutSection} = hospitality_and_cookeryDummyData
  return (
    <div className='py-9'>
      <Container>
        <div className="df">
        <LeftToRight
          title={CookeryCoursesAboutSection?.title}
          tiny_mceEditor={CookeryCoursesAboutSection?.description}
          sideImg={CookeryCoursesAboutSection?.img}
          leftImageToRight
        />
        </div>
      </Container>
    </div>
  )
}

export default CookeryCoursesAboutSection
