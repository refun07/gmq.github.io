import Image from "next/image";
import React from "react";

function AppImg({ src, alt, class_name, isPlaceholder = true, ...rest }: any) {
  return (
    <Image
    src={src}
    alt={alt + ' image' || "image of GMQ Global"}
    quality={100}
    loading="lazy"
    placeholder={isPlaceholder? "blur" : "empty"}
    // priority={true}
    blurDataURL="true"
    className={`max-w-full ${class_name}`}
    // style={{width: 'auto', height: 'auto', objectFit: 'contain'}}
    {...rest}
    
  />
  );
}

export default AppImg;
