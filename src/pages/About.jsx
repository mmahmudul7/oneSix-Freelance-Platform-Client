import {motion} from "framer-motion";
import {Users, Code, Paintbrush} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-10"
        >
          About OneSix.dev
        </motion.h1>

        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2, duration: 0.6}}
          className="text-lg text-center max-w-3xl mx-auto mb-10"
        >
          Welcome to{" "}
          <span className="font-semibold text-blue-600">OneSix.dev</span> — a
          creative marketplace where talented professionals bring ideas to life.
          We connect clients with skilled designers, developers, and creators to
          deliver quality, innovation, and results.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Design & Branding */}
          <motion.div
            whileHover={{scale: 1.05}}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <Paintbrush className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Design & Branding</h3>
            <p className="text-gray-600">
              We create clean and professional visuals — from logo redraws and
              color adjustments to vector conversions and image optimization —
              ready for printing, engraving, or digital use.
            </p>
          </motion.div>

          {/* Web Development */}
          <motion.div
            whileHover={{scale: 1.05}}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <Code className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              We build fast, modern websites and web apps using Django and React
              — built for performance, scalability, and user experience.
              Automation tools help save time and streamline work.
            </p>
          </motion.div>

          {/* Team Collaboration */}
          <motion.div
            whileHover={{scale: 1.05}}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <Users className="mx-auto text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-gray-600">
              Our creative team works together to deliver consistent quality,
              unique ideas, and modern solutions — bringing every client’s
              vision to life with precision and passion.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.4, duration: 0.8}}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Join us. Create. Collaborate. Grow.
          </h2>
          <p className="text-gray-700">
            Want to work with us or join as a seller? Contact us at{" "}
            <a
              href="mailto:admin@onesix.dev"
              className="text-blue-600 font-medium underline"
            >
              admin@onesix.dev
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
