"use client";

import Link from 'next/link';

const LandslidePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-green-100 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Landslide Preparedness</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Learn about the steps you should take before, during, and after a landslide to stay safe.
      </p>
      <Link href="/preparedness" className="text-green-500 hover:underline">
        Go back to Preparedness Page
      </Link>
    </div>
  );
};

export default LandslidePage;