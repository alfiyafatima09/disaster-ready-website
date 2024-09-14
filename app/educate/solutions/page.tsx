"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Droplet, Cloud, Trees, Globe, Shield, ChevronRight as ChevronRightIcon } from 'lucide-react';

const solutions = [
  {
    title: 'Rainwater Harvesting',
    subtitle: 'Capturing nature\'s gift',
    description: 'Rainwater harvesting is an eco-friendly technique that collects and stores rainwater for later use, reducing dependency on traditional water sources.',
    details: [
      'Collects rainwater from roofs and other surfaces',
      'Stores water in tanks or recharges groundwater',
      'Reduces water bills and conserves water resources',
      'Can be implemented at household and community levels'
    ],
    images: ['/fl1.jpg', '/fl1.jpg', '/fl1.jpg'],
    icon: <Droplet className="w-6 h-6" />,
    question: 'What percentage of a household\'s water needs can typically be met through rainwater harvesting?',
    options: ['10-20%', '30-50%', '60-80%', '90-100%'],
    correctAnswer: 1
  },
  {
    title: 'Sponge Cities',
    subtitle: 'Urban areas that absorb water',
    description: 'Sponge cities are designed to absorb, clean, and use rainwater effectively, mimicking natural water cycles in an urban setting.',
    details: [
      'Incorporates permeable surfaces and green spaces',
      'Reduces urban flooding and improves water quality',
      'Integrates blue-green infrastructure with gray systems',
      'Concept pioneered in China and gaining global traction'
    ],
    images: ['/fl1.jpg', '/fl1.jpg', '/fl1.jpg'],
    icon: <Cloud className="w-6 h-6" />,
    question: 'Which country pioneered the concept of "Sponge Cities"?',
    options: ['USA', 'Netherlands', 'China', 'Japan'],
    correctAnswer: 2
  },
  {
    title: 'Rain Gardens',
    subtitle: 'Beautiful solutions for water runoff',
    description: 'Rain gardens are specially designed gardens that capture and filter rainwater runoff from impervious urban areas.',
    details: [
      'Shallow depressions with native plants and porous soil',
      'Filters pollutants from rainwater naturally',
      'Reduces the burden on storm drainage systems',
      'Enhances biodiversity and aesthetics of urban spaces'
    ],
    images: ['/fl1.jpg', '/fl1.jpg', '/fl1.jpg'],
    icon: <Trees className="w-6 h-6" />,
    question: 'What is the primary purpose of a rain garden?',
    options: ['Decoration', 'Growing vegetables', 'Capturing and filtering runoff', 'Attracting wildlife'],
    correctAnswer: 2
  },
  {
    title: 'Netherlands Flood Management',
    subtitle: 'Living with water',
    description: 'The Netherlands has developed innovative approaches to live harmoniously with water, turning flood threats into opportunities.',
    details: [
      'Extensive system of dikes, dams, and storm surge barriers',
      'Room for the River project to give more space to waterways',
      'Floating houses and water-resilient urban planning',
      'Cutting-edge forecasting and early warning systems'
    ],
    images: ['/fl1.jpg', '/fl1.jpg', '/fl1.jpg'],
    icon: <Globe className="w-6 h-6" />,
    question: 'What is the name of the Netherlands\' project that gives more space to rivers?',
    options: ['Water World', 'Room for the River', 'Flood Freedom', 'Dutch Dikes'],
    correctAnswer: 1
  },
  {
    title: 'Odisha\'s Cyclone Management',
    subtitle: 'A model of preparedness',
    description: 'Odisha has transformed its approach to cyclone management, becoming a global example in disaster preparedness and response.',
    details: [
      'State-of-the-art Disaster Management Authority',
      'Network of over 800 cyclone shelters',
      'Early warning system with 122 coastal towers',
      'Rapid Action Force for immediate emergency deployment'
    ],
    images: ['/fl1.jpg', '/fl1.jpg', '/fl1.jpg'],
    icon: <Shield className="w-6 h-6" />,
    question: 'How many cyclone shelters does Odisha have in its network?',
    options: ['Over 200', 'Over 400', 'Over 600', 'Over 800'],
    correctAnswer: 3
  }
];

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 md:h-80">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Solution image ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const SolutionCard = ({ solution, onClick }: { solution: typeof solutions[0]; onClick: () => void }) => (
  <motion.div 
    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    layoutId={`card-${solution.title}`}
    onClick={onClick}
  >
    <ImageSlider images={solution.images} />
    <div className="absolute top-4 left-4 bg-blue-500 text-white rounded-full p-2">
      {solution.icon}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-blue-800 mb-2">{solution.title}</h3>
      <p className="text-sm text-blue-600">{solution.subtitle}</p>
    </div>
    <motion.div 
      className="absolute bottom-4 right-4 bg-blue-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      whileHover={{ scale: 1.1 }}
    >
      <ChevronRightIcon className="w-5 h-5" />
    </motion.div>
  </motion.div>
);

