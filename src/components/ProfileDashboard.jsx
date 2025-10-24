import React, { useState, useRef } from "react";

// Dummy initial images (replace these with your actual URLs or data)
const initialImages = [
    "https://via.placeholder.com/100x100?text=Img+1",
    "https://via.placeholder.com/100x100?text=Img+2",
    "https://via.placeholder.com/100x100?text=Img+3",
    "https://via.placeholder.com/100x100?text=Img+4",
];

const GalleryCard = ({ src }) => (
    <div className="rounded-xl overflow-hidden border border-gray-300 bg-gray-200 w-28 h-28 flex items-center justify-center">
        <img src={src} alt="Gallery" className="w-full h-full object-cover" />
    </div>
);

export default function ProfileDashboard() {
    const [images, setImages] = useState(initialImages);
    const [startIndex, setStartIndex] = useState(0); // Slider starting point
    const sliderLength = 3; // Number showing at once
    const fileInputRef = useRef();

    const handleAddImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file); // For preview, not permanent storage
        setImages((old) => [...old, url]);
        e.target.value = ""; // Reset input
    };

    const openFileDialog = () => {
        fileInputRef.current.click();
    };

    // Logic for arrow navigation
    const canGoLeft = startIndex > 0;
    const canGoRight = startIndex + sliderLength < images.length;

    const next = () => {
        if (canGoRight) setStartIndex(startIndex + 1);
    };
    const prev = () => {
        if (canGoLeft) setStartIndex(startIndex - 1);
    };

    return (
        <div className="bg-gray-900 min-h-screen text-gray-100 flex flex-col items-center justify-center py-10">
            {/* Profile Info Section */}
            <div className="w-[600px] rounded-2xl bg-gray-800 px-8 py-6 mb-6 shadow-lg">
                <div className="flex space-x-4 mb-4">
                    <button className="bg-black text-white px-4 py-2 rounded-xl font-semibold text-lg shadow-sm">
                        About Me
                    </button>
                    <button className="text-gray-400 px-4 py-2 rounded-xl font-semibold text-lg">
                        Experiences
                    </button>
                    <button className="text-gray-400 px-4 py-2 rounded-xl font-semibold text-lg">
                        Recommended
                    </button>
                </div>
                <div className="text-base leading-relaxed text-gray-300">
                    <p>
                        Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                    </p>
                    <p className="mt-2">
                        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...
                    </p>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="w-[600px] rounded-2xl bg-gray-800 px-8 py-6 shadow-lg">
                <div className="flex items-center mb-6">
                    <button className="bg-black text-white px-4 py-2 rounded-xl font-semibold text-lg mr-4">
                        Gallery
                    </button>
                    <button
                        className="ml-auto bg-gray-700 text-white px-4 py-2 rounded-md border border-gray-400 hover:bg-gray-600 transition"
                        onClick={openFileDialog}
                    >
                        + ADD IMAGE
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleAddImage}
                    />
                    <button
                        onClick={prev}
                        disabled={!canGoLeft}
                        className={`ml-2 px-3 py-2 rounded-md border border-gray-400 transition
                ${canGoLeft ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-600 text-gray-400 cursor-not-allowed"}
            `}
                    >
                        ←
                    </button>
                    <button
                        onClick={next}
                        disabled={!canGoRight}
                        className={`ml-2 px-3 py-2 rounded-md border border-gray-400 transition
                ${canGoRight ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-600 text-gray-400 cursor-not-allowed"}
            `}
                    >
                        →
                    </button>
                </div>
                <div className="flex space-x-4">
                    {images
                        .slice(startIndex, startIndex + sliderLength)
                        .map((img, i) => (
                            <GalleryCard src={img} key={startIndex + i} />
                        ))}
                </div>
            </div>
        </div>
    );
}
