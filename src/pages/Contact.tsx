import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-violet-400">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="gradient-border rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-violet-400" />
                  <a href="mailto:anandhubiju788@gmail.com" className="text-gray-300 hover:text-white">
                    anandhubiju788@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-violet-400" />
                  <a
                    href="https://github.com/anandhu2311c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    github.com/anandhu2311c
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-violet-400" />
                  <a
                    href="https://www.linkedin.com/in/anandhu-biju-92b897202/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    Anandhu Biju
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-violet-400" />
                  <span className="text-gray-300">Kerala, India</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:border-violet-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:border-violet-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;