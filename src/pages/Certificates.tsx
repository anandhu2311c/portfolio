import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'SQL (Intermediate) Certificate',
    issuer: 'HackerRank',
    date: '2023',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/sql_hackerrank.png',
    description: 'Intermediate SQL concepts and practical query writing'
  },
  {
    title: 'NoSQL and DBaaS 101',
    issuer: 'Cognitive Class',
    date: '2023',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/nosql_cognitive.png',
    description: 'Basics of NoSQL databases and Database-as-a-Service concepts'
  },
  {
    title: 'Machine Learning-Dimensionality Reduction',
    issuer: 'Cognitive Class',
    date: '2024',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/machinelearning_cognitive.png',
    description: 'Understanding machine learning techniques for dimensionality reduction'
  },
  {
    title: 'No-code Machine Learning and Generative AI',
    issuer: 'AWS',
    date: '2024',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/no_codeml_aws.png',
    description: 'Applying no-code machine learning and AI tools on AWS platform'
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/networking_basics_cisco.png',
    description: 'Foundational concepts in computer networking'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/Introduction_to_cyber_cisco.png',
    description: 'Fundamentals of cybersecurity principles and practices'
  },
  {
    title: 'Automated Machine Learning for Beginners (Google & Apple)',
    issuer: 'Udemy',
    date: '2024',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/automated_machine_learning_udemy.jpg',
    description: 'Introduction to automated machine learning techniques and tools'
  },
  {
    title: 'Volunteer at International Conference on Contemporary Computing and Communication',
    issuer: 'IEEE',
    date: '2024',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/inc4_ieee.png',
    description: 'Volunteering at the International Conference on Contemporary Computing and Communication'
  },
  {
    title: 'Congress on Intelligent Systems',
    issuer: 'IEEE',
    date: '2024',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/cis_ieee.jpeg',
    description: 'Attendance at the Congress on Intelligent Systems event by IEEE'
  },
  {
    title: 'ANRF GenAI Workshop',
    issuer: 'Christ University',
    date: '2025',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/anrf_christ.jpeg',
    description: 'Workshop on generative AI technologies hosted by ANRF'
  },
  {
    title: 'Smart Earth Hackathon Participation',
    issuer: 'Nazarbayev University Kazakhstan',
    date: '2025',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/smartearth_hackathon.png',
    description: 'Participation in the Smart Earth Hackathon event'
  },
  {
    title: 'Digital Forensic Analyst',
    issuer: 'ARDC',
    date: '2025',
    image: 'https://github.com/anandhu2311c/portfolio/blob/199be9a78fb2b929be92ff0f684f247eeb3c30f7/images/forensic_ardc.png',
    description: 'Certification as a digital forensic analyst'
  }
];


const Certificates = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Award className="text-violet-400" size={24} className="md:w-8 md:h-8" />
              <h2 className="text-2xl md:text-4xl font-bold text-violet-400">Certificates & Achievements</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-base md:text-lg px-4"
            >
              Professional certifications and continuous learning achievements
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="gradient-border rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">{cert.date}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-violet-400 font-semibold mb-3 text-sm md:text-base">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Verified Certificate</span>
                    <ExternalLink 
                      size={16} 
                      className="text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8 md:mt-12 px-4"
          >
            <p className="text-gray-400 italic text-sm md:text-base">
              "Continuous learning is the key to staying relevant in the ever-evolving tech landscape."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;