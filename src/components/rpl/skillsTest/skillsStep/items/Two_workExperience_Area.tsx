import { AppSubTitle } from '@/components/share'

function Two_workExperience_Area({id, name, workExperience_AreaResult, checked}:any) {
  return (
    <div className={`flex flex-col hover:bg-secondary hover:!text-white cursor-pointer  border border-secondary p-2 rounded-2xl group transition-all ${String(id) === workExperience_AreaResult ? 'bg-secondary text-white': 'bg-white' }`}
     onClick={()=> checked(id)}>
        <AppSubTitle text={name}  class_name={`text-center p-3 py-0 group-hover:text-white transition-all ${String(id) === workExperience_AreaResult ? 'text-white': 'text-primary' }`} />
    </div>
  )
}

export default Two_workExperience_Area