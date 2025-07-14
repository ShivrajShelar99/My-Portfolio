import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Primary Education",
      institution: "Amol Memorial English Medium School",
      year: "2010 - 2020",
      location: "Daund, Pune",
      gpa: "",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Higher Education",
      institution: "Modern College of Arts, Science and Commerce",
      year: "2020 - 2022",
      location: "Pune, Maharashtra",
      gpa: "",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "B.E. in Information Technology",
      institution: "PVG's College of Engineering and Technology",
      year: "2022 - 2026",
      location: "Pune, Maharashtra",
      gpa: "",
      icon: <Award className="w-6 h-6" />
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  <img
                    src="profile.jpg"
                    alt="Profile"
                    className="w-80 h-80 rounded-2xl object-cover shadow-2xl mx-auto"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hello! I'm Shivraj Shelar
              </h3>
              <p className="text-gray-600 leading-relaxed">
              I'm a passionate software developer for building digital solutions that improve everyday life. 
              I specialize in full-stack development, and I work with modern technologies including AI/ML, Large Language Models (LLMs), and embedded systems. 
              I have a strong focus on clean architecture, performance, and user-centered design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or enjoying a good cup of coffee while planning my 
                next creative project.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span>Pune, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span>Open to work</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h3>
            <div className="relative max-w-2xl mx-auto">
              {/* Timeline vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 z-0"></div>
              <div className="flex flex-col gap-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center`}
                  >
                    {/* Card */}
                    <div className={`w-full md:w-1/2 z-10 ${index % 2 === 0 ? 'pl-8 md:pl-16' : 'pr-8 md:pr-16'}`}> 
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100 shadow-lg">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg text-white">
                            {edu.icon}
                          </div>
                          <h4 className="font-bold text-gray-900 text-lg">{edu.degree}</h4>
                        </div>
                        <p className="text-purple-600 font-medium mb-1">{edu.institution}</p>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{edu.gpa}</p>
                      </div>
                    </div>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        {edu.icon}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;