"use client";
import React from "react";
import Lottie from "lottie-react";
import whatsappAnimation from "../public/WhatsappTransparent.json"; // ✅ relative path

const WhatsappChatbot: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50">
      <a
        href="https://wa.me/919799009134?text=Hi%20I%20need%20details"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2"
      >
        {/* Tooltip / Label */}
        <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-sm font-medium bg-green-600 text-white px-3 py-1 rounded-lg shadow-md">
          WhatsApp Chat
        </span>

        {/* Floating Button */}
        <div className="bg-[#F7EDE0] border border-amber-950 rounded-full p-1 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-16 h-16 flex items-center justify-center">
          <Lottie animationData={whatsappAnimation} loop autoPlay />
        </div>
      </a>
    </div>
  );
};

export default WhatsappChatbot;



