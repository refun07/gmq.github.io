import TermsOfUseBody from '@/components/other/TermsOfUse/TermsOfUseBody'
import { DynamicHead } from '@/components/share'
import { useRouter } from 'next/router'
import React from 'react'

function TermsOfUsePage() {
  const router = useRouter()
    
  return (
    <>
      <DynamicHead title="Terms of Use - GMQ Global" description="Terms of Use - GMQ Global"  canonicalPath={router?.pathname}/>
      <TermsOfUseBody />
    </>
  )
}

export default TermsOfUsePage
