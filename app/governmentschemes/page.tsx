"use client";
import React, { useState, useEffect } from "react";

// Inline JSON data
const schemesData = {
  disasterSchemes: {
    earthquake: {
      "1": {
        name: "Pradhan Mantri Awas Yojana",
        description: "A housing scheme for the urban poor.",
        eligibility: "Low-income households in urban areas.",
        contact: "Ministry of Housing and Urban Affairs",
        applicationURL: "https://pmaymis.gov.in/",
      },
      "2": {
        name: "Disaster Response Fund",
        description:
          "A fund for providing immediate relief to victims of natural disasters.",
        eligibility: "Victims of natural disasters in India.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "3": {
        name: "Earthquake Relief Scheme",
        description:
          "A scheme for providing financial assistance to earthquake-affected areas.",
        eligibility:
          "State governments and local authorities in earthquake-affected areas.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "4": {
        name: "National Earthquake Risk Reduction and Management Centre",
        description: "A centre for reducing the risk of earthquakes in India.",
        eligibility:
          "Government agencies and organizations involved in earthquake risk reduction.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "5": {
        name: "Earthquake Insurance Scheme",
        description:
          "A scheme for providing insurance coverage to households and businesses against earthquake risks.",
        eligibility: "Households and businesses in earthquake-prone areas.",
        contact: "Insurance Regulatory and Development Authority of India",
        applicationURL: "https://irdai.gov.in/",
      },
      "6": {
        name: "Seismic Hazard Microzonation",
        description:
          "A project for identifying and mapping seismic hazards in India.",
        eligibility:
          "Government agencies and organizations involved in seismic hazard mapping.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
      "7": {
        name: "Earthquake Early Warning System",
        description:
          "A system for providing early warnings to communities in the event of an earthquake.",
        eligibility: "Communities in earthquake-prone areas.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
      "8": {
        name: "National Building Code of India",
        description: "A code for ensuring the safety of buildings in India.",
        eligibility:
          "Builders, architects, and engineers involved in construction projects.",
        contact: "Ministry of Housing and Urban Affairs",
        applicationURL: "https://mohua.gov.in/",
      },
      "9": {
        name: "Earthquake Resistant Construction",
        description:
          "A scheme for promoting earthquake-resistant construction practices in India.",
        eligibility:
          "Builders, architects, and engineers involved in construction projects.",
        contact: "Ministry of Housing and Urban Affairs",
        applicationURL: "https://mohua.gov.in/",
      },
      "10": {
        name: "Disaster Management Plan",
        description: "A plan for managing disasters in India.",
        eligibility:
          "Government agencies and organizations involved in disaster management.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "11": {
        name: "National Disaster Response Force",
        description: "A force for responding to disasters in India.",
        eligibility:
          "Government agencies and organizations involved in disaster response.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "12": {
        name: "Earthquake Risk Assessment",
        description:
          "A project for assessing the risk of earthquakes in India.",
        eligibility:
          "Government agencies and organizations involved in earthquake risk assessment.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
      "13": {
        name: "Seismic Design of Structures",
        description:
          "A scheme for promoting seismic design of structures in India.",
        eligibility:
          "Builders, architects, and engineers involved in construction projects.",
        contact: "Ministry of Housing and Urban Affairs",
        applicationURL: "https://mohua.gov.in/",
      },
      "14": {
        name: "Earthquake Education and Awareness",
        description:
          "A program for educating and raising awareness about earthquakes in India.",
        eligibility: "Schools, colleges, and universities in India.",
        contact: "Ministry of Human Resource Development",
        applicationURL: "https://mhrd.gov.in/",
      },
      "15": {
        name: "Earthquake Research and Development",
        description:
          "A program for promoting research and development in earthquake science and engineering.",
        eligibility:
          "Researchers and scientists involved in earthquake science and engineering.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
    },
    cyclone: {
      "1": {
        name: "National Cyclone Risk Mitigation Project",
        description:
          "A project for reducing the impact of cyclones in coastal areas.",
        eligibility: "Coastal communities in India.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
      "2": {
        name: "Cyclone Relief Scheme",
        description:
          "A scheme for providing financial assistance to cyclone-affected areas.",
        eligibility:
          "State governments and local authorities in cyclone-affected areas.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "3": {
        name: "Cyclone Early Warning System",
        description:
          "A system for providing early warnings to communities in the event of a cyclone.",
        eligibility: "Communities in cyclone-prone areas.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
      "4": {
        name: "Cyclone Shelter Programme",
        description:
          "A program for building cyclone shelters in coastal areas.",
        eligibility: "Coastal communities in India.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "5": {
        name: "Cyclone Insurance Scheme",
        description:
          "A scheme for providing insurance coverage to households and businesses against cyclone risks.",
        eligibility: "Households and businesses in cyclone-prone areas.",
        contact: "Insurance Regulatory and Development Authority of India",
        applicationURL: "https://irdai.gov.in/",
      },
      "6": {
        name: "Cyclone Risk Reduction Program",
        description:
          "Supports projects aimed at reducing cyclone risk and enhancing resilience.",
        eligibility: "State governments, local authorities, and NGOs.",
        contact: "National Disaster Management Authority",
        applicationURL: "https://ndma.gov.in/",
      },
      "7": {
        name: "Disaster Recovery Fund for Cyclones",
        description:
          "Provides financial support for recovery and rebuilding after cyclones.",
        eligibility: "State governments and affected communities.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "8": {
        name: "Coastal Protection and Restoration Program",
        description:
          "Funds initiatives for coastal protection and restoration to mitigate cyclone impact.",
        eligibility: "Coastal states and local authorities.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "9": {
        name: "Cyclone Preparedness and Response Plan",
        description:
          "Develops and implements plans for cyclone preparedness and response.",
        eligibility: "State governments and disaster management agencies.",
        contact: "National Disaster Management Authority",
        applicationURL: "https://ndma.gov.in/",
      },
      "10": {
        name: "Community Cyclone Resilience Program",
        description:
          "Supports community-based programs aimed at increasing resilience to cyclones.",
        eligibility: "Local communities and NGOs.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "11": {
        name: "Cyclone Early Warning System Upgradation",
        description:
          "Provides funding for upgrading cyclone early warning systems.",
        eligibility: "State governments and technical agencies.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
      "12": {
        name: "Infrastructure Strengthening for Cyclone-Prone Areas",
        description:
          "Supports the strengthening of infrastructure to withstand cyclones.",
        eligibility: "State governments and local authorities.",
        contact: "Ministry of Urban Development",
        applicationURL: "https://moud.gov.in/",
      },
      "13": {
        name: "Cyclone Victim Support Program",
        description:
          "Provides direct support to victims of cyclones including financial aid and relief materials.",
        eligibility: "Residents of cyclone-affected areas.",
        contact: "State Disaster Management Authority",
        applicationURL: "http://sdma.gov.in/",
      },
      "14": {
        name: "Cyclone Education and Awareness Campaign",
        description:
          "Funds educational and awareness campaigns about cyclones and their impacts.",
        eligibility: "Schools, universities, and NGOs.",
        contact: "Ministry of Education",
        applicationURL: "https://mhrd.gov.in/",
      },
      "15": {
        name: "Research on Cyclone Impacts and Mitigation",
        description:
          "Supports research on the impacts of cyclones and strategies for mitigation.",
        eligibility: "Research institutions and universities.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
    },
    floods: {
      "1": {
        name: "Flood Relief Fund",
        description:
          "Provides immediate financial relief to those affected by floods.",
        eligibility: "Flood-affected individuals and communities.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "2": {
        name: "National Flood Control Program",
        description:
          "A comprehensive program to control and manage flood risks across the country.",
        eligibility: "State governments and local authorities.",
        contact: "Ministry of Water Resources",
        applicationURL: "https://mowr.gov.in/",
      },
      "3": {
        name: "Flood Insurance Scheme",
        description:
          "Insurance coverage for households and businesses to protect against flood damages.",
        eligibility: "Households and businesses in flood-prone areas.",
        contact: "Insurance Regulatory and Development Authority of India",
        applicationURL: "https://irdai.gov.in/",
      },
      "4": {
        name: "Flood Recovery Assistance",
        description:
          "Financial assistance for rebuilding and recovery in flood-affected regions.",
        eligibility: "State governments and affected communities.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "5": {
        name: "River Basin Management Program",
        description:
          "Program to manage river basins to reduce flood risk and enhance water management.",
        eligibility: "State governments and river basin authorities.",
        contact: "Ministry of Water Resources",
        applicationURL: "https://mowr.gov.in/",
      },
      "6": {
        name: "Flood Warning and Forecasting System",
        description:
          "Develops systems for accurate flood forecasting and warnings.",
        eligibility: "Government agencies and technical organizations.",
        contact: "India Meteorological Department",
        applicationURL: "https://mausam.imd.gov.in/",
      },
      "7": {
        name: "Flood Prevention Infrastructure",
        description:
          "Supports the development of infrastructure to prevent flood damage.",
        eligibility: "State governments and local authorities.",
        contact: "Ministry of Water Resources",
        applicationURL: "https://mowr.gov.in/",
      },
      "8": {
        name: "Emergency Flood Response Program",
        description:
          "Provides emergency response support and resources during severe flooding.",
        eligibility: "State governments and disaster response agencies.",
        contact: "National Disaster Management Authority",
        applicationURL: "https://ndma.gov.in/",
      },
      "9": {
        name: "Community-Based Flood Risk Management",
        description:
          "Supports community initiatives to manage and mitigate flood risks.",
        eligibility: "Local communities and NGOs.",
        contact: "National Disaster Management Authority",
        applicationURL: "https://ndma.gov.in/",
      },
      "10": {
        name: "Flood Education and Training Program",
        description:
          "Funds educational programs and training for flood preparedness and response.",
        eligibility: "Schools, universities, and training institutions.",
        contact: "Ministry of Education",
        applicationURL: "https://mhrd.gov.in/",
      },
      "11": {
        name: "Flood Resilient Infrastructure Development",
        description:
          "Supports development projects for infrastructure that can withstand floods.",
        eligibility: "State governments and infrastructure developers.",
        contact: "Ministry of Urban Development",
        applicationURL: "https://moud.gov.in/",
      },
      "12": {
        name: "Flood Disaster Recovery Fund",
        description:
          "Provides funds for long-term recovery and rehabilitation after floods.",
        eligibility: "State governments and flood-affected communities.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "13": {
        name: "Flood Risk Mapping and Assessment",
        description:
          "Supports projects for mapping flood risks and assessing flood vulnerabilities.",
        eligibility: "Government agencies and research institutions.",
        contact: "Ministry of Water Resources",
        applicationURL: "https://mowr.gov.in/",
      },
      "14": {
        name: "Integrated Flood Management Project",
        description:
          "A project focusing on integrated approaches to flood management.",
        eligibility: "State governments and local authorities.",
        contact: "Ministry of Water Resources",
        applicationURL: "https://mowr.gov.in/",
      },
      "15": {
        name: "Flood Relief and Rehabilitation Support",
        description:
          "Provides support for immediate relief and long-term rehabilitation efforts.",
        eligibility: "State governments, NGOs, and affected individuals.",
        contact: "National Disaster Management Authority",
        applicationURL: "https://ndma.gov.in/",
      },
    },
    tsunami: {
      "1": {
        name: "Tsunami Relief Fund",
        description:
          "Provides immediate financial aid to communities affected by tsunamis.",
        eligibility: "Tsunami-affected communities.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "2": {
        name: "Tsunami Early Warning System",
        description:
          "A system for detecting and providing early warnings for tsunamis.",
        eligibility: "Coastal communities and disaster management agencies.",
        contact: "Indian National Centre for Ocean Information Services",
        applicationURL: "https://incois.gov.in/",
      },
      "3": {
        name: "Tsunami Damage Assessment Program",
        description:
          "Supports assessment and evaluation of damage caused by tsunamis.",
        eligibility: "Government agencies and research organizations.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
      "4": {
        name: "Tsunami Response and Recovery Program",
        description:
          "Provides support for immediate response and long-term recovery after tsunamis.",
        eligibility: "State governments and affected communities.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "5": {
        name: "Coastal Resilience Building Program",
        description:
          "Funds projects aimed at enhancing coastal resilience to tsunamis.",
        eligibility: "Coastal states and local authorities.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "6": {
        name: "Tsunami Disaster Preparedness Training",
        description:
          "Provides training for communities on how to prepare for and respond to tsunamis.",
        eligibility: "Local communities and disaster management teams.",
        contact: "National Disaster Management Authority",
        applicationURL: "https://ndma.gov.in/",
      },
      "7": {
        name: "Tsunami Insurance Scheme",
        description:
          "Insurance coverage for households and businesses against tsunami risks.",
        eligibility: "Households and businesses in tsunami-prone areas.",
        contact: "Insurance Regulatory and Development Authority of India",
        applicationURL: "https://irdai.gov.in/",
      },
      "8": {
        name: "Tsunami Risk Reduction and Management",
        description:
          "Supports initiatives aimed at reducing tsunami risk and managing impacts.",
        eligibility: "State governments and research institutions.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "9": {
        name: "Community Tsunami Education Program",
        description:
          "Funds educational programs to raise awareness about tsunamis.",
        eligibility: "Schools, universities, and NGOs.",
        contact: "Ministry of Education",
        applicationURL: "https://mhrd.gov.in/",
      },
      "10": {
        name: "Tsunami Vulnerability Mapping",
        description:
          "Supports projects for mapping vulnerabilities to tsunamis.",
        eligibility: "Government agencies and research organizations.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
      "11": {
        name: "Post-Tsunami Rehabilitation Support",
        description:
          "Provides support for rehabilitation efforts following a tsunami.",
        eligibility: "State governments, NGOs, and affected individuals.",
        contact: "National Disaster Management Authority",
        applicationURL: "https://ndma.gov.in/",
      },
      "12": {
        name: "Tsunami Research and Development",
        description:
          "Promotes research and development in tsunami science and response strategies.",
        eligibility: "Research institutions and scientists.",
        contact: "Ministry of Earth Sciences",
        applicationURL: "https://moes.gov.in/",
      },
      "13": {
        name: "Tsunami Impact Assessment Fund",
        description:
          "Funds assessments of the impacts of tsunamis on communities and infrastructure.",
        eligibility: "Government agencies and research institutions.",
        contact: "Ministry of Home Affairs",
        applicationURL: "https://home.gov.in/",
      },
      "14": {
        name: "Tsunami Evacuation Plan Development",
        description:
          "Supports the development and implementation of tsunami evacuation plans.",
        eligibility: "State governments and coastal communities.",
        contact: "National Disaster Management Authority",
        applicationURL: "https://ndma.gov.in/",
      },
      "15": {
        name: "Coastal Early Warning System Upgradation",
        description:
          "Funds the upgrade of coastal early warning systems for tsunamis.",
        eligibility: "Government agencies and technical organizations.",
        contact: "Indian National Centre for Ocean Information Services",
        applicationURL: "https://incois.gov.in/",
      },
    },
    "forest-fires": {
      "1": {
        name: "National Forest Fire Management Plan",
        description: "A comprehensive plan to manage and control forest fires.",
        eligibility: "State governments and forest departments.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "2": {
        name: "Forest Fire Prevention and Mitigation Program",
        description:
          "Supports projects aimed at preventing and mitigating forest fires.",
        eligibility: "State governments, NGOs, and research institutions.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "3": {
        name: "Forest Fire Response Fund",
        description:
          "Provides financial assistance for immediate response to forest fires.",
        eligibility: "State governments and forest departments.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "4": {
        name: "Forest Fire Monitoring and Detection System",
        description:
          "Develops and implements systems for monitoring and detecting forest fires.",
        eligibility: "Government agencies and technical organizations.",
        contact: "Forest Survey of India",
        applicationURL: "http://fsi.nic.in/",
      },
      "5": {
        name: "Wildfire Restoration and Recovery Program",
        description:
          "Supports restoration and recovery efforts following forest fires.",
        eligibility: "State governments and affected communities.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "6": {
        name: "Forest Fire Education and Awareness Campaign",
        description:
          "Funds educational campaigns to raise awareness about forest fire risks and prevention.",
        eligibility: "Schools, universities, and NGOs.",
        contact: "Ministry of Education",
        applicationURL: "https://mhrd.gov.in/",
      },
      "7": {
        name: "Forest Fire Research and Development",
        description:
          "Promotes research and development in forest fire management and control.",
        eligibility: "Research institutions and scientists.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "8": {
        name: "Community-Based Forest Fire Management",
        description:
          "Supports community-led initiatives for managing and preventing forest fires.",
        eligibility: "Local communities and NGOs.",
        contact: "Forest Survey of India",
        applicationURL: "http://fsi.nic.in/",
      },
      "9": {
        name: "Firefighting Equipment and Training Program",
        description:
          "Provides funding for firefighting equipment and training for forest fire management.",
        eligibility: "Forest departments and firefighting units.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "10": {
        name: "Forest Fire Risk Mapping",
        description:
          "Supports the mapping of areas at risk of forest fires for better management.",
        eligibility: "Government agencies and research organizations.",
        contact: "Forest Survey of India",
        applicationURL: "http://fsi.nic.in/",
      },
      "11": {
        name: "Forest Fire Preparedness and Response Plan",
        description:
          "Develops and implements plans for preparedness and response to forest fires.",
        eligibility: "State governments and forest departments.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "12": {
        name: "Forest Conservation and Fire Management Integration",
        description:
          "Integrates forest conservation efforts with fire management strategies.",
        eligibility: "State governments and conservation organizations.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "13": {
        name: "Forest Fire Impact Assessment Fund",
        description:
          "Provides funds for assessing the impact of forest fires on ecosystems and communities.",
        eligibility: "Government agencies and research institutions.",
        contact: "Forest Survey of India",
        applicationURL: "http://fsi.nic.in/",
      },
      "14": {
        name: "Forest Fire Detection and Prevention Technology",
        description:
          "Supports the development and deployment of advanced technologies for detecting and preventing forest fires.",
        eligibility: "Technical organizations and research institutions.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
      "15": {
        name: "Forest Fire Rehabilitation Support",
        description:
          "Provides support for rehabilitation and reforestation efforts following forest fires.",
        eligibility: "State governments and environmental organizations.",
        contact: "Ministry of Environment, Forest and Climate Change",
        applicationURL: "https://moef.gov.in/",
      },
    },
  },
};

interface Scheme {
  name: string;
  description: string;
  eligibility: string;
  contact: string;
  applicationURL: string;
}

const GovernmentSchemes: React.FC = () => {
  const [disasterType, setDisasterType] = useState<string>("");
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (disasterType) {
      const disasterSchemes =
        schemesData.disasterSchemes[
          disasterType as keyof typeof schemesData.disasterSchemes
        ];
      const schemeList: Scheme[] = Object.values(disasterSchemes) || [];
      setSchemes(schemeList);
      setModalVisible(true);
    }
  }, [disasterType]);

  const handleDisasterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDisasterType(event.target.value);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="flex flex-col ">
      {/* Main content */}
      <main className="flex-grow z-10 relative ">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-black text-center mb-4">
            Be Aware
          </h1>
          <h2 className="text-2xl text-black text-center mb-8">
            Select a disaster to know schemes about the disaster
          </h2>
          <div className="max-w-md mx-auto">
            <select
              value={disasterType}
              onChange={handleDisasterChange}
              className="w-full p-4 text-lg bg-black text-white border border-green-500 rounded-lg appearance-none focus:outline-none focus:border-green-700"
            >
              <option value="">Select a disaster </option>
              <option value="earthquake">Earthquake</option>
              <option value="cyclone">Cyclone</option>
              <option value="floods">Floods</option>
              <option value="tsunami">Tsunami</option>
              <option value="forest-fires">Forest Fires</option>
            </select>
          </div>
        </div>
      </main>

      {/* Modal */}
      {modalVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-3xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{`${
              disasterType.charAt(0).toUpperCase() + disasterType.slice(1)
            } Schemes`}</h2>
            <ul>
              {schemes.map((scheme, index) => (
                <li
                  key={index}
                  className="bg-gray-100 rounded-lg p-4 mb-4 shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{scheme.name}</h3>
                  <p className="mb-2">{scheme.description}</p>
                  <p className="mb-1">
                    <strong>Eligibility:</strong> {scheme.eligibility}
                  </p>
                  <p className="mb-1">
                    <strong>Contact:</strong> {scheme.contact}
                  </p>
                  <p>
                    <strong>Application URL:</strong>{" "}
                    <a
                      href={scheme.applicationURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {scheme.applicationURL}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GovernmentSchemes;
