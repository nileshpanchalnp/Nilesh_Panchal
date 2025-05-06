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
  { name: "C", category: "Skill" },
  { name: "MEDIA QUERY", category: "Skill" },
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
    <div className="min-h-screen text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto ">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center ms-0 md:ms-2">
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
                <p className="text-2xl md:text-2xl font-bold">
                  My Name Nilesh Panchal
                </p>
                <p className="text-base md:text-lg">
                  I am a{" "}
                  <span className="text-xl md:text-2xl font-bold">
                    FULL STACK DEVLOPER
                  </span>{" "}
                  proficient in building web applications using technologies
                  like{" "}
                  <span className="font-bold">
                    React.js for the frontend and Node.js, Express, and MongoDB
                    for the backend.{" "}
                  </span>{" "}
                  <br />- I have experience implementing features such as user{" "}
                  <span className="font-bold">
                    authentication, dynamic dashboards, and responsive designs
                  </span>
                  . Your projects often involve creating seamless user
                  experiences with well-integrated APIs and databases.
                </p>
                <p className="text-lg">
                  My objective: Challenge myself in a new environment to learn,
                  develop, improve my skills through different projects and
                  contribute more to the company with my abilities.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-2"
              >
                <h3 className="text-xl font-semibold">Contact</h3>
                <div className="flex flex-wrap gap-4 md:space-x-4">
                  <a
                    href="mailto:nileshpanchal4411@gmail.com"
                    className="hover:text-purple-400"
                  >
                    <Mail />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nilesh-panchal-b842472a1"
                    className="hover:text-purple-400"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://github.com/nileshpanchalnp"
                    className="hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://behance.net/thangnguyenduc20"
                    className="hover:text-purple-400"
                  >
                    <Globe />
                  </a>
                  <a href="tel:0397168247" className="hover:text-purple-400">
                    <Phone />
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full blur-2xl opacity-30"></div>
              <img
                src={self || "/placeholder.svg"}
                alt="Nilesh Panchal"
                width={300}
                height={300}
                className="rounded-full border-4 border-purple-500 relative z-10"
              />
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="flex items-center space-x-2">
                <span className="bg-purple-600 rounded-full px-3 py-1 text-sm">
                  2024 - Now
                </span>
                <span>MCA - Dr. Baba Saheb Ambedkar Open University</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-purple-600 rounded-full px-3 py-1 text-sm">
                  2021 - 2024
                </span>
                <span>B.COM - Gujrat University</span>
              </div>
            </div>
            <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Certificate </h3>
              <div className="flex items-center space-x-3">
                <span className="bg-purple-600 rounded-full px-3 py-1 text-sm w-48">
                  2023 - 2024
                </span>
                <span>
                  {" "}
                  Full Stack Development (MERN) Cetificate Courses - At - Red &
                  White multimedia Education Zone{" "}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-purple-600 rounded-full px-3 py-1 text-sm w-48">
                  16/09/2024 to 16/10/2024.
                </span>
                <span>
                  {" "}
                  successfully completed an internship in Full Stack Development
                  (MERN) at Bluecore IT Company{" "}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Technical skill</h3>
              <div className="grid grid-cols-2 gap-4">
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
            <div className="space-y-8">
              <div className="bg-purple-800 bg-opacity-30 rounded-3xl p-6 space-y-4">
                <h3 className="text-xl font-semibold">Soft skill</h3>
                <div className="grid grid-cols-2 gap-4">
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
