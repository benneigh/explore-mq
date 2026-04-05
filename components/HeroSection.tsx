// components/HeroSection.tsx
import React from "react";
import NotificationBanner from "./NotificationBanner";

const HeroSection: React.FC = () => {
  return (
    // Make this relative so children can overlap below sections
    <section id="home" className="relative bg-white pb-0">
      <div className="container mx-auto flex flex-col sm:flex-row items-start justify-between px-4">
        {/* 
          1. Wrap the image in a relative container + z-index. 
          2. Use negative margin on the bottom of the img or the wrapper. 
        */}
        <div className="sm:w-1/2 flex justify-center mb-10 sm:mb-0 order-1 sm:order-2 relative z-20">
          <img
            src="/images/pic.webp"
            alt="Illustration of students and professor"
            className="w-4/5 sm:w-3/4 lg:w-full max-w-xs lg:max-w-lg rounded-3xl
                       mb-[-40px]  
                       drop-shadow-lg"
          />
        </div>
        <div className="sm:w-1/2 space-y-6 order-2 sm:order-1">
          <div className="inline-block mb-2">
            <NotificationBanner />
          </div>
          <h1 className="text-4xl lg:text-5xl leading-tight text-gray-900">
            AI-Powered Learning for the Modern Classroom
          </h1>
          <p className="text-gray-600 text-lg">
            MerryQuery is an AI-powered educational assistant that uses
            Retrieval-Augmented Generation (RAG) to provide course-specific,
            contextually relevant responses. With guided dialogues and reliable
            source citations, it enhances student learning and engagement. It
            also enables instructors to monitor student interactions and
            customize response granularity, ensuring accurate and adaptive
            support for different educational needs.
          </p>
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Currently in beta.</p>
            <a
              href="https://mq.dk-lab.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition flex items-center justify-center text-sm"
            >
              Check it out!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
