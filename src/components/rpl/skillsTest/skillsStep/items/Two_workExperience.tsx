import { AppSubTitle } from '@/components/share'

function Two_workExperience({id, text, year, checked, workExperienceResult}: any) {
    

  return (
    <div className={`flex flex-col justify-center items-center hover:bg-secondary cursor-pointer  border border-secondary p-2 rounded-2xl group transition-all ${String(id) === workExperienceResult ? 'bg-secondary': 'bg-white' }`}
     onClick={()=> checked(id)}>
        <AppSubTitle text={year} class_name={`text-center p-3 py-0 group-hover:text-white transition-all ${String(id) === workExperienceResult ? 'text-white': 'text-primary' }`} />
        <AppSubTitle text={text} class_name={`text-center p-3 py-0 group-hover:text-white transition-all ${String(id) === workExperienceResult ? 'text-white': 'text-primary' }`} />
    </div>
  )
}

export default Two_workExperience