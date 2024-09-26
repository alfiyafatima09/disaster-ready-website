import React, { useState } from "react";

const data = {
  weather: [
    {
      title: "IMD: Local weather report and forecast (City wise) & alerts",
      link: "https://city.imd.gov.in/citywx/localwx.php",
    },
    {
      title: "MAUSAM: Current weather",
      link: "https://mausam.imd.gov.in/",
    },
    {
      title: "NDMA: Disaster alerts, weather forecast and bulletins",
      link: "https://ndma.gov.in/",
    },
    {
      title: "Earth Warning System: real-time air quality forecast",
      link: "https://ews.tropmet.res.in/",
    },
    {
      title: "SACHET: Disaster alerts",
      link: "https://play.google.com/store/apps/details?id=com.cdotindia.capsachet",
    },
  ],
  flood: [
    {
      title: "BHUVAN: Flood vulnerability index",
      link: "https://bhuvan-app1.nrsc.gov.in/nfvas/#",
    },
    {
      title: "CWC: Flood forecast",
      link: "https://ffs.india-water.gov.in/#/",
    },
    {
      title: "Google Flood Hub: Flood forecast and river trends",
      link: "https://sites.research.google/floods/l/0/0/3",
    },
    {
      title:
        "FloodWatch India: dissemination of real-time flood situation and flood forecasts",
      link: "https://play.google.com/store/apps/details?id=in.gov.affcwc&hl=en_IN",
    },
  ],
  "forest fire": [
    {
      title: "BHUVAN: Real time forest fire mapping",
      link: "https://bhuvan-app1.nrsc.gov.in/disaster/disaster.php?id=fire",
    },
    {
      title: "FSI: Forest fire forecast",
      link: "https://fsiforestfire.gov.in/index.php",
    },
  ],
  tsunami: [
    {
      title: "INCOIS: Tsunami alerts",
      link: "https://tsunami.incois.gov.in/TEWS/",
    },
  ],
  cyclones: [
    {
      title: "MAUSAM: Districtwise heavy rain warnings",
      link: "https://mausam.imd.gov.in/responsive/districtWiseWarningGIS.php",
    },
    {
      title: "BHUVAN: Real time cyclone mapping",
      link: "https://bhuvan-app1.nrsc.gov.in/disaster/disaster.php?id=cyclone#",
    },
  ],
  landslides: [
    {
      title: "Bhuvan: Landslide hazard zones",
      link: "https://bhuvan-app1.nrsc.gov.in/disaster/disaster.php?id=landslide",
    },
  ],
  earthquake: [
    {
      title: "Seismo: Latest earthquakes alerts and reports",
      link: "https://riseq.seismo.gov.in/riseq/earthquake",
    },
    {
      title: "BhooKamp: Realtime earthquake information by NCS",
      link: "https://play.google.com/store/apps/details?id=gov.in.seismo.riseq",
    },
    ,
    {
      title: "Bhuvan: Earthquake damage assesment",
      link: "https://bhuvan-app1.nrsc.gov.in/disaster/disaster.php?id=quake",
    },
  ],
};

const DisasterBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("weather");

  // Get categories as an array
  const categories = Object.keys(data);

  // Handle category change
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-8">
      {/* Category buttons centered */}
      <div className="flex justify-center flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded focus:outline-none transition-transform transform-gpu hover:scale-105 ${
              selectedCategory === category ? "bg-stone-300 text-black font-bold" : "bg-black text-white"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 capitalize">
          {selectedCategory} Resources
        </h2>
      </div>

      {/* Display relevant content for the selected category */}
      <div className="bg-gray-100 p-4 rounded shadow-lg">
        <div className="md:grid md:grid-cols-2 md:gap-4">
          {data[selectedCategory as keyof typeof data]?.map((item) =>
            item ? (
              <div
                key={item.title}
                className="p-4 bg-white rounded shadow hover:bg-gray-50 transition-all transform hover:scale-105 cursor-pointer mb-2"
                onClick={() => window.open(item.link, "_blank")}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default DisasterBoard;
