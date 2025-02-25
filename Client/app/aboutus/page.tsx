"use client"; 

import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 

interface TeamMember {
  name: string;
  image?: string;
}

interface AboutUsProps {
  companyName: string;
  mission: string;
  teamMembers: TeamMember[];
  contactEmail: string;
}

const AboutUs: React.FC<AboutUsProps> = ({
  companyName,
  mission,
  teamMembers,
  contactEmail,
}) => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 p-6 overflow-hidden">
      {/* Live Animated Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#f3f4f6" }, 
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#00b5b8" },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1.5, direction: "top", random: true },
            links: { enable: true, distance: 150, color: "#00b5b8", opacity: 0.4, width: 1 },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl p-10 bg-white rounded-3xl shadow-2xl backdrop-blur-lg relative z-10"
      >
        {/* About Us Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-6"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-gray-600 text-center mb-8 px-6"
        >
          Welcome to{" "}
          <span className="text-[#00b5b8] font-semibold">{companyName}</span>,{" "}
          where organization meets innovation. {mission}
        </motion.p>

        {/* Meet the Team Section */}
        <h3 className="text-2xl font-semibold text-gray-700 text-center">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-lg transition-all duration-300"
            >
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                />
              )}
              <h4 className="mt-4 text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <h3 className="text-2xl font-semibold text-gray-700 text-center mt-8">
          Contact Us
        </h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-600 text-center mt-2"
        >
          Have questions? Reach out to us at{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-[#00b5b8] font-medium underline"
          >
            {contactEmail}
          </a>
          .
        </motion.p>

        {/* Back to Home Button */}
        <div className="text-center mt-6">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 text-white bg-[#00b5b8] rounded-lg hover:bg-[#369A9A] transition duration-300 shadow-md"
          >
            Back to Home
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

// Example usage
const team = [
  { name: "Nish Patel", image: "/Nish.jpg" },
  { name: "Arshi Patel", image: "/Arshi.jpg" },
  { name: "Om Patel", image: "/Om.jpg" },
  { name: "Disha Keraliya", image: "/Disha.jpg" },
  { name: "Dhruv Raut", image: "/Dhruv.jpg" },
];

const AboutUsPage: React.FC = () => {
  return (
    <AboutUs
      companyName="Calendo"
      mission="Our mission is to revolutionize time management, providing an intuitive and powerful calendar solution that enhances productivity and collaboration."
      teamMembers = {team}
      contactEmail="support@calendo .com"
    />
  );
};

export default AboutUsPage;