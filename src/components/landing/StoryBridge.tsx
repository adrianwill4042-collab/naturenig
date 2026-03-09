import { motion } from "framer-motion";

interface StoryBridgeProps {
  text: string;
}

const StoryBridge = ({ text }: StoryBridgeProps) => {
  return (
    <div className="bg-background py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative inline-block"
        >
          <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full scale-150" />
          <p className="relative font-display text-xl md:text-3xl italic text-muted-foreground leading-relaxed max-w-4xl mx-auto border-y-2 border-primary/10 py-8 px-4">
            "{text}"
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryBridge;
