"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";


import fastFoodBT from "../imgs/fastfood-bt.png";
import infratructure from "../imgs/Infratructure-bt.png";
import stackoverflow from "../imgs/stackoverflow.png";
import furniture from "../imgs/furniture.png";
import adminpanel from "../imgs/admin-panal-react.png";
import icecrem from "../imgs/icecream-jquery.png";
import techCSS from "../imgs/tech-css.png";
import TranspoTrack from "../imgs/Managment.png";
import Calendar from "../imgs/Event_Scheduler_Calendar.png"
import taskmaster from "../imgs/Taskmaster.png"
import Event from "../imgs/Event_feedback.png"
 
const projects = [
  {
    id: 1,
    title: "CodeQ: Ask, Answer, and Grow Together",
    image: stackoverflow,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    category: "Fullstack",
    link: "https://stack-overflow-project-gamma.vercel.app/",
  },
    {
    id: 2,
    title: "Events & Feedback System",
    image: Event,
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
    category: "Fullstack",
    link: "https://feedback-system-amber.vercel.app/",
  },
  {
    id: 3,
    title: "TaskMaster",
    image: taskmaster,
    tags: ["React.js", "Tailwind CSS", "Frontend Development"],
    category: "Frontend",
    link: "https://todo-list--seven.vercel.app/",
  },
  {
    id: 4,
    title: "Event Scheduler Calendar",
    image: Calendar,
    tags: ["React.js", "Tailwind CSS", "Frontend Development"],
    category: "Frontend",
    link: "https://event-scheduler-calendar-two.vercel.app/",
  },
  {
    id: 5,
    title: "TranspoTrack – Management System",
    image: TranspoTrack,
    tags: ["React.js", "CSS", "Frontend Development"],
    category: "Frontend",
    link: "https://np-react-assignment.vercel.app/",
  },
  {
    id: 6,
    title: "Infrabuild: Shaping the Modern World",
    image: infratructure,
    tags: ["HTML", "CSS", "BOOTSTRAP"],
    category: "Web App",
    link: "https://nileshpanchalnp.github.io/Bootstrap_animation_webside/",
  },
  {
    id: 7,
    title: "Hunger Game: Satisfy Your Cravings!",
    image: fastFoodBT,
    tags: ["HTML", "CSS", "BOOTSTRAP"],
    category: "Web App",
    link: "https://nileshpanchalnp.github.io/Hunger_Game_Bootstrap/",
  },
  {
    id: 8,
    title: "Artful Interiors. – Furniture that Fits Your Lifestyle",
    image: furniture,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    category: "Fullstack",
    link: "https://artful-interiors.example.com",
  },
  {
    id: 9,
    title: "ControlHub – Your Dashboard, Simplified",
    image: adminpanel,
    tags: ["React.js", "CSS", "Frontend Development"],
    category: "Frontend",
    link: "https://controlhub.example.com",
  },
  {
    id: 10,
    title: "IceCreamery – Scoops Full of Happiness",
    image: icecrem,
    tags: ["HTML", "CSS", "jQuery"],
    category: "Web App",
    link: "https://nileshpanchalnp.github.io/Jquery_webside/",
  },
  {
    id: 11,
    title: "CR TECH – Your Guide to the Latest Tech",
    image: techCSS,
    tags: ["HTML", "CSS", "BOOTSTRAP"],
    category: "Web App",
    link: "https://nileshpanchalnp.github.io/CR_TECH_CSS/",
  },
];

const categories = ["All","Frontend" , "Fullstack","Web App" ];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400"
        >
          My Portfolio
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "secondary" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                category === selectedCategory
                  ? "bg-purple-600 text-white"
                  : "text-purple-300 border-purple-300 hover:bg-purple-700 hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-purple-800 bg-opacity-30 rounded-lg shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-700 bg-opacity-50 text-purple-200 px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                  onClick={() =>
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                >
                  View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-300 mt-8">
            No projects found for the selected category.
          </div>
        )}
      </div>
    </div>
  );
}
