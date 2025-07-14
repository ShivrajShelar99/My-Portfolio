import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      role: "Junior- Intern (Information Technology)",
      company: "G-Square Techsystems Pvt. Ltd.",
      duration: "12 Weeks",
      location: "Pune",
      type: "Internship",
      responsibilities: [
        "Agile Project Management using Microsoft Azure (Dev-Ops)",
        "Contributed to backend systems and supported development teams"
      ],
      technologies: ["React", "Node.js", "TypeScript", "Azure", "MySQL"]
    },
    {
      role: "Web Development Intern",
      company: "ViAS MoboTech",
      duration: "8 Weeks",
      location: "Pune",
      type: "Internship",
      responsibilities: [
        "Built frontends using CMS Tools (WordPress, Wix)",
        "Integration of data interaction layers using Node.js"
      ],
      technologies: ["WordPress", "Wix", "Shopify","Node.js"]
    },
    {
      role: "Project Intern",
      company: "Dassault Systemes",
      duration: "12 Months",
      location: "Pune",
      type: "Internship",
      responsibilities: [
        "Worked on scalable software projects.",
        "Exposure to complex data workflows with real-world projects."
      ],
      technologies: ["Python", "Embedded C", ]
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Work <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my career as a developer.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                  <motion.div
                    whileHover={{ boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)" }}
                    className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-purple-600 font-medium">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-600 mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mt-1">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;