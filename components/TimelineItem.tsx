"use client";
import React from "react";
import Image from "next/image";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  image: string;
  position: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  image,
  position,
}) => {
  return (
    <div className={`relative flex flex-col md:flex-row ${position === "left" ? "md:justify-start" : "md:justify-end"} mb-10`}>
      {/* Image and Date Container */}
      <div className={`relative flex-shrink-0 ${position === "left" ? "md:pr-4" : "md:pl-4"} mb-4 md:mb-0 ${position === "left" ? "md:mr-4" : "md:ml-4"} flex flex-col items-center md:items-start`}>
        <div className="relative w-20 h-20">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-teal-400"
          />
        </div>
        <span className="block text-center mt-2 bg-gray-700 text-white py-1 px-3 rounded-md md:block">
          {date}
        </span>
      </div>

      {/* Content Container */}
      <div className={`flex-grow relative ${position === "left" ? "md:pl-4" : "md:pr-4 md:ml-10"}`}>
        <div className={`border ${position === "left" ? "border-gray-700" : "border-gray-500"} rounded-lg p-4`}>
          <h1 className={`text-xl font-bold mb-2 ${position === "left" ? "text-teal-400" : "text-gray-300"}`}>
            {title}
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
