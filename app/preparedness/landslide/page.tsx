import React from "react";
import TimelineItem from "@/components/TimelineItem";

const LandslidePreparedness: React.FC = () => {
  const items = [
    {
      date: "Step 1",
      title: "Identify Landslide-Prone Areas",
      description: "Assess your property for risks such as steep slopes and unstable ground. Avoid building or living in these areas to reduce risk.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 2",
      title: "Create an Emergency Plan and Kit",
      description: "Develop a family emergency plan with evacuation routes and a meeting point. Assemble a kit with water, non-perishable food, a flashlight, batteries, first aid supplies, and essential medications.",
      image: "/preparedness.jpg",
      position: "right" as const,
    },
    {
      date: "Step 3",
      title: "Install Early Warning Systems",
      description: "Set up landslide detection systems if available and stay informed through local alert systems for timely warnings.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 4",
      title: "Reinforce Your Home",
      description: "Strengthen your home’s foundation and consider adding retaining walls or barriers to mitigate landslide risks.",
      image: "/preparedness.jpg",
      position: "right" as const,
    },
    {
      date: "Step 5",
      title: "Stay Informed with Alerts",
      description: "Sign up for local weather and landslide alerts to receive updates on potential risks and emergency information.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 6",
      title: "Check Insurance Coverage",
      description: "Ensure your insurance policy includes coverage for landslide damage to protect your property.",
      image: "/preparedness.jpg",
      position: "right" as const,
    },
    {
      date: "Step 7",
      title: "Develop Communication Plans",
      description: "Establish communication strategies with an out-of-state contact and prepare for potential disruptions in local communications.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 8",
      title: "Prepare Your Pets",
      description: "Include pet supplies in your emergency kit and ensure your pets have ID tags for identification and easy evacuation.",
      image: "/preparedness.jpg",
      position: "right" as const,
    },
    {
      date: "Step 9",
      title: "Secure Your Property",
      description: "Implement measures to stabilize slopes around your property and prevent erosion, reducing the risk of landslides.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 10",
      title: "Strengthen Community Networks",
      description: "Collaborate with neighbors to create a community response plan and provide support to each other during emergencies.",
      image: "/preparedness.jpg",
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

export default LandslidePreparedness;
