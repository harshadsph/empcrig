// pages/index.js
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-white to-gray-100"
      >
        <h1 className="text-5xl font-bold mb-4">Empcrig</h1>
        <p className="text-lg max-w-xl">Empower. Create. Ignite. — Sustainable design agency by Nehal Gillurkar.</p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="p-10 bg-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "EcoGoods Branding",
              desc: "Logo, colors, packaging for a sustainable brand.",
            },
            {
              title: "BitString Animation",
              desc: "Cybersecurity explainer video with storyboards.",
            },
            {
              title: "GreenCart UI/UX",
              desc: "Clean, mobile-first design for a green startup.",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-5 rounded-lg shadow transition"
            >
              <h3 className="font-semibold text-xl">{proj.title}</h3>
              <p className="text-sm mt-2">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-10 bg-gray-50 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About Empcrig</h2>
        <p className="max-w-2xl mx-auto">
          Empcrig is founded by Nehal Gillurkar — a passionate designer from Singapore with 3+ years of experience in branding, motion graphics, UI/UX, and sustainable design. We craft visuals that empower purpose-driven businesses.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 text-center bg-white border-t"
      >
        <h2 className="text-xl font-bold mb-2">Let's Collaborate</h2>
        <p>
          Email us at{" "}
          <a href="mailto:nehal@empcrig.com" className="text-blue-500 underline">
            nehal@empcrig.com
          </a>
        </p>
      </motion.footer>
    </main>
  );
}
