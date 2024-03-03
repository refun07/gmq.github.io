import RPL_AllQualificationsList from '@/components/rpl/allQualifications/RPL_AllQualificationsList';
import { AppCourseBanner, DynamicHead, VisitedForm } from '@/components/share'
import React from 'react'
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from '@/components/share/section/PopUpElement';
import { useRouter } from 'next/router';

function Qualifications() {
  const router = useRouter()
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl'
  }
  return (
    <>
      <DynamicHead title="RPL Qualifications-GMQ Global" description="RPL Qualifications-GMQ Global"  canonicalPath={router?.pathname}/>
      <AppCourseBanner text={"RPL Qualifications"} />
      <RPL_AllQualificationsList />
      
    </>
  )
}

export default Qualifications
