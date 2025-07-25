import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="text-violet-400" size={24} />,
      technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Backend Development",
      icon: <Database className="text-violet-400" size={24} />,
      technologies: ["PHP", "MySQL", "XAMPP"]
    },
    {
      category: "Desktop Applications",
      icon: <Terminal className="text-violet-400" size={24} />,
      technologies: ["Python", "PyQt", "OpenCV", "Computer Vision"]
    },
    {
      category: "Tools & Others",
      icon: <Code2 className="text-violet-400" size={24} />,
      technologies: ["Git", "VS Code", "Figma", "Responsive Design"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center neon-text">About Me</h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-gray-300 text-lg leading-relaxed"
          >
            <p className="mb-4">
              Results-driven Software Developer with a strong foundation in designing, developing, 
              and deploying robust and scalable applications. Specialized in integrating Artificial Intelligence
               (AI) and Machine Learning (ML) to enhance software functionality and intelligence.
                Experienced in building full-stack web applications, optimizing backend systems techniques 
                to solve real-world problems. Committed to writing clean, efficient code and delivering high-impact 
                software solutions with a user-centric approach.
            </p>
            <p>
              Results-driven Software Developer with a strong foundation in designing, developing, 
              and deploying robust and scalable applications. Specialized in integrating Artificial Intelligence
               (AI) and Machine Learning (ML) to enhance software functionality and intelligence.
                Experienced in building full-stack web applications, optimizing backend systems techniques 
                to solve real-world problems. Committed to writing clean, efficient code and delivering high-impact 
                software solutions with a user-centric approach.
            </p>
          </motion.div>

          <h3 className="text-2xl font-bold mb-8 text-center neon-text">Skills & Technologies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="gradient-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h4 className="text-xl font-semibold">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-violet-900/30 rounded-full text-violet-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;