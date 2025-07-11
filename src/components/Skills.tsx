import React from 'react';
import { skillCategories, tools, skills } from '../data/portfolio';

const Skills: React.FC = () => {
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
        return 'w-full';
      case 'Advanced':
        return 'w-4/5';
      case 'Intermediate':
        return 'w-3/5';
      case 'Beginner':
        return 'w-2/5';
      default:
        return 'w-1/2';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <img src={category.icon} alt={category.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Programming Languages & Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Programming Languages & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
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
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <p className="text-center font-medium text-gray-900 dark:text-white text-sm">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and industry best practices. Currently exploring advanced Go patterns, 
              microservices architecture, and cloud-native development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600">
                🔧 Microservices
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600">
                ☁️ Cloud Computing
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600">
                � Docker & Kubernetes
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600">
                🔐 API Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
