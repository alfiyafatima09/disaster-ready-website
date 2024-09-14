"use client";
import DisasterBoard from "@/components/DisasterBoard";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative w-full">
          <img
            src="https://images.pexels.com/photos/942560/pexels-photo-942560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Disaster Awareness"
            className="w-full h-96 object-cover object-center   filter brightness-50 contrast-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Stay Informed, Stay Safe
            </h1>
            <p className="text-base md:text-xl text-center max-w-lg">
              Get real-time updates and essential information to prepare for any
              disaster.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative w-full">
          <img
            src="https://images.pexels.com/photos/70573/fireman-firefighter-rubble-9-11-70573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Disaster Awareness"
            className="w-full h-96 object-cover object-right-top"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Disaster Preparedness Tips
            </h1>
            <p className="text-base md:text-xl text-center max-w-lg">
              Learn key strategies and steps to protect yourself and your loved
              ones before a disaster strikes.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl md:text-6xl font-bold text-center my-1">
        IMPORTANT LINKS
      </h1>
      <DisasterBoard />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative w-full">
          <img
            src="https://images.pexels.com/photos/28307967/pexels-photo-28307967/free-photo-of-a-fire-is-burning-in-the-dark-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Disaster Awareness"
            className="w-full h-96 object-cover object-center  filter brightness-50 contrast-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Connect, Share, Prepare
            </h1>
            <p className="text-base md:text-xl text-center max-w-lg">
              Join Our Community Today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
