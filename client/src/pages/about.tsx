import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-semibold mb-8 font-serif">About Me</h1>
            <div className="prose prose-lg">
              <p>
                With over a decade of experience in digital product design, I've had the privilege
                of working with innovative startups and established enterprises across various industries.
              </p>
              <p>
                My approach combines strategic thinking with hands-on design execution, ensuring that
                every project delivers both aesthetic excellence and measurable business results.
              </p>
              <p>
                I specialize in:
              </p>
              <ul>
                <li>User Experience Design</li>
                <li>User Interface Design</li>
                <li>Design Systems</li>
                <li>Product Strategy</li>
                <li>User Research</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <img
              src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca"
              alt="Designer Profile"
              className="rounded-lg shadow-lg mb-8"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                alt="Workspace"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be"
                alt="Design Process"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
