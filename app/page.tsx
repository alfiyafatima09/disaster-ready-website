"use client";
import DisasterBoard from "@/components/DisasterBoard";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Section 1: Stay Informed */}
      <div className="flex items-center justify-center pb-12">
        <div className="relative w-full">
          <video
            src="bg.mp4"
            className="w-full h-screen object-cover object-center filter brightness-50 contrast-110"
            autoPlay
            loop
            muted
            controls={false}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 p-4">
              Stay Informed, Stay Safe
            </h1>
            <p className="text-lg md:text-2xl text-center max-w-lg">
              Get real-time updates and essential information to prepare for any
              disaster.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center md:p-16 p-8 md:flex-row flex-col">
        <div className="">
          <h2 className="md:text-5xl text-3xl font-black mb-8">RescueRing</h2>
          <p className="md:text-xl text-gray-700 mb-4">
            RescueRing is a disaster management solution that combines a mobile
            app for real-time community support during emergencies and a website
            for pre-disaster education and preparedness. The app helps users
            mark safe locations, request assistance, and manage relief efforts.
            The website focuses on disaster preparedness, understanding disaster
            causes, and offering solutions, promoting awareness and readiness.
          </p>
        </div>
        <div className="flex w-1/1 items-center justify-center">
          <img
            src="logo/logo.png"
            alt="Logo"
            className="object-contain w-3/5"
          />
        </div>
      </div>
      {/* Section 2: Disaster Preparedness Tips */}
      <div className="flex items-center justify-center">
        <div className="relative w-full">
          <img
            src="dis_bg.jpg"
            alt="Disaster Preparedness"
            className="w-full h-96 object-right-top object-cover object-center filter brightness-50 contrast-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 p-4">
              Disaster Preparedness Tips
            </h1>
            <p className="text-lg md:text-2xl text-center p-4">
              Learn key strategies and steps to protect yourself and your loved
              ones before a disaster strikes.
            </p>
          </div>
        </div>
      </div>

      {/* Important Links Section */}
      <div className="text-center">
        <DisasterBoard />
        <p  className="text-center text-gray-600 mb-4">
        You will be redirected to the official government website
        </p>
      </div>

      {/* Section 3: Connect and Share */}
      <div className="flex items-center justify-center pt-12">
        <div className="relative w-full">
          <img
            src="https://images.pexels.com/photos/28307967/pexels-photo-28307967/free-photo-of-a-fire-is-burning-in-the-dark-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Connect and Share"
            className="w-full h-96 object-cover object-center filter brightness-50 contrast-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-6 p-4 mx-auto">
              Connect, Share, Prepare
            </h1>
            <p className="text-lg md:text-2xl font-bold text-center max-w-lg">
              Join Our Community Today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
