import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import datacloud from './../assets/cert/dtcloud.png';
import dataen from './../assets/cert/dtdata copy.png'
import ai from './../assets/cert/actai.jpg'

type CertificateItem = {
  title: string;
  issuer?: string;
  organization?: string;
  date: string;
  description: string;
  image: string;
  type: string;
};

const CertificatesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates: CertificateItem[] = [
    {
      title: "Datacamp Cloud พื้นฐาน",
      issuer: "DataCamp",
      date: "เมษายน 26, 2025",
      description: "This course covers fundamental concepts of cloud computing and the core services of various cloud platforms.",
      image: datacloud,
      type: "Certificate"
    },
    {
      title: "Datacamp Data Engineer พื้นฐาน",
      issuer: "DataCamp",
      date: "เมษายน 26, 2025",
      description: "This course covers fundamental concepts of Data Engineer Fundementals.",
      image: dataen,
      type: "Certificate"
    },
    {
      title: "Ai For thai Workshop",
      organization: "Ai For Thai",
      date: "กุมภาพันธ์ 29,2024",
      description: "This activity includes a workshop on NLP (Natural Language Processing",
      image: ai,
      type: "Activity"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const currentItem = certificates[currentIndex];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Certificate':
        return 'bg-blue-100 text-blue-800';
      case 'Activity':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Certificates & Activities</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 transition-colors duration-300 transform -translate-x-1/2"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Certificate Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl w-full max-w-3xl"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="flex-shrink-0 w-full md:w-1/2 relative bg-white p-8 flex items-center justify-center">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="max-h-full max-w-full object-contain rounded-xl"
                  />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(currentItem.type)}`}
                  >
                    {currentItem.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={14} className="mr-2" />
                    <span>{currentItem.date}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {currentItem.title}
                  </h3>

                  <p className="mt-1 text-base font-medium text-gray-600">
                    Organization : {currentItem.issuer ?? currentItem.organization ?? ""}
                  </p>

                  <p className="mt-4 text-base text-gray-500">
                    Description : <br/>{currentItem.description}
                  </p>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 transition-colors duration-300 transform translate-x-1/2"
            aria-label="Next certificate"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificatesCarousel;