import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Mail } from 'lucide-react';

const skillsData = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'hover:text-yellow-400'
  },
  {
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    color: 'hover:text-blue-400'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'hover:text-yellow-300'
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: 'hover:text-blue-500'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'hover:text-cyan-400'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Vite',
    icon: 'https://www.svgrepo.com/show/374167/vite.svg',
    color: 'hover:text-purple-400'
  },
  {
    name: 'OpenCV',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    color: 'hover:text-green-500'
  }
];

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
            className="w-48 h-48 rounded-full overflow-hidden mb-8"
          >
            <img
              src="https://raw.githubusercontent.com/anandhu2311c/facial_recoginsation_attendance_system/e3e9e16a457095a778d93eb678e594c20ed8d67a/assets/nand.JPG"
              alt="Anandhu Biju"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-bold mb-4 text-violet-400"
          >
            Anandhu Biju
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-400 mb-8"
          >
            Software Developer | React & TypeScript Expert | Computer Vision Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/anandhu2311c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anandhu-biju-92b897202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:anandhubiju788@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://drive.google.com/file/d/124VuzNMLdtzStLHFIEaFS9mLQK5_V4BA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code2 size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

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
              <h2 className="text-3xl font-bold text-violet-400 mb-4">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gray-800/50 p-3 transition-transform transform group-hover:scale-110 ${skill.color}`}>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-violet-400 mb-4">Why Hire Me?</h2>
              <p className="text-gray-400 text-lg">
                Because I write code that's cleaner than my room! 🧹
                <br />
                And trust me, my debugging skills are so good, even my coffee maker started working properly! ☕
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
              <div className="relative gradient-border rounded-lg p-8 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-violet-400">Creative Problem Solver</h3>
                    <p className="text-gray-400">Turning complex challenges into elegant solutions with a dash of innovation.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-violet-400">Fast Learner</h3>
                    <p className="text-gray-400">Adapting quickly to new technologies and methodologies.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <p className="text-gray-400 text-lg italic">
                "Hire me if you can handle someone who debugs faster than they break things! 🚀"
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;