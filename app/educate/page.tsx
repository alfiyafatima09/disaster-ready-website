"use client";

import Link from 'next/link';
import Image from 'next/image';

const EducateYourselfPage = () => {
  return (
    <div className="relative min-h-screen bg-[#0B2F9F]flex items-center justify-center p-4">
      {/* Background Image */}
      <Image
        src="/preparedness.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 "
      />

      {/* Main Content (Glassmorphic Effect) */}
      <div className="relative z-10 backdrop-blur-md bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg shadow-md p-4 md:p-6 max-w-xs md:max-w-xl mx-auto flex flex-col items-center space-y-4 mt-20">
        
        {/* Centered Text Content */}
        <div className="text-white text-center space-y-5">
          <h1 className="text-lg md:text-xl font-bold leading-tight">
            Learn, Share, Transform and be the Change for a Safer Tomorrow
          </h1>

          <div className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold leading-tight">
              Ever Wondered Why Disasters Happen?<br />
            </h2>
            <Link href="/educate/causes" className="inline-block bg-white text-[#0B2F9F] py-1 px-3 text-xs md:text-sm rounded-md hover:bg-gray-200">
              Explore Now
            </Link>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm md:text-base font-semibold leading-tight">
              Ready to Make a Difference?<br />
              Learn About Innovative Solutions for Disaster Management!
            </h2>
            <Link href="/educate/solutions" className="inline-block bg-white text-[#0B2F9F] py-1 px-3 text-xs md:text-sm rounded-md hover:bg-gray-200">
              Discover Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducateYourselfPage;
