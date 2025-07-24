"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import self from "../imgs/passport_photo.jpg";
import { Linkedin, Mail, Globe, Phone, Github } from "lucide-react";

const skills = [
  { name: "Teamwork", category: "Soft" },
  { name: "Communication", category: "Soft" },
  { name: "Critical Thinking", category: "Soft" },
  { name: "Time Management", category: "Soft" },
  { name: "HTML", category: "Skill" },
  { name: "REACT. JS", category: "Skill" },
  { name: "CSS", category: "Skill" },
  { name: "NODE. JS", category: "Skill" },
  { name: "BOOTSTRAP", category: "Skill" },
  { name: "EXPRESS. JS", category: "Skill" },
  { name: "JQUERY", category: "Skill" },
  { name: "MONGODB", category: "Skill" },
  { name: "JAVASCRIPT", category: "Skill" },
  { name: "GIT HUB", category: "Skill" },

];

const AnimatedSection = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
        <div className="min-h-screen text-white bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* About Section */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Text Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-purple-700 bg-opacity-50 rounded-full py-2 px-4 inline-block"
              >
                <h2 className="text-2xl font-bold">About me</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-lg">Hi</p>
                <p className="text-2xl font-bold">My Name Nilesh Panchal</p>
                <p className="text-base sm:text-lg leading-relaxed">
                  I am a{" "}
                  <span className="text-xl font-bold">MERN DEVELOPER</span>{" "}
                  proficient in building web applications using technologies like{" "}
                  <span className="font-bold">
                    React.js, Node.js, Express, and MongoDB
                  </span>
                  . <br />
                  I have experience implementing features like{" "}
                  <span className="font-bold">
                    authentication, dashboards, and responsive designs
                  </span>
                  , and aim to create seamless user experiences.
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Objective:</span> Challenge
                  myself in a new environment to learn, improve my skills, and
                  contribute meaningfully to the company.
                </p>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-2"
              >
                <h3 className="text-xl font-semibold">Contact</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:nileshpanchal4411@gmail.com" className="hover:text-purple-400">
                    <Mail />
                  </a>
                  <a href="https://www.linkedin.com/in/nilesh-panchal-b842472a1" className="hover:text-purple-400">
                    <Linkedin />
                  </a>
                  <a href="https://github.com/nileshpanchalnp" className="hover:text-purple-400" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://nilesh-panchal.vercel.app/" className="hover:text-purple-400">
                    <Globe />
                  </a>
                  <a href="tel:0397168247" className="hover:text-purple-400">
                    <Phone />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur-2xl opacity-30"></div>
              <img
                src={self}
                alt="Nilesh Panchal"
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full border-4 border-purple-500 relative z-10"
              />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Education & Certificate */}
        <AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-600 rounded-full px-3 py-1 text-sm">2024 - 2026</span>
                  <span>MCA - Dr. Baba Saheb Ambedkar Open University</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-600 rounded-full px-3 py-1 text-sm">2021 - 2024</span>
                  <span>B.COM - Gujarat University</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Certificate</h3>
              <div className="space-y-2">
                <div className="flex flex-wrap items-start gap-2">
                  <span className="bg-purple-600 rounded-full px-3 py-1 text-sm">
                    2023 - 2024
                  </span>
                  <p className="text-sm sm:text-base leading-snug">
                    Full Stack Development (MERN) Certificate Course - Red & White Multimedia Education
                  </p>
                </div>
                <div className="flex flex-wrap items-start gap-2">
                  <span className="bg-purple-600 rounded-full px-3 py-1 text-sm">
                    16/09/2024 - 16/10/2024
                  </span>
                  <p className="text-sm sm:text-base leading-snug">
                    Internship in Full Stack Development (MERN) at Bluecore IT Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Technical & Soft Skills */}
        <AnimatedSection>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills
                  .filter((s) => s.category === "Skill")
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Soft Skills + Interest + Language */}
            <div className="space-y-8">
              <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Soft Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills
                    .filter((s) => s.category === "Soft")
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Interest</h3>
                  <p>Design Trends</p>
                  <p>Technology</p>
                </div>
                <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Language</h3>
                  <p>English</p>
                  <p>Hindi</p>
                  <p>Gujarati</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
