import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
    title: 'EcoTracker',
    description: 'EcoTracker is a comprehensive carbon footprint tracking application that combines AI-powered analysis, social features, and gamification to help users monitor and reduce their environmental impact. It provides accurate EPA-based carbon calculations and personalized sustainability insights using advanced LLMs.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Llama 3'],
    githubUrl: 'https://github.com/anandhu2311c/carbon-tracker.git',
    image: 'https://github.com/anandhu2311c/portfolio/blob/517c1087bb017bbd52b2653c64eb50cc40441b61/images/Screenshot%202025-06-22%20211628.png?raw=true'
  },

  {

    title: 'AI-Powered Email Rewriter',
    description: 'An intelligent email assistant that rewrites emails in different tones (formal, friendly, or professional) using LLaMA 3 API, making communication effortless and tone-perfect.',
    tech: ['React', 'TypeScript', 'LLaMA 3 API'],
    githubUrl: 'https://github.com/anandhu2311c/Email_parser.git',
    image: 'https://raw.githubusercontent.com/anandhu2311c/Email_parser/3aa29a6721e13476fc65f35d8cfdb20e2b88c55d/dist/Screenshot%202025-04-16%20170504.png'
  },
  {

    title: 'No Code SQL',
    description: 'A natural language to SQL converter that allows users to query databases using plain English. Powered by DeekSeek API and Supabase, perfect for non-technical users who need data insights.',
    tech: ['React', 'TypeScript', 'DeekSeek API', 'Supabase'],
    githubUrl: 'https://github.com/anandhu2311c/no_code_sql.git',
    image: 'https://raw.githubusercontent.com/anandhu2311c/no_code_sql/7e1e8eb408bf121dbb054aa04722fb431a9dacef/src/components/Screenshot%202025-04-23%20223121.png'
  },
  {
    title: 'Bill Collection Module',
    description: 'A comprehensive bill collection module with features for recurring and daily deposits, transaction history, and login system.',
    tech: ['PHP', 'MySQL', 'XAMPP'],
    githubUrl: 'https://github.com/anandhu2311c/Bill-Collection-Module',
    image: 'https://raw.githubusercontent.com/anandhu2311c/Bill-Collection-Module/3f21b33d6849ffc9a9c8ffd997d0df65ff2ccd02/assests/1%20bill.png'
  },
  {
    title: 'Facial Recognition Attendance System',
    description: 'A PyQt-based application that automates attendance tracking using facial recognition.',
    tech: ['Python', 'PyQt6', 'OpenCV'],
    githubUrl: 'https://github.com/anandhu2311c/facial_recoginsation_attendance_system',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Wishboard',
    description: 'A React-based web application helping orphanages manage their wish list items with budget tracking and top requested items features.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://wishboard-five.vercel.app/',
    githubUrl: 'https://github.com/anandhu2311c/wishboard',
    image: 'https://raw.githubusercontent.com/anandhu2311c/wishboard/618b2ca1baade47af1d2d4c5f57ee4faa5b7b29e/src/wishboard.png'
  },
  {
    title: 'Todo Bot',
    description: 'An interactive To-Do List application with a chatbot interface, built using React and TypeScript.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://todo-bot-lovat.vercel.app/',
    githubUrl: 'https://github.com/anandhu2311c/todo-bot',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
  
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center neon-text"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="project-card"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-violet-900/30 rounded-full text-violet-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
                >
                  <Github size={20} />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
