import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

function QualificationSearch({searchInput, handleSearch}: any) {
  return (
    <div className="bg-white rounded md:p-3">
      <div className="flex justify-center items-center border-2 border-secondary rounded h-[60px]">
        <div className=" text-white w-[60px] h-[60px] flex justify-center items-center bg-secondary">
          <MdOutlineSearch size={25} />
        </div>
        <input
          type="search"
          value={searchInput}
          onChange={(e)=>handleSearch(e)}
          className="p-3 h-full flex-1 focus:none outline-none"
          placeholder="Search for Course Name..."
        />
      </div>
    </div>
  );
}

export default QualificationSearch;
