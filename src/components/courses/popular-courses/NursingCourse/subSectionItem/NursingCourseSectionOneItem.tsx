import { AppBgImg, AppDescriptionWithDangerouslySetInnerHTML, AppSubTitle } from '@/components/share'
import AppImg from '@/components/share/AppImg'
import React from 'react'

function NursingCourseSectionOneItem({assert, title, text, bgImg}:any) {
  return (
    <div className='w-full rounded-2xl p-4 grid grid-cols-1 justify-center items-center gap-3 shadow-lg border border-grayCustom relative group'>
      <AppImg src={assert} alt={title} width="90" class_name="border-4 rounded-full p-1 bg-secondary group-hover:scale-110 transition-all" />
      <div className="col-span-1">
        <AppSubTitle text={title} class_name="font-medium text-[24px]" />
        <AppDescriptionWithDangerouslySetInnerHTML text={text} class_name="mt-2 " />
      </div>
      <AppBgImg BgImg={bgImg} alt={title + ' background image'} class_name="opacity-5 group-hover:opacity-20 transition-all " />
    </div>
  )
}

export default NursingCourseSectionOneItem
