"use client";

import { useState } from 'react';
import styles from '../styles/preparedness.module.css';

const PreparednessPage = () => {
  const [selectedDisaster, setSelectedDisaster] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedDisaster(value);
    if (value) {
      window.location.href = `preparedness/${value}`;
    }
  };

  return (
    <div 
      className={`relative min-h-screen bg-cover bg-center ${styles.fadeInBackground}`} 
      style={{ backgroundImage: 'url(preparedness.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      <div className="relative flex flex-col items-center justify-start min-h-screen p-6 text-center pt-20 md:pt-32 lg:pt-40"> {/* Adjusted to justify-start and added padding at the top */}
        <h1 className={`${styles.fadeIn} text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6`}>Be Prepared</h1>
        <p className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8">Choose a disaster type to learn how to stay safe:</p>
        <select
          className={`p-3 md:p-4 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-300 ease-in-out transform hover:scale-105 ${styles.scaleUp}`}
          onChange={handleChange}
          value={selectedDisaster || ''}
        >
          <option value="" disabled>Select a disaster</option>
          <option value="earthquake">Earthquake</option>
          <option value="flood">Flood</option>
          <option value="landslide">Landslide</option>
        </select>
      </div>
    </div>
  );
};

export default PreparednessPage;