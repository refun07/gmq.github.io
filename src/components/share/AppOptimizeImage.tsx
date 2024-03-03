import Image from "next/image";
import React from "react";

function AppOptimizeImage({ src, alt, class_name, style, ...rest }: any) {
  return <Image src={src} alt={alt} priority={true} quality={100} {...rest} class_name={`w-full ${class_name}`} />;
}

export default AppOptimizeImage;
