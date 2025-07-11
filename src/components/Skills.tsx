import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories, tools, skills } from '../data/portfolio';

const Skills: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500 dark:bg-green-400';
      case 'Advanced':
        return 'bg-blue-500 dark:bg-blue-400';
      case 'Intermediate':
        return 'bg-yellow-500 dark:bg-yellow-400';
      case 'Beginner':
        return 'bg-red-500 dark:bg-red-400';
      default:
        return 'bg-gray-500 dark:bg-gray-400';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert':
        return '100%';
      case 'Advanced':
        return '80%';
      case 'Intermediate':
        return '60%';
      case 'Beginner':
        return '40%';
      default:
        return '50%';
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img src={category.icon} alt={category.title} className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Programming Languages & Skills */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            variants={itemVariants}
          >
            Programming Languages & Technologies
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: getLevelWidth(skill.level) }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            variants={itemVariants}
          >
            Tools & Technologies
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-3"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                </motion.div>
                <p className="text-center font-medium text-gray-900 dark:text-white text-sm">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Always Learning
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and industry best practices. Currently exploring advanced Go patterns, 
              microservices architecture, and cloud-native development.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {/*
                Using a static array for demonstration. In a real scenario, this could be mapped from a data source.
              */}
              {["🔧 Microservices", "☁️ Cloud Computing", "✨ UI/UX Design", "🔐 API Security"].map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgb(59 130 246)",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
