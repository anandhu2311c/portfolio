import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 'ecotracker',
    title: 'EcoTracker - AI-Powered Carbon Footprint Monitor',
    description: 'A comprehensive carbon footprint tracking application that combines AI-powered analysis, social features, and gamification to help users monitor and reduce their environmental impact.',
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Supabase', 'AI/LLM'],
    liveUrl: 'https://carbon-tracker-delta.vercel.app/',
    githubUrl: 'https://github.com/anandhu2311c/carbon-tracker.git',
    image: 'https://raw.githubusercontent.com/anandhu2311c/portfolio/10778433da13e599f8c11c35b709bd6c54e86152/images/Screenshot%202025-06-22%20211628.png',
    objective: 'To create a comprehensive platform that combines AI-powered analysis, social features, and gamification to help users monitor and reduce their environmental impact through accurate EPA-based carbon calculations.',
    keyAchievements: [
      'Built comprehensive carbon tracking with AI-powered activity logging',
      'Integrated multiple LLM models (Llama 3.3, Gemma2) for personalized insights',
      'Implemented real-time dashboard with EPA-based carbon calculations',
      'Created social challenges and gamification features for user engagement'
    ]
  },
  {
    id: 'rag-langchain',
    title: 'RAG with LangChain and PDF Support',
    description: 'A Retrieval-Augmented Generation system using LangChain framework that leverages fast LLM inference and Google Generative AI for embeddings, allowing queries based on PDF content.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Google AI', 'PDF Processing'],
    githubUrl: 'https://github.com/anandhu2311c/Rag-and-lanngchain.git',
    image: 'https://raw.githubusercontent.com/anandhu2311c/portfolio/652ad1e448c33aab40c1f76e5bd198cb04df53cd/images/rag.jpg',
    objective: 'To implement a sophisticated RAG system that enables intelligent document querying through PDF ingestion, vector embeddings, and LLM-powered question answering.',
    keyAchievements: [
      'Implemented PDF document ingestion and intelligent text chunking',
      'Built vector database with ChromaDB for semantic search capabilities',
      'Integrated Google Generative AI embeddings for high-quality document understanding',
      'Created interactive Q&A system with LLM-powered responses'
    ]
  },
  {
    id: 'chest-cancer-classification',
    title: 'End-to-End Chest Cancer Classification',
    description: 'A complete MLOps-enabled Deep Learning project that classifies chest cancer images using VGG16 model with integrated data versioning, experiment tracking, and CI/CD deployment.',
    tech: ['Python', 'TensorFlow', 'MLflow', 'DVC', 'AWS', 'Docker'],
    githubUrl: 'https://github.com/anandhu2311c/Chest-Cancer.git',
    image: 'https://raw.githubusercontent.com/anandhu2311c/portfolio/652ad1e448c33aab40c1f76e5bd198cb04df53cd/images/lung.jpg',
    objective: 'To develop a complete MLOps pipeline for medical image classification using deep learning, incorporating industry best practices for model versioning, experiment tracking, and automated deployment.',
    keyAchievements: [
      'Built end-to-end MLOps pipeline with DVC for data versioning',
      'Implemented VGG16-based transfer learning for medical image classification',
      'Integrated MLflow for comprehensive experiment tracking and model registry',
      'Deployed using Docker, AWS EC2, and ECR with automated CI/CD'
    ]
  },
  {
    id: 'fashion-recommendation',
    title: 'AI-Powered Fashion Recommendation System',
    description: 'An AI-powered fashion recommendation and popularity prediction system that uses deep learning to understand product images and generate similar product recommendations.',
    tech: ['Python', 'TensorFlow', 'YOLOv8', 'Streamlit', 'scikit-learn'],
    githubUrl: 'https://github.com/anandhu2311c/fashion_recom.git',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    objective: 'To create an intelligent fashion recommendation system that analyzes product images using deep learning to provide personalized recommendations and predict product popularity trends.',
    keyAchievements: [
      'Developed CNN-based image encoder for fashion product feature extraction',
      'Implemented similarity-based recommendation using cosine similarity',
      'Built popularity prediction model using ratings and review data',
      'Created web scraping pipeline for major e-commerce platforms'
    ]
  },
  {
    id: 'nifty500-analysis',
    title: 'NIFTY 500 Advanced Stock Analysis & ML Platform',
    description: 'A comprehensive learning platform for analyzing and predicting NIFTY 500 stock performance using 15+ years of historical data with modern MLOps practices.',
    tech: ['Python', 'MLflow', 'DVC', 'AWS', 'Machine Learning'],
    githubUrl: 'https://github.com/anandhu2311c/nifty500_perdiction_pipeline.git',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    objective: 'To develop a sophisticated stock analysis and prediction platform that leverages machine learning algorithms and MLOps practices to analyze NIFTY 500 stock performance patterns.',
    keyAchievements: [
      'Built comprehensive stock analysis platform with 15+ years of historical data',
      'Implemented advanced ML models for stock performance prediction',
      'Integrated MLOps practices with MLflow and DVC for model management',
      'Deployed on AWS cloud infrastructure for scalable performance'
    ]
  },
  {
    id: 'no-code-sql',
    title: 'No Code SQL',
    description: 'A natural language to SQL converter that allows users to query databases using plain English. Powered by DeekSeek API and Supabase, perfect for non-technical users who need data insights.',
    tech: ['React', 'TypeScript', 'DeekSeek API', 'Supabase'],
    githubUrl: 'https://github.com/anandhu2311c/no_code_sql.git',
    image: 'https://raw.githubusercontent.com/anandhu2311c/no_code_sql/7e1e8eb408bf121dbb054aa04722fb431a9dacef/src/components/Screenshot%202025-04-23%20223121.png',
    objective: 'To democratize database querying by enabling non-technical users to extract insights from databases using natural language instead of complex SQL syntax.',
    keyAchievements: [
      'Built natural language to SQL conversion using DeekSeek API',
      'Integrated Supabase for real-time database operations',
      'Implemented query validation and error handling',
      'Created user-friendly interface for database exploration'
    ]
  },
   {
    id: 'bill-collection',
    title: 'Bill Collection Module',
    description: 'A comprehensive bill collection module with features for recurring and daily deposits, transaction history, and login system.',
    tech: ['PHP', 'MySQL', 'XAMPP'],
    githubUrl: 'https://github.com/anandhu2311c/Bill-Collection-Module',
    image: 'https://raw.githubusercontent.com/anandhu2311c/Bill-Collection-Module/3f21b33d6849ffc9a9c8ffd997d0df65ff2ccd02/assests/1%20bill.png',
    objective: 'To develop a robust financial management system for tracking bill collections, deposits, and maintaining comprehensive transaction records.',
    keyAchievements: [
      'Built comprehensive bill collection system using PHP and MySQL',
      'Implemented secure user authentication and authorization',
      'Created detailed transaction history and reporting features',
      'Developed recurring payment tracking functionality'
    ]
  },
  {
    id: 'facial-recognition',
    title: 'Facial Recognition Attendance System',
    description: 'A PyQt-based application that automates attendance tracking using facial recognition.',
    tech: ['Python', 'PyQt6', 'OpenCV'],
    githubUrl: 'https://github.com/anandhu2311c/facial_recoginsation_attendance_system',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    objective: 'To automate attendance tracking in educational institutions using advanced facial recognition technology, eliminating manual processes and improving accuracy.',
    keyAchievements: [
      'Developed desktop application using Python and PyQt6',
      'Implemented real-time facial recognition using OpenCV',
      'Created automated student registration system',
      'Built comprehensive attendance management interface'
    ]
  },
  {
  id: 'storify',
  title: 'Storify – AI-Powered Dream Journal',
  description: 'A voice-powered dream journal app that captures, transforms, and stores dreams creatively. Uses AI to transcribe voice recordings and generate beautifully written stories in various styles.',
  tech: ['React', 'TypeScript', 'FastAPI', 'OpenAI', 'Whisper AI'],
  githubUrl: 'https://github.com/anandhu2311c/storify_.git',
  image: 'https://raw.githubusercontent.com/anandhu2311c/storify_/5f46e2e09d8cbe8b5a8d0126e5f4c40c2ba1c585/images/1.png',
  objective: 'To create an innovative voice-powered dream journal that transforms spoken dream fragments into beautifully crafted stories using AI transcription and narrative generation.',
  keyAchievements: [
    'Built voice recording interface with real-time audio capture',
    'Integrated Whisper AI for accurate speech-to-text transcription',
    'Implemented OpenAI-powered story generation with multiple writing styles',
    'Created emotion and symbol extraction for dream analysis',
    'Developed dark mode interface optimized for nighttime use'
  ]
  },
    {
    id: 'ai-email-rewriter',
    title: 'AI-Powered Email Rewriter',
    description: 'An intelligent email assistant that rewrites emails in different tones (formal, friendly, or professional) using LLaMA 3 API, making communication effortless and tone-perfect.',
    tech: ['React', 'TypeScript', 'LLaMA 3 API'],
    githubUrl: 'https://github.com/anandhu2311c/Email_parser.git',
    image: 'https://raw.githubusercontent.com/anandhu2311c/Email_parser/3aa29a6721e13476fc65f35d8cfdb20e2b88c55d/dist/Screenshot%202025-04-16%20170504.png',
    objective: 'To create an intelligent email assistant that can automatically rewrite emails in different tones and styles, making professional communication more efficient and contextually appropriate.',
    keyAchievements: [
      'Integrated LLaMA 3 API for advanced natural language processing',
      'Implemented real-time tone conversion (formal, friendly, professional)',
      'Created intuitive user interface with React and TypeScript',
      'Achieved 95% accuracy in tone preservation while maintaining message context'
    ]
  },

  {
    id: 'wishboard',
    title: 'Wishboard',
    description: 'A React-based web application helping orphanages manage their wish list items with budget tracking and top requested items features.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://wishboard-five.vercel.app/',
    githubUrl: 'https://github.com/anandhu2311c/wishboard',
    image: 'https://raw.githubusercontent.com/anandhu2311c/wishboard/618b2ca1baade47af1d2d4c5f57ee4faa5b7b29e/src/wishboard.png',
    objective: 'To create a comprehensive platform for orphanages to manage their wish lists, track donations, and connect with potential donors effectively.',
    keyAchievements: [
      'Developed responsive web application using React and TypeScript',
      'Implemented budget tracking and priority management system',
      'Created intuitive dashboard for orphanage administrators',
      'Deployed on Vercel with optimized performance'
    ]
  },
  {
    id: 'todo-bot',
    title: 'Todo Bot',
    description: 'An interactive To-Do List application with a chatbot interface, built using React and TypeScript.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://todo-bot-lovat.vercel.app/',
    githubUrl: 'https://github.com/anandhu2311c/todo-bot',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    objective: 'To revolutionize task management by combining traditional to-do functionality with an intelligent chatbot interface for natural interaction.',
    keyAchievements: [
      'Built interactive chatbot interface for task management',
      'Implemented natural language processing for task creation',
      'Created responsive design with Tailwind CSS',
      'Deployed with real-time task synchronization'
    ]
  }
];


const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center neon-text px-4"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="project-card cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative h-40 md:h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
              
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
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 text-violet-400 hover:text-violet-300 text-sm md:text-base"
                  >
                    <ExternalLink size={16} className="md:w-5 md:h-5" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 text-violet-400 hover:text-violet-300 text-sm md:text-base"
                >
                  <Github size={16} className="md:w-5 md:h-5" />
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