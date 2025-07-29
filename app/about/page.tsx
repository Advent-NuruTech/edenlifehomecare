'use client';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const sections = [
  {
    title: 'Our Mission',
    content:
      'To deliver compassionate, personalized home care that empowers individuals to live with dignity, comfort, and independence within their own homes.',
  },
  {
    title: 'Our Vision',
    content:
      'To be the most trusted and reliable provider of home care solutions in Kenya, setting a standard for excellence in health, service, and humanity.',
  },
  {
    title: 'Our Core Values',
    content:
      'Compassion, Integrity, Respect, Excellence, and Commitment. These values guide every aspect of our service delivery.',
  },
  {
    title: 'Why Choose EdenLife?',
    content:
      'We blend professional expertise with heartfelt care. Our trained caregivers treat every client like family, ensuring safety, comfort, and happiness every step of the way.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">About EdenLife Home Care</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At EdenLife, we believe everyone deserves care that is thoughtful, respectful, and empowering.
          We bring medical and non-medical services to the comfort of your home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="rounded-2xl bg-white p-6 shadow-lg border-l-4 border-green-500"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index + 1}
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-2">{section.title}</h2>
            <p className="text-gray-600">{section.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-8">
          Behind EdenLife is a dedicated team of caregivers, nurses, coordinators, and health professionals—
          committed to making a real difference in the lives we touch.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {['Grace – Founder & Director', 'John – Care Coordinator', 'Mary – Nurse-in-Charge'].map(
            (member, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-md p-4 rounded-xl w-64 border-t-4 border-green-500"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i + 1}
              >
                <h3 className="text-lg font-semibold text-green-700">{member}</h3>
                <p className="text-sm text-gray-500">Professional & Compassionate</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
