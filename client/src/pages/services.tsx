import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Paintbrush, Layout, Search, Lightbulb } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: "UI Design",
      description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "UX Research",
      description: "Data-driven insights to understand your users and their needs.",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Design Systems",
      description: "Scalable and consistent design languages that grow with your product.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Product Strategy",
      description: "Strategic guidance to align design with business objectives.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-semibold mb-6 font-serif">Design Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive design solutions to transform your digital product.
            Monthly retainer available at $5,000 USD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="bg-[#F5F5F5] rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-4">Ready to elevate your product?</h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how we can work together to create exceptional digital experiences.
          </p>
          <Link href="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
