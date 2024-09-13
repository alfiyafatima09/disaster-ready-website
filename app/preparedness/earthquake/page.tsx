import React from "react";
import TimelineItem from "@/components/TimelineItem";

const EarthquakePreparedness: React.FC = () => {
  const items = [
    {
      date: "Step 1",
      title: "Create an Emergency Plan and Kit",
      description: "Develop a family plan with safe spots, a meeting point, and an emergency kit containing water, non-perishable food, a flashlight, batteries, first aid supplies, and essential medications.",
      image: "/eq1.jpg",
      position: "left" as const,
    },
    {
      date: "Step 2",
      title: "Secure Heavy Objects",
      description: "Anchor furniture, appliances, and electronics to walls to prevent them from tipping over during an earthquake.",
      image: "/eq2.jpg",
      position: "right" as const,
    },
    {
      date: "Step 3",
      title: "Practice 'Drop, Cover, and Hold On'",
      description: "Familiarize yourself with this safety technique to protect yourself during shaking by dropping to your knees, taking cover under sturdy furniture, and holding on to it.",
      image: "/eq3.jpg",
      position: "left" as const,
    },
    {
      date: "Step 4",
      title: "Know How to Shut Off Utilities",
      description: "Learn to turn off gas, electricity, and water to prevent hazards such as fires and flooding.",
      image: "/eq4.jpg",
      position: "right" as const,
    },
    {
      date: "Step 5",
      title: "Reinforce Your Home",
      description: "Retrofit your home to meet safety standards and install flexible pipe fittings to reduce earthquake damage.",
      image: "/eq5.jpg",
      position: "left" as const,
    },
    {
      date: "Step 6",
      title: "Stay Informed with Alerts",
      description: "Sign up for local emergency alerts and notifications to receive timely information about earthquakes and aftershocks.",
      image: "/eq6.jpg",
      position: "right" as const,
    },
    {
      date: "Step 7",
      title: "Check Insurance Coverage",
      description: "Ensure your insurance policy includes earthquake coverage to protect your property from quake damage.",
      image: "/eq7.jpg",
      position: "left" as const,
    },
    {
      date: "Step 8",
      title: "Develop Communication Plans",
      description: "Establish communication strategies with an out-of-state contact and prepare for possible disruptions in local communications.",
      image: "/eq8.jpg",
      position: "right" as const,
    },
    {
      date: "Step 9",
      title: "Prepare Your Pets",
      description: "Include pet supplies in your emergency kit and ensure your pets have identification tags for easy identification and evacuation.",
      image: "/eq9.jpg",
      position: "left" as const,
    },
    {
      date: "Step 10",
      title: "Strengthen Community Networks",
      description: "Collaborate with neighbors to create a community response plan and support each other during emergencies.",
      image: "/eq10.jpg",
      position: "right" as const,
    },
];
  
  return (
    <div className="bg-gray-800 text-white p-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            image={item.image}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
};

export default EarthquakePreparedness;
