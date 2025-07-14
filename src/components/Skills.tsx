import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Smartphone, Bolt, Cloud, ChromeIcon, Hexagon, CodeSquare, DatabaseBackupIcon, DatabaseIcon, DatabaseZap, LucideDatabaseBackup, AlignVerticalDistributeStartIcon, GitGraphIcon, BarChart4 } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />, // category icon
      color: "from-purple-600 to-blue-600",
      skills: [
        { name: "React", logo: <Code />, sentence: "Built multiple SPAs and dashboards using React." },
        { name: "TypeScript", logo: <Code />, sentence: "Used TypeScript for type-safe codebases in all frontend projects." },
        { name: "Angular", logo: <Code />, sentence: "Developed responsive Web-Apps" },
        { name: "Tailwind CSS", logo: <Code />, sentence: "Styled modern UIs rapidly using Tailwind CSS utility classes." },
        { name: "JavaScript", logo: <Code />, sentence: "Wrote interactive features and logic in JavaScript for web apps." },
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />, // category icon
      color: "from-blue-600 to-teal-600",
      skills: [
        { name: "Node.js", logo: <Hexagon />, sentence: "Built REST APIs and services with Node.js." },
        { name: "Express.js", logo: <Hexagon />, sentence: "Created scalable backend APIs using Express.js." },
        { name: "Python", logo: <CodeSquare />, sentence: "Automated tasks and built scripts in Python." },
        { name: "MySQL", logo: <Database />, sentence: "Designed and queried relational data in MySQL." },
        { name: "MongoDB", logo: <Database />, sentence: "Managed NoSQL data with MongoDB for flexible schemas." },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />, // category icon
      color: "from-teal-600 to-green-600",
      skills: [
        { name: "Git", logo: <Wrench />, sentence: "Version controlled all projects using Git and GitHub." },
        { name: "Microsoft Azure", logo: <Bolt />, sentence: "Agile Project Management in Dev-Ops." },
        { name: "AWS", logo: <Cloud />, sentence: "Deployed and managed cloud resources on AWS." },
        { name: "Google App Engine", logo: <ChromeIcon  />, sentence: "Bundled and optimized frontend assets with Webpack." }
      ]
    },
    {
      title: "Big-Data & Analytics",
      icon: <DatabaseBackupIcon className="w-6 h-6" />, // category icon
      color: "from-green-600 to-purple-600",
      skills: [
        { name: "Hadoop", logo: <DatabaseZap />, sentence: "Built cross-platform mobile apps with React Native." },
        { name: "HBase", logo: <DatabaseIcon />, sentence: "Developed mobile UIs and logic using Flutter." },
        { name: "Hive", logo: <AlignVerticalDistributeStartIcon />, sentence: "Rapidly prototyped mobile apps with Expo." },
        { name: "Tableau", logo: <BarChart4 />, sentence: "Managed complex app state using Redux." }
      ]
    }
  ];

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
    <section id="skills" className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
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
              Technical <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with to create amazing digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)" }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex flex-col items-center bg-gray-50 rounded-xl p-4 shadow-sm"
                    >
                      <div className="mb-2">{skill.logo}</div>
                      <span className="text-gray-800 font-semibold text-lg">{skill.name}</span>
                      <p className="text-gray-600 text-sm mt-1 text-center">{skill.sentence}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;