import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Mail } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'hover:text-yellow-400' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: 'hover:text-blue-400' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'hover:text-red-400' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'hover:text-yellow-300' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'LangChain', icon: 'https://python.langchain.com/img/brand/wordmark.png', color: 'hover:text-green-400' },
      { name: 'LLMs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'hover:text-orange-400' },
      { name: 'RAG', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'hover:text-blue-300' },
      { name: 'NLP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'hover:text-purple-400' }
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'hover:text-cyan-400' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'hover:text-green-500' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'hover:text-blue-400' }
    ]
  },
  {
    category: 'Database & Backend',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'hover:text-blue-500' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'hover:text-blue-600' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: 'hover:text-green-400' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: 'hover:text-purple-500' }
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'hover:text-orange-500' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'hover:text-gray-400' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: 'hover:text-yellow-500' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: 'hover:text-blue-500' },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', color: 'hover:text-green-500' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'hover:text-blue-400' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: 'hover:text-orange-400' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', color: 'hover:text-green-400' }
    ]
  }
];

const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'Agio Stocks And Shares Private LTD',
    duration: 'April 2025 - May 2025',
    location: 'Thrissur, Kerala',
    description: [
      'Developed a Full Stack Web Platform for Nifty 500 Stock Analysis, integrated Machine Learning to provide users with comprehensive insights.',
      'Built with Python and React, the platform features dynamic data visualization, enables fundamental and technical analysis of Nifty 500 stocks, and leverages predictive models for enhanced decision-making.'
    ]
  },
  {
    title: 'Student Intern',
    company: 'Christ University',
    duration: 'December 2024 - January 2025',
    location: 'Bangalore',
    description: [
      'Programmed an automated attendance system using Python, tkinter and computer vision techniques.',
      'This system streamlines student registration by capturing multiple facial images with OpenCV.',
      'It automatically marks attendance in real-time via webcam feed, and includes a dedicated interface for viewing and management.'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'Dinesh Information Technology Systems',
    duration: 'April 2024 - May 2024',
    location: 'Kannur',
    description: [
      'Built a comprehensive bill collection module using PHP and SQL to efficiently manage financial data.',
      'This system features robust capabilities for tracking recurring and daily deposits, maintaining a detailed transaction history, and incorporates a secure login system, all designed to provide a seamless user experience.'
    ]
  }
];

const TextTrail = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <motion.div className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.3,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-[80vh] text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 md:mb-8"
          >
            <img
              src="https://raw.githubusercontent.com/anandhu2311c/facial_recoginsation_attendance_system/e3e9e16a457095a778d93eb678e594c20ed8d67a/assets/nand.JPG"
              alt="Anandhu Biju"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <TextTrail 
            text="Anandhu Biju"
            className="text-3xl md:text-5xl font-bold mb-4 text-violet-400"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 text-center px-4"
          >
            Software Developer | React & TypeScript Expert | Computer Vision Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 md:gap-6"
          >
            <a
              href="https://github.com/anandhu2311c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} className="md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anandhu-biju-92b897202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} className="md:w-6 md:h-6" />
            </a>
            <a
              href="mailto:anandhubiju788@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} className="md:w-6 md:h-6" />
            </a>
            <a
              href="https://drive.google.com/file/d/124VuzNMLdtzStLHFIEaFS9mLQK5_V4BA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code2 size={20} className="md:w-6 md:h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-black/30"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-violet-400 mb-6">About Me</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-4">
                I'm a passionate software developer with expertise in full-stack web development, computer vision, 
                and AI-powered applications. My journey in technology has led me to work with cutting-edge technologies 
                like React, TypeScript, Python, and machine learning APIs. I specialize in creating intelligent solutions 
                that bridge the gap between complex technology and user-friendly interfaces. From building AI-powered email 
                assistants to developing stock analysis platforms with machine learning integration, I'm driven by the 
                challenge of turning innovative ideas into practical, impactful applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-violet-400 mb-4">Tech Stack</h2>
              <div className="space-y-8">
                {skillsData.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    className="mb-8"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4">{category.category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 px-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          className="flex flex-col items-center gap-2 group"
                        >
                          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gray-800/50 p-2 md:p-3 transition-transform transform group-hover:scale-110 ${skill.color}`}>
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-gray-400 group-hover:text-white transition-colors text-sm text-center">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold text-violet-400 mb-8 md:mb-12 text-center"
            >
              Experience
            </motion.h2>
            
            <div className="space-y-6 md:space-y-8 px-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative gradient-border rounded-lg p-4 md:p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-violet-400 font-semibold text-sm md:text-base">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-gray-300 flex items-start">
                        <span className="text-violet-400 mr-2">•</span>
                        <span className="text-sm md:text-base">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;