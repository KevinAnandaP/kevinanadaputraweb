import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { personalInfo, infoSections } from '../data/portfolio';

const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded"></div>
            </div>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                {personalInfo.description}
              </p>
              
              <p>
                My journey in programming started with backend development, where I discovered my 
                passion for building robust, scalable server-side applications and RESTful APIs. 
                I believe in writing clean, efficient code and implementing best practices in 
                software architecture.
              </p>
              
              <p>
                I've built multiple projects including OAuth2 implementations, real-time chat systems, 
                and CRUD applications. When I'm not coding, I'm exploring new technologies, 
                contributing to open source projects, and expanding my knowledge in cloud computing 
                and distributed systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                <img src="/assets/download-icon.png" alt="" className="w-4 h-4 mr-2" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-secondary inline-flex items-center justify-center"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right Content - Stats and Info Sections */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{personalInfo.projectsCompleted}</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{personalInfo.experience}</div>
                <div className="text-gray-600 dark:text-gray-400">Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{personalInfo.technologiesMastered}</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600 dark:text-gray-400">Skill Areas</div>
              </div>
            </div>

            {/* Info Sections */}
            <div className="space-y-4">
              {infoSections.map((section, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <img 
                      src={isDark ? section.iconDark : section.icon} 
                      alt={section.title}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {section.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
