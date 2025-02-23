import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF3366] text-white mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
