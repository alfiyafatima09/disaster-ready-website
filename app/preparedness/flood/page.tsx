import React from "react";
import TimelineItem from "@/components/TimelineItem";

const FloodPreparedness: React.FC = () => {
  const items = [
    {
      date: "Step 1",
      title: "Elevate Utilities",
      description: "Raise electrical panels, water heaters, and major appliances to higher levels in your home. This minimizes the risk of damage and ensures these critical systems remain operational.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 2",
      title: "Install Check Valves",
      description: "Fit check valves in sewer lines to prevent floodwater from backing up into your home. This helps to keep wastewater out and reduces the risk of contamination.",
      image: "/preparedness.jpg",
      position: "right" as const,
    },
    {
      date: "Step 3",
      title: "Seal Basement Walls",
      description: "Apply waterproofing compounds to basement walls and floors to prevent water seepage. This protects your lower levels from moisture damage and potential flooding.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 4",
      title: "Assemble an Emergency Kit",
      description: "Prepare a kit with at least a three-day supply of non-perishable food and water, a first aid kit, essential medications, a flashlight with extra batteries, and personal hygiene items.",
      image: "/preparedness.jpg",
      position: "right" as const,
    },
    {
      date: "Step 5",
      title: "Store Important Documents",
      description: "Place copies of important documents such as IDs, insurance policies, and medical records in a waterproof container. This ensures that critical information remains safe and accessible.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 6",
      title: "Create an Evacuation Plan",
      description: "Develop and rehearse a plan for evacuating your home. Identify multiple routes to higher ground and make sure everyone in your household knows the plan.",
      image: "/preparedness.jpg",
      position: "right" as const,
    },
    {
      date: "Step 7",
      title: "Compile Emergency Contacts",
      description: "Maintain a list of emergency contacts, including family members, local emergency services, and nearby shelters. Ensure everyone in your household has this information readily available.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 8",
      title: "Secure Your Home",
      description: "Move outdoor furniture and other potential debris inside or secure them to prevent them from becoming projectiles. Move essential belongings to upper floors to avoid water damage.",
      image: "/preparedness.jpg",
      position: "right" as const,
    },
    {
      date: "Step 9",
      title: "Turn Off Utilities",
      description: "If advised by authorities, disconnect electrical appliances and turn off gas and water supplies to prevent hazards. This helps to avoid electrical short circuits and gas leaks.",
      image: "/preparedness.jpg",
      position: "left" as const,
    },
    {
      date: "Step 10",
      title: "Monitor Weather Alerts",
      description: "Stay informed by regularly checking weather updates and flood warnings from reliable sources such as local news and weather apps. This keeps you aware of any changes and instructions for your area.",
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

export default FloodPreparedness;
