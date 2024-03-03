import ScrollToTop from "react-scroll-to-top";

function AppGoToTop() {
  return (
    <ScrollToTop
      smooth
      className="!bg-bluePrimary flex justify-center items-center p-3 !rounded-full"
      color="#fff"
    />
  );
}

export default AppGoToTop;
// !bg-bluePrimary border !rounded-full !w-[50px] !h-[50px] !p-2 hover:opacity-90 flex justify-center items-center