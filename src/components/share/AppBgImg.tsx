
import Image from "next/image";

function AppBgImg({ BgImg, alt, class_name, ...rest }: any) {
  return (
    <Image
      quality={100}
      placeholder="blur"
      src={BgImg}
      alt={alt + ' background image' || "image of GMQ GLOBAL"}
      className={`absolute top-0 left-0 w-[100%] h-[100%] -z-10 object-cover ${class_name}`}
      loading="lazy"
      // blurDataURL="true"
      {...rest}
    />
  );
}

export default AppBgImg;