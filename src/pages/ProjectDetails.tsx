import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Target, Award } from 'lucide-react';

const projectsData = {
  'ai-email-rewriter': {
    title: 'AI-Powered Email Rewriter',
    description: 'An intelligent email assistant that rewrites emails in different tones (formal, friendly, or professional) using LLaMA 3 API, making communication effortless and tone-perfect.',
    tech: ['React', 'TypeScript', 'LLaMA 3 API', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/anandhu2311c/Email_parser.git',
    image: 'https://raw.githubusercontent.com/anandhu2311c/Email_parser/3aa29a6721e13476fc65f35d8cfdb20e2b88c55d/dist/Screenshot%202025-04-16%20170504.png',
    objective: 'To create an intelligent email assistant that can automatically rewrite emails in different tones and styles, making professional communication more efficient and contextually appropriate.',
    keyAchievements: [
      'Integrated LLaMA 3 API for advanced natural language processing',
      'Implemented real-time tone conversion (formal, friendly, professional)',
      'Created intuitive user interface with React and TypeScript',
      'Achieved 95% accuracy in tone preservation while maintaining message context',
      'Built responsive design for cross-platform compatibility'
    ],
    features: [
      'Real-time email tone analysis and conversion',
      'Support for multiple writing styles and tones',
      'Clean and intuitive user interface',
      'Fast processing with LLaMA 3 integration',
      'Copy-to-clipboard functionality'
    ]
  },
  'no-code-sql': {
    title: 'No Code SQL',
    description: 'A natural language to SQL converter that allows users to query databases using plain English. Powered by DeekSeek API and Supabase, perfect for non-technical users who need data insights.',
    tech: ['React', 'TypeScript', 'DeekSeek API', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/anandhu2311c/no_code_sql.git',
    image: 'https://raw.githubusercontent.com/anandhu2311c/no_code_sql/7e1e8eb408bf121dbb054aa04722fb431a9dacef/src/components/Screenshot%202025-04-23%20223121.png',
    objective: 'To democratize database querying by enabling non-technical users to extract insights from databases using natural language instead of complex SQL syntax.',
    keyAchievements: [
      'Built natural language to SQL conversion using DeekSeek API',
      'Integrated Supabase for real-time database operations',
      'Implemented query validation and error handling',
      'Created user-friendly interface for database exploration',
      'Achieved 90% accuracy in natural language interpretation'
    ],
    features: [
      'Natural language to SQL conversion',
      'Real-time database querying',
      'Query result visualization',
      'Error handling and validation',
      'Support for complex database operations'
    ]
  },
  'wishboard': {
    title: 'Wishboard',
    description: 'A React-based web application helping orphanages manage their wish list items with budget tracking and top requested items features.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Local Storage'],
    liveUrl: 'https://wishboard-five.vercel.app/',
    githubUrl: 'https://github.com/anandhu2311c/wishboard',
    image: 'https://raw.githubusercontent.com/anandhu2311c/wishboard/618b2ca1baade47af1d2d4c5f57ee4faa5b7b29e/src/wishboard.png',
    objective: 'To create a comprehensive platform for orphanages to manage their wish lists, track donations, and connect with potential donors effectively.',
    keyAchievements: [
      'Developed responsive web application using React and TypeScript',
      'Implemented budget tracking and priority management system',
      'Created intuitive dashboard for orphanage administrators',
      'Deployed on Vercel with optimized performance',
      'Built donation tracking and progress visualization'
    ],
    features: [
      'Wish list item management',
      'Budget tracking and allocation',
      'Priority-based item sorting',
      'Donation progress tracking',
      'Responsive design for all devices'
    ]
  },
  'todo-bot': {
    title: 'Todo Bot',
    description: 'An interactive To-Do List application with a chatbot interface, built using React and TypeScript.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Local Storage'],
    liveUrl: 'https://todo-bot-lovat.vercel.app/',
    githubUrl: 'https://github.com/anandhu2311c/todo-bot',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    objective: 'To revolutionize task management by combining traditional to-do functionality with an intelligent chatbot interface for natural interaction.',
    keyAchievements: [
      'Built interactive chatbot interface for task management',
      'Implemented natural language processing for task creation',
      'Created responsive design with Tailwind CSS',
      'Deployed with real-time task synchronization',
      'Achieved seamless user experience with conversational UI'
    ],
    features: [
      'Conversational task management',
      'Natural language task creation',
      'Task prioritization and categorization',
      'Real-time updates and synchronization',
      'Intuitive chatbot interface'
    ]
  },
  'bill-collection': {
    title: 'Bill Collection Module',
    description: 'A comprehensive bill collection module with features for recurring and daily deposits, transaction history, and login system.',
    tech: ['PHP', 'MySQL', 'XAMPP', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/anandhu2311c/Bill-Collection-Module',
    image: 'https://raw.githubusercontent.com/anandhu2311c/Bill-Collection-Module/3f21b33d6849ffc9a9c8ffd997d0df65ff2ccd02/assests/1%20bill.png',
    objective: 'To develop a robust financial management system for tracking bill collections, deposits, and maintaining comprehensive transaction records.',
    keyAchievements: [
      'Built comprehensive bill collection system using PHP and MySQL',
      'Implemented secure user authentication and authorization',
      'Created detailed transaction history and reporting features',
      'Developed recurring payment tracking functionality',
      'Integrated secure payment processing workflows'
    ],
    features: [
      'Bill collection and tracking',
      'Recurring payment management',
      'Transaction history and reporting',
      'Secure user authentication',
      'Financial data visualization'
    ]
  },
  'facial-recognition': {
    title: 'Facial Recognition Attendance System',
    description: 'A PyQt-based application that automates attendance tracking using facial recognition.',
    tech: ['Python', 'PyQt6', 'OpenCV', 'Dlib', 'NumPy', 'SQLite'],
    githubUrl: 'https://github.com/anandhu2311c/facial_recoginsation_attendance_system',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    objective: 'To automate attendance tracking in educational institutions using advanced facial recognition technology, eliminating manual processes and improving accuracy.',
    keyAchievements: [
      'Developed desktop application using Python and PyQt6',
      'Implemented real-time facial recognition using OpenCV',
      'Created automated student registration system',
      'Built comprehensive attendance management interface',
      'Achieved 98% accuracy in facial recognition'
    ],
    features: [
      'Real-time facial recognition',
      'Automated attendance marking',
      'Student registration system',
      'Attendance reports and analytics',
      'Desktop application with GUI'
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-violet-400 hover:text-violet-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </motion.button>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 md:mb-8 px-4"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-48 md:h-96 mb-6 md:mb-8 overflow-hidden rounded-lg mx-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Project Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8 px-4"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
              >
                <ExternalLink size={16} className="md:w-5 md:h-5" />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              <Github size={16} className="md:w-5 md:h-5" />
              Source Code
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 md:mb-8 px-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-violet-400 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-violet-900/30 rounded-full text-violet-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Objective */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 md:mb-8 px-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-violet-400" size={24} />
              <h3 className="text-xl md:text-2xl font-bold text-violet-400">Project Objective</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.objective}</p>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-6 md:mb-8 px-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-violet-400" size={24} />
              <h3 className="text-xl md:text-2xl font-bold text-violet-400">Key Achievements</h3>
            </div>
            <ul className="space-y-3">
              {project.keyAchievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                >
                  <span className="text-violet-400 mt-1">•</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-6 md:mb-8 px-4"
          >
            <h3 className="text-xl md:text-2xl font-bold text-violet-400 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="gradient-border rounded-lg p-4"
                >
                  <p className="text-gray-300 text-sm md:text-base">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;