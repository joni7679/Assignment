import React from "react";
import { Plus, ArrowLeft, ArrowRight, CircleQuestionMark, LayoutGrid } from "lucide-react";

const Gallery = () => {
    // gallery-sectin img here
    const galleryImg = [
        {
            Image: "https://images.unsplash.com/photo-1507187632231-5beb21a654a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1201"
        },

        {
            Image: "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
        },
        {
            Image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        },

        {
            Image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        },
        {
            Image: "hhttps://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        },
        {
            Image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174"
        },


        {
            Image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172"
        },
        {
            Image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1275"
        },
    ]
    return (
        <div className="flex items-center w-full justify-center">
            <div className="w-[720px] h-[330px] bg-[#363C43] rounded-[18.89px] py-3 px-11 flex flex-col relative">
                <CircleQuestionMark color="#fff" className="absolute  left-[13px] top-[7%]" />
                <LayoutGrid color="#8e8e90" strokeWidth={1} className="absolute left-[13px] top-[40%]" />
                <div className="top-bar flex items-center justify-between mb-6">
                    <button className="text-white font-[Poppins] flex items-center justify-center gap-4 bg-[#171717] p-3 rounded-[20px] w-[149px] h-[62px] ">
                        Gallery
                    </button>
                    <div className="flex items-center gap-3">
                        <button className="add-img-btn bg-[#3A3B3E] w-[131px] h-[46px] rounded-[104px] text-white text-sm flex items-center justify-center gap-2 px-3">
                            <Plus size={16} /> ADD IMAGE
                        </button>
                        <div className="flex gap-2">
                            <button className="icon w-[45px] h-[45px] flex items-center justify-center rounded-full">
                                <ArrowLeft size={16} color="#fff" />
                            </button>
                            <button className="icon w-[45px] h-[45px] flex items-center justify-center rounded-full">
                                <ArrowRight size={16} color="#fff" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="gallery-section flex items-center gap-5 w-full overflow-hidden">
                    {galleryImg.map((img, index) => {
                        return (
                            <div key={index} className="shrink-0 w-[190px] h-[179px] rounded-[24px] bg-red-700 overflow-hidden">
                                <img className="w-full h-full object-cover gallery-img" src={img.Image} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
