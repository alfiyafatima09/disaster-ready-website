"use client";
import DisasterBoard from "@/components/DisasterBoard";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Section 1: Stay Informed */}
      <div className="flex items-center justify-center bg-gray-100 pb-12">
        <div className="relative w-full">
          <img
            src="https://images.pexels.com/photos/942560/pexels-photo-942560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Disaster Awareness"
            className="w-full h-96 object-cover object-center filter brightness-50 contrast-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Stay Informed, Stay Safe
            </h1>
            <p className="text-lg md:text-2xl text-center max-w-lg">
              Get real-time updates and essential information to prepare for any
              disaster.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center px-6 bg-gray-100">
        <div className="flex-shrink-0 w-2/5">
          <img
            src="/logo/logo.png"
            alt="Logo"
            className="w-full object-contain"
          />
        </div>
        <div className="w-3/5 pl-6">
          <h2 className="text-4xl font-bold mb-4">RescueRing</h2>
          <p className="text-lg text-gray-700">
            RescueRing is a disaster management solution that combines a mobile
            app for real-time community support during emergencies and a website
            for pre-disaster education and preparedness. The app helps users
            mark safe locations, request assistance, and manage relief efforts.
            The website focuses on disaster preparedness, understanding disaster
            causes, and offering solutions, promoting awareness and readiness.
          </p>
        </div>
      </div>
      {/* Section 2: Disaster Preparedness Tips */}
      <div className="flex items-center justify-center bg-gray-100 pb-12">
        <div className="relative w-full">
          <img
            src="https://images.pexels.com/photos/70573/fireman-firefighter-rubble-9-11-70573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Disaster Preparedness"
            className="w-full h-96 object-cover object-right-top"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Disaster Preparedness Tips
            </h1>
            <p className="text-lg md:text-2xl text-center max-w-lg">
              Learn key strategies and steps to protect yourself and your loved
              ones before a disaster strikes.
            </p>
          </div>
        </div>
      </div>

      {/* Important Links Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
          IMPORTANT LINKS
        </h1>
        <DisasterBoard />
      </div>

      {/* Section 3: Connect and Share */}
      <div className="flex items-center justify-center bg-gray-100 pt-12">
        <div className="relative w-full">
          <img
            src="https://images.pexels.com/photos/28307967/pexels-photo-28307967/free-photo-of-a-fire-is-burning-in-the-dark-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Connect and Share"
            className="w-full h-96 object-cover object-center filter brightness-50 contrast-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Connect, Share, Prepare
            </h1>
            <p className="text-lg md:text-2xl text-center max-w-lg">
              Join Our Community Today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
