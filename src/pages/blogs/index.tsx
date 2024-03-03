import { DynamicHead } from '@/components/share'
import AppBannerImg from '@/components/share/AppBannerImg'
import { useRouter } from 'next/router'
import Blog from '@/components/contact/Blog'

import React from 'react'


function BlogPage() {
  const router = useRouter()
  return (
    <>
      <DynamicHead title="Blogs - GMQ Global"  canonicalPath={router?.pathname} />
     <Blog></Blog>
     
    </>
  )
}

export default BlogPage;
