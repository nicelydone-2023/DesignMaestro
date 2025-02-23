import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <section className="container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 font-serif">
            Crafting Digital Experiences That Matter
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Product designer specializing in user-centered design solutions that drive business growth
          </p>
          <div className="flex gap-4">
            <Link href="/portfolio">
              <Button size="lg">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#F5F5F5] py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1496664444929-8c75efb9546f"
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-semibold mb-6 font-serif">
                Elevate Your Digital Presence
              </h2>
              <p className="text-muted-foreground mb-6">
                With over a decade of experience in digital product design, I help businesses create 
                meaningful connections with their users through thoughtful and innovative design solutions.
              </p>
              <Link href="/services">
                <Button variant="link" className="text-[#FF3366]">
                  Learn about my services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
