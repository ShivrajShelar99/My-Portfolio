import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail, Instagram, Laptop } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/ShivrajShelar99/", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "http://www.linkedin.com/in/shivraj-shelar-sms", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/shivraj.shelar_sms", label: "Instagram" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:shivrajshelara99@gmail.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-4"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                SMS
              </div>
            </motion.div>
            
            <h3 className="text-xl font-bold mb-2">Shivraj Shelar</h3>
            <p className="text-gray-400 mb-6">Software Developer</p>
            
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 p-3 rounded-full transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2022 Shivraj Shelar. Made with{' '}
                <Heart className="w-4 h-4 inline text-red-500 mx-1" />
                and React.js
              </p>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-full hover:shadow-lg transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;