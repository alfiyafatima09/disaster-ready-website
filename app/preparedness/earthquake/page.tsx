"use client";

import Link from 'next/link';

const EarthquakePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-red-100 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">Earthquake Preparedness</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Learn about the steps you should take before, during, and after an earthquake to stay safe.
      </p>
      <Link href="/preparedness" className="text-red-500 hover:underline">
        Go back to Preparedness Page
      </Link>
    </div>
  );
};

export default EarthquakePage;