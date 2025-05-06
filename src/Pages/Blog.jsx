import React from "react";
import { BookOpen, Code, Database, Globe, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";
import red from "../imgs/r&w_Certificate.jpg";
import inter from "../imgs/intership.png";

const Section = ({ children, className = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delayChildren: 0.2,
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Item = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Section>
          <Item>
            <h2 className="text-3xl font-extrabold text-center mb-8">
              Certification
              <span className="block text-indigo-400 text-4xl mt-2">
                Master In Full-Stack Web Development
              </span>
            </h2>
          </Item>

          <Item>
            <div className="relative mb-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-gray-900 text-lg font-medium text-indigo-400">
                  At Red and White Multimedia Education Zone
                </span>
              </div>
            </div>
          </Item>

          <Item>
            <div className="mb-12">
              <img
                src={red}
                alt="Full-Stack Web Development Certificate"
                width={750}
                height={400}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </Item>
        </Section>

        <Section className="mt-8 space-y-6 text-gray-300">
          {[
            {
              icon: Globe,
              text: "I completed an intensive Full Stack Development course at Red and White Multimedia Education Zone from (2023 to 2024). This program offered in-depth training across essential web development tools and languages, including HTML, CSS, and Bootstrap, allowing me to create visually responsive and user-friendly designs.",
            },
            {
              icon: Code,
              text: "Along with front-end skills, I gained experience with JavaScript and jQuery for creating dynamic, interactive user interfaces, and honed my foundational programming skills in C. On the back end, I developed expertise in server-side development with Node.js and Express.js and worked with MongoDB for efficient data management.",
            },
            {
              icon: Database,
              text: "Through hands-on projects and practical exercises, I mastered the MERN stack, enabling me to build complete, end-to-end web applications. This experience provided a solid understanding of full-stack development, preparing me to create, deploy, and manage full-featured web applications.",
            },
          ].map((item, index) => (
            <Item key={index}>
              <p className="flex items-start">
                <item.icon className="h-6 w-6 text-indigo-400 mr-4 flex-shrink-0" />
                <span>{item.text}</span>
              </p>
            </Item>
          ))}
        </Section>

        <Section className="mt-12">
          <Item>
            <h3 className="text-2xl font-bold text-center text-indigo-400 mb-4">
              Key Skills Acquired
            </h3>
          </Item>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "jQuery",
              "C",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Git Hub",
              "Media Query",
            ].map((skill) => (
              <Item key={skill}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 rounded-full px-4 py-2 text-center text-sm font-medium cursor-pointer"
                >
                  {skill}
                </motion.div>
              </Item>
            ))}
          </div>
        </Section>

        <Section className="mt-12 text-center">
          <Item>
            <span className="inline-block">
              <BookOpen className="h-8 w-8 text-indigo-400 mx-auto" />
              <span className="block mt-2 text-sm font-medium">
                Continuous Learning
              </span>
            </span>
          </Item>
          <Item>
            <p className="mt-2 text-gray-400 text-sm max-w-md mx-auto">
              Committed to staying updated with the latest web technologies and
              best practices in the ever-evolving field of web development.
            </p>
          </Item>
        </Section>

        <Section>
          <Item>
            <div className="mt-16 mb-16 border-b border-gray-700 w-1/2 mx-auto border-dotted"></div>
          </Item>
        </Section>

        <Section>
          <Item>
            <h2 className="text-3xl font-extrabold text-center mb-8">
              Internship
              <span className="block text-indigo-400 text-4xl mt-2">
                Full Stack Development (MERN)
              </span>
            </h2>
          </Item>

          <Item>
            <div className="relative mb-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-gray-900 text-lg font-medium text-indigo-400">
                  At Bluecore IT Company
                </span>
              </div>
            </div>
          </Item>

          <Item>
            <div className="mb-12">
              <img
                src={inter}
                alt="Internship Certificate"
                width={650}
                height={400}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </Item>
        </Section>

        <Section className="mt-8 space-y-6 text-gray-300">
          <Item>
            <p className="flex items-start">
              <Briefcase className="h-6 w-6 text-indigo-400 mr-4 flex-shrink-0" />
              <span>
                Successfully completed an internship in Full Stack Development
                (MERN) at Bluecore IT Company. This hands-on experience allowed
                me to apply my skills in a real-world setting, working on live
                projects and collaborating with experienced developers.
              </span>
            </p>
          </Item>
          <Item>
            <p className="flex items-start">
              <Code className="h-6 w-6 text-indigo-400 mr-4 flex-shrink-0" />
              <span>
                During the internship, I contributed to the development of
                responsive web applications using the MERN stack (MongoDB,
                Express.js, React.js, and Node.js). I gained practical
                experience in agile development methodologies, version control
                with Git, and deploying applications to cloud platforms.
              </span>
            </p>
          </Item>
          <Item>
            <p className="flex items-start">
              <Database className="h-6 w-6 text-indigo-400 mr-4 flex-shrink-0" />
              <span>
                The internship enhanced my problem-solving skills, improved my
                ability to work in a team environment, and deepened my
                understanding of software development best practices. This
                experience has been invaluable in bridging the gap between
                academic knowledge and industry application.
              </span>
            </p>
          </Item>
        </Section>

        <Section className="mt-12 text-center">
          <Item>
            <span className="inline-block">
              <BookOpen className="h-8 w-8 text-indigo-400 mx-auto" />
              <span className="block mt-2 text-sm font-medium">
                Ready for New Challenges
              </span>
            </span>
          </Item>
          <Item>
            <p className="mt-2 text-gray-400 text-sm max-w-md mx-auto">
              Equipped with both theoretical knowledge and practical experience,
              I'm excited to take on new challenges in the field of web
              development.
            </p>
          </Item>
        </Section>
      </div>
    </div>
  );
}
