import  { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    saveInfo: false,
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success' or 'error'
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.location ||
      !formData.message
    ) {
      setStatusType("error");
      setStatusMessage("All fields are required.");
      return;
    }

    // EmailJS Integration
    emailjs
      .sendForm(
        "service_hu9phpb", // Replace with your EmailJS Service ID
        "template_qd3pqcs", // Replace with your EmailJS Template ID
        formRef.current,
        "Gp9WQx0M8-nFD82Jm" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setStatusType("success");
          setStatusMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            message: "",
            saveInfo: false,
          });
        },
        () => {
          setStatusType("error");
          setStatusMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
        <div className="min-h-screen text-white bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
            Contact
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-center mb-8 text-gray-300">
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to{" "}
            <a
              href="mailto:nileshpanchal4411@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              nileshpanchal4411@gmail.com
            </a>
            . Want to get connected? Follow me on the social channels below.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="rounded-full bg-purple-800 bg-opacity-30 hover:bg-purple-700 p-2">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="rounded-full bg-purple-800 bg-opacity-30 hover:bg-purple-700 p-2">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="rounded-full bg-purple-800 bg-opacity-30 hover:bg-purple-700 p-2">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="rounded-full bg-purple-800 bg-opacity-30 hover:bg-purple-700 p-2">
              <Instagram className="h-5 w-5" />
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="bg-purple-800 bg-opacity-30 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">
              Contact Details
            </h2>
            <p className="text-gray-300 mb-6">
              I'm available for any inquiries or potential collaborations. Use
              the contact information below to reach out directly.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center">
                <div className="bg-purple-700 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-300">Phone</h3>
                  <p className="text-gray-300">+91 9898471043</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-700 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-300">Location</h3>
                  <p className="text-gray-300">Gota , Ahemdabad . </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-700 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-300">Email</h3>
                  <p className="text-gray-300">nileshpanchal4411@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <div className="mb-12">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29359.169303727846!2d72.52296207714461!3d23.100896688360233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82e76893cd85%3A0xd302251c8dc381c6!2sGota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1731155124596!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Ahmedabad, Gujarat"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1}>
          <div className="bg-purple-800 bg-opacity-30 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-cyan-300">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-8">
              Feel free to reach out for any questions, collaborations, or
              feedback. Please provide your details below, and I'll get back to
              you shortly.
            </p>

            {/* Status message */}
            {statusMessage && (
              <div
                className={`mb-6 text-center text-sm ${
                  statusType === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-purple-900 bg-opacity-50 border-purple-600 text-white w-full"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-purple-900 bg-opacity-50 border-purple-600 text-white w-full"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="bg-purple-900 bg-opacity-50 border-purple-600 text-white w-full"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Location*
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="bg-purple-900 bg-opacity-50 border-purple-600 text-white w-full"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="bg-purple-900 bg-opacity-50 border-purple-600 text-white w-full"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="saveInfo"
                  name="saveInfo"
                  className="bg-purple-900 bg-opacity-50 border-purple-600 text-white"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                />
                <label
                  htmlFor="saveInfo"
                  className="ml-2 text-sm text-gray-300"
                >
                  Save my information for future inquiries
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
