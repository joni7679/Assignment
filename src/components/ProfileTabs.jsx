import React, { useState } from "react";
import { tabs } from "../data/tabs";
import { CircleQuestionMark, LayoutGrid } from "lucide-react";


<LayoutGrid size={32} color="#A3ADBA" />

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const changeTab = (index) => {
    setActiveTab(tabs[index])
  }

  return (
    <>
      <div className="w-full flex justify-center py-10 ">

        <div className="bg-[#4a4e54] p-6 rounded-[19px] shadow-lg  w-[45rem] h-[300px] flex items-center  flex-col relative">
          <CircleQuestionMark color="#fff" className="absolute  left-[13px] top-[7%]" />
          <LayoutGrid color="#8e8e90" strokeWidth={1} className="absolute left-[13px] top-[40%]"/>
          <div className="btn-group flex items-center gap-4 bg-[#171717] p-3 rounded-[1.438em] w-[38.375em] h-[3.875em] mb-6">
            {tabs.map((tap, index) => {
              const { label } = tap
              return (
                <button onClick={() => changeTab(index)} className={`btn  rounded-[16px] text-white font-[poppins] }`}>{label}</button>
              )
            })}
          </div>
          <div className="custom-scrollbar w-[614px] leading-relaxed px-2 h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            <p className="text-[#969696] text-[20px]  font-thin font-[plusJakartaSans]">{activeTab.content}</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default ProfileTabs;
