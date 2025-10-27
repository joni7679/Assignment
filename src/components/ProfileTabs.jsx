import React, { useState } from "react";
import { tabs } from "../data/tabs";
import vector from "../assets/images/Vector.svg";
import gird from "../assets/images/grid.svg";

const ProfileTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activetap = tabs[activeTabIndex];
  const tapsPoiSitions = ["3%", "35%", "65%"];

  const changeTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <div className="flex justify-center px-5 md:px-0">
        <div className="bg-[#363C43] tabs p-8 rounded-[19px] shadow-lg h-auto md:h-[316px] flex items-center flex-col relative w-full max-w-[720px]">
          <div className="absolute left-[13px] top-[13%]">
            <img loading="lazy" src={vector} alt="vector" />
          </div>
          <div className="absolute left-[13px] top-[40%]">
            <img loading="lazy" src={gird} alt="grid" />
          </div>
          <div className="btn-group flex items-center gap-4 bg-[#171717] p-3 rounded-[1.438em] w-full max-w-[600px] h-[3.875em] mb-6 relative">
            <button  className="rounded-[16px] text-white overly-btn bg-[#28292F] w-[12.188em] h-[3.063em] absolute cursor-pointer transition-all duration-150"
              style={{ left: tapsPoiSitions[activeTabIndex] }}></button>
            {tabs.map((tap, index) => {
              const { label } = tap
              return (
                <button key={index} onClick={() => changeTab(index)} className="btn  rounded-[16px] text-white font-[poppins]">{label}</button>
              )
            })}
          </div>
          <div className="custom-scrollbar w-full leading-relaxed px-2 h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <p className="text-[#969696] text-[20px] leading-[28px] font-normal font-[plusJakartaSans] px-2">
              {activetap.content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTabs;
