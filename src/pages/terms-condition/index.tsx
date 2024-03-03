import TermsConditionBody from '@/components/other/termsCondition/termsConditionBody'
import { DynamicHead } from '@/components/share'
import { useRouter } from 'next/router'
import React from 'react'

function TermsConditionPage() {
  const router = useRouter()
  return (
    <>
      <DynamicHead title="Terms & Condition - GMQ Global" description="Terms & Condition - GMQ Global"  canonicalPath={router?.pathname}/>
      <TermsConditionBody />
    </>
  )
}

export default TermsConditionPage
