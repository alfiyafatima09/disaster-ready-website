"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AlertTriangle, Droplet, Trees, Home } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const disasterCauses = [
  {
    image: "/cause1.png",
    title: "Urban Chaos",
    subtitle: "The Perils of Unplanned Development",
    description: `
      <p>Have you ever wondered why our cities seem to crumble at the first sign of rain?</p>
      
      <p>The answer lies in our haphazard urban planning. Picture this: a concrete jungle with barely a patch of soil in sight. Where does the rainwater go when there's nowhere to absorb it?</p>
      
      <p>In Mumbai, the infamous Mithi River tells a cautionary tale. Once a lifeline, now it's choked by slums and garbage. During heavy rains, the river revolts, spilling into homes and streets. Is this the price of rapid urbanization?</p>
      
      <p>Consider these startling facts:</p>
      <ul>
        <li>Hyderabad lost 3,245 hectares of water bodies between 1989 and 2001.</li>
        <li>Bengaluru's lakes have dwindled from 262 in the 1960s to a mere 10 today.</li>
      </ul>
      
      <p>As we pave paradise, are we inadvertently engineering our own disasters? The next time you see water accumulating on roads, remember: it's not just rain, it's the tears of a city crying out for better planning.</p>
    `,
    icon: <Home className="w-12 h-12 text-blue-600" />,
  },
  {
    image: "/cause2.png",
    title: "Nature's Cry",
    subtitle: "Our Abusive Relationship with the Environment",
    description: `
      <p>If Mother Nature could speak, what would she say about our cities?</p>

      <p>Imagine a relationship where one partner consistently takes while the other struggles to give. That's us and our environment. We've altered the very rhythms of nature, but at what cost?</p>

      <p>Climate change isn't just a buzzword—it's reshaping our world:</p>
      <ul>
        <li>Monsoons have become erratic, with months of rain falling in mere days.</li>
        <li>Glaciers are melting faster, swelling our rivers beyond their banks.</li>
      </ul>

      <p>But here's a thought-provoking question: Are these natural disasters truly 'natural' anymore?</p>

      <p>In Mumbai, a city that once prided itself on its greenery, 42% of tree cover has vanished in just 30 years. Each tree lost is a missed opportunity to absorb rainwater and stabilize the soil.</p>

      <p>When we cut down forests and pave over grass, we're not just changing the landscape—we're rewriting our future. Every concrete jungle we create is an invitation to future floods.</p>

      <p>So, the next time you see a tree being felled in your neighborhood, ask yourself: Are we building cities, or are we constructing our own disasters?</p>

      <p>What small step can you take today to heal this abusive relationship with nature?</p>
    `,
    icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
  },
  {
    image: "/cause3.png",
    title: "Liquid Assets",
    subtitle: "The Crisis of Shrinking Water Bodies",
    description: `
      <p>What if I told you that the key to preventing floods lies in preserving our water bodies?</p>

      <p>It sounds counterintuitive, doesn't it? But our lakes, ponds, and wetlands are nature's own flood control systems. As we lose them, we lose our first line of defense against inundation.</p>

      <p>Let's dive into some eye-opening facts:</p>
      <ul>
        <li>Bengaluru, once known as the city of lakes, has seen its lake count plummet from 262 in the 1960s to just 10 today.</li>
        <li>The few remaining water bodies, like Bellandur lake, are so polluted they occasionally catch fire. Yes, you read that right—water that catches fire!</li>
      </ul>

      <p>But here's the million-dollar question: Where do you think all that lost water goes during heavy rains?</p>

      <p>When we encroach upon water bodies, we're not just losing picturesque views—we're destroying nature's sponges. These 'liquid assets' absorb excess rainwater, recharge groundwater, and maintain the delicate balance of our urban ecosystems.</p>

      <p>As you walk around your city, try to spot the ghosts of former lakes and ponds. How many can you find hidden beneath the concrete?</p>

      <p>Remember, every water body we save today is a flood we prevent tomorrow. What role will you play in preserving these precious liquid assets?</p>
    `,
    icon: <Droplet className="w-12 h-12 text-blue-400" />,
  },
  {
    image: "/cause4.png",
    title: "Silent Guardians",
    subtitle: "The Vanishing Act of Mangroves and Wetlands",
    description: `
      <p>Imagine a natural army that protects our coasts, absorbs flood waters, and supports incredible biodiversity. Now imagine we're destroying it. Shocking, isn't it?</p>

      <p>Welcome to the world of mangroves and wetlands—nature's silent guardians that we're losing at an alarming rate.</p>

      <p>Consider these sobering statistics:</p>
      <ul>
        <li>In just 44 years, Mumbai has lost 71% of its wetlands.</li>
        <li>Across India, one-third of all wetlands have disappeared, sacrificed at the altar of agriculture and urban sprawl.</li>
      </ul>

      <p>But why should you care about some swampy areas?</p>

      <p>These ecosystems are the unsung heroes of flood management. They act like giant sponges, soaking up excess water and slowly releasing it, protecting our cities from the dual threats of floods and droughts.</p>

      <p>As sea levels rise and storms intensify due to climate change, can we afford to lose these natural buffers?</p>

      <p>The next time you see a 'swamp' being drained for a new development, remember: we're not just losing a wetland, we're destroying a sophisticated flood control system that took nature millennia to perfect.</p>

      <p>Here's a thought to ponder: If we can engineer skyscrapers and satellites, surely we can find a way to coexist with these crucial ecosystems?</p>

      <p>What will you do to become a voice for these silent guardians?</p>
    `,
    icon: <Trees className="w-12 h-12 text-green-500" />,
  },
];