const QuizSection: React.FC<{ solution: typeof solutions[0]; onClose: () => void }> = ({ solution }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSubmit = () => {
    if (selectedAnswer !== null) {
      setIsCorrect(selectedAnswer === solution.correctAnswer);
    }
  };

  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-xl">
      <h4 className="text-xl font-bold text-blue-800 mb-4">Quick Quiz</h4>
      <p className="text-gray-700 mb-4">{solution.question}</p>
      <div className="space-y-2 mb-4">
        {solution.options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left p-3 rounded ${
              selectedAnswer === index
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-100'
            }`}
            onClick={() => setSelectedAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleAnswerSubmit}
      >
        Submit Answer
      </button>
      {isCorrect !== null && (
        <p className={`mt-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
          {isCorrect
            ? 'Correct! Well done!'
            : `Incorrect. The correct answer is: ${
                solution.options[solution.correctAnswer]
              }`}
        </p>
      )}
    </div>
  );
};

const ExpandedCard: React.FC<{ solution: typeof solutions[0]; onClose: () => void }> = ({ solution, onClose }) => (
  <motion.div 
    className="fixed inset-0 bg-blue-900 bg-opacity-90 flex items-center justify-center z-50 p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div 
      className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      layoutId={`card-${solution.title}`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
            {solution.icon}
          </div>
          <div>
            <motion.h3 className="text-3xl font-bold text-blue-800 mb-1">{solution.title}</motion.h3>
            <motion.h4 className="text-xl font-semibold text-blue-600">{solution.subtitle}</motion.h4>
          </div>
        </div>
        <motion.button 
          className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-8 h-8" />
        </motion.button>
      </div>
      <ImageSlider images={solution.images} />
      <motion.p className="text-gray-600 text-lg mb-6 leading-relaxed mt-6">{solution.description}</motion.p>
      <motion.ul className="space-y-4 mb-6">
        {solution.details.map((detail, index) => (
          <motion.li key={index} className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-gray-700">{detail}</span>
          </motion.li>
        ))}
      </motion.ul>
      <QuizSection solution={solution} onClose={onClose} />
    </motion.div>
  </motion.div>
);

const Page = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4 md:p-8 lg:p-16">
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 text-center mb-4 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Innovative Disaster <br /> Management Solutions
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl lg:text-2xl text-blue-800 text-center mb-8 md:mb-16 font-light max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Discover cutting-edge approaches that are revolutionizing how we prepare for, 
        respond to, and mitigate the impact of natural disasters.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {solutions.map((solution) => (
          <SolutionCard 
            key={solution.title} 
            solution={solution} 
            onClick={() => setSelectedSolution(solution.title)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedSolution && (
          (() => {
            const solution = solutions.find(s => s.title === selectedSolution);
            if (!solution) return null;
            return (
              <ExpandedCard 
                solution={solution} 
                onClose={() => setSelectedSolution(null)} 
              />
            );
          })()
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;