import React from "react";

function AppLoader({class_name = "w-[180px] h-[180px]"}:any) {
  return (
    <div className={`loader scale-[.3] ${class_name}`}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

export default AppLoader;
