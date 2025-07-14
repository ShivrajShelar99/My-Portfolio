import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resumeData = {
    summary: "Aspiring software developer with a strong grasp of full-stack development, problem-solving, and emerging technologies like AI/ML and embedded systems. Eager to build impactful, real-world solutions.",
    education: [
      {
        degree: "Bachelor of Information Technology",
        institution: "PVG's COET, Pune",
        year: "2022 - 2026",
        gpa: "9.5/10"
      }
    ],
    extra_curricular: [
      {
        role: "Member of Design & Production Team",
        company: "Information Technology Student's Association",
        duration: "",
        highlights: ["Creating Graphics","Banners and Logo Designing","Managing Social Media Posts"]
      }
    ],
    skills: {
      frontend: ["React", "Angular", "HTML", "CSS", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
      tools: ["Git", "GAE", "AWS","Hadoop","HBase"],
      languages: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", ],
      Graphics_AND_Videos: ["Adobe Photoshop", "Adobe After Effects"],
    },
    certifications: [
      "AWS Cloud Practitioner",
      "Advance Python"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const downloadResume = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/path-to-resume.pdf';
    link.download = 'Shivraj_Shelar_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-white">
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
              My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my professional journey, skills, and achievements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Summary & Skills */}
            <div className="md:col-span-2 space-y-8">
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg text-white">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Professional Summary</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg text-white">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Extra-Curricular Participation</h3>
                </div>
                <div className="space-y-6">
                  {resumeData.extra_curricular.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-bold text-gray-900">{exp.role}</h4>
                      <p className="text-blue-600 font-medium">{exp.company} • {exp.duration}</p>
                      <ul className="mt-2 space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl border border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-teal-600 to-green-600 p-2 rounded-lg text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Education</h3>
                </div>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-teal-600 font-medium">{edu.institution} • {edu.year}</p>
                    <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Skills & Certifications */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.frontend.map((skill, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.backend.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.tools.map((skill, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.languages.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Graphics & Video Edits</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.Graphics_AND_Videos.map((skill, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Certifications</h3>
                </div>
                <ul className="space-y-2">
                  {resumeData.certifications.map((cert, index) => (
                    <li key={index} className="text-sm text-gray-700">• {cert}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadResume}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;