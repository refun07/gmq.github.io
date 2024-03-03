import PrivacyPolicyBody from '@/components/other/PrivacyPolicy/PrivacyPolicyBody'
import { DynamicHead } from '@/components/share'
import { useRouter } from 'next/router'
import React from 'react'

function PrivacyPolicyPage() {
  const router = useRouter()
  return (
    <>
      <DynamicHead title="Privacy Policy - GMQ Global" description="Privacy Policy - GMQ Global"  canonicalPath={router?.pathname}/>
      <PrivacyPolicyBody />
    </>
  )
}

export default PrivacyPolicyPage