const BackgroundAnimation = () => (
  <div className="fixed inset-0 -z-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EBF4FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#C3DAFE" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
      <circle cx="10%" cy="20%" r="5%" fill="#4299E1" opacity="0.1">
        <animate
          attributeName="cy"
          values="20%;25%;20%"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="90%" cy="80%" r="7%" fill="#2B6CB0" opacity="0.1">
        <animate
          attributeName="cy"
          values="80%;75%;80%"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

type Cause = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
};

const CauseCard = ({ cause, index }: { cause: Cause; index: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-all transform hover:shadow-xl mb-8 md:mb-16"
    >
      <div className="md:flex flex-col md:flex-row">
        <div className="md:w-full lg:w-2/5 relative overflow-hidden flex items-center justify-center">
          <Image
            src={cause.image}
            alt={cause.title}
            className="h-auto max-h-56 w-full object-cover transition-transform duration-500 hover:scale-110 "
            width={800}
            height={600}
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="p-6 md:w-full lg:w-3/5 space-y-4">
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {cause.icon}
            </motion.div>
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              {cause.title}
            </h2>
          </div>
          <h3 className="text-base md:text-lg font-semibold text-blue-600">
            {cause.subtitle}
          </h3>
          <div 
            className="text-sm md:text-base text-gray-600 description-content"
            dangerouslySetInnerHTML={{
              __html: isExpanded 
                ? cause.description
                : cause.description.split('</p>')[0] + '</p>'
            }}
          />

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function ScrollAnimatedDisasterCausesPage() {
  return (
    <>
      <style jsx global>{`
        .description-content p {
          margin-bottom: 1em;
        }
        .description-content ul {
          list-style-type: disc;
          padding-left: 2em;
          margin-bottom: 1em;
        }
        .description-content li {
          margin-bottom: 0.5em;
        }
      `}</style>
      <div className="min-h-screen py-8 md:py-12 px-4 md:px-6 lg:px-10 overflow-hidden relative">
        <BackgroundAnimation />
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-4 md:mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Unmasking Disaster&apos;s Root Causes
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-center text-blue-700 mb-8 md:mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Understanding the hidden triggers behind nature&rsquo;s fury
          </motion.p>

          <div className="space-y-8 md:space-y-16">
            {disasterCauses.map((cause, index) => (
              <CauseCard key={index} cause={cause} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}