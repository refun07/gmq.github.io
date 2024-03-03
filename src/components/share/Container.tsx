
function Container({ children, class_name, fullWidth=false, isContainer=true }:any) {
  return (
    <div className={`${isContainer ? 'container' : 'lg:px-3'} mx-auto p-2 md:p-1 ${fullWidth? 'lg:w-full max-w-[1440px]' : 'lg:w-[1236px]'} w-full ${class_name}`}>
        {children || ''}
    </div>
  )
}
export default Container;