import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  { 
    q: "How long before I see results?", 
    a: "Many women report improvements in 2–4 weeks. This includes reduced bleeding, less pain, and a noticeable reduction in stomach size as the fibroids begin to shrink." 
  },
  { 
    q: "Is it natural?", 
    a: "Yes. Utero Clear uses 100% plant-based herbal ingredients. It is formulated to work with your body's natural healing processes without the side effects of synthetic hormonal drugs." 
  },
  { 
    q: "Do I still need surgery?", 
    a: "Some women avoid surgery after improving womb health and successfully shrinking their fibroids using our protocol. However, results vary based on the size and type of fibroids. We always recommend monitoring your progress with ultrasound scans." 
  },
  { 
    q: "Is it safe for long-term use?", 
    a: "Yes, the Utero Clear protocol is designed to be a safe, natural way to maintain hormonal balance even after your fibroids have cleared." 
  },
  { 
    q: "Do you deliver nationwide?", 
    a: "Yes, we deliver to all 36 states in Nigeria. Delivery typically takes 24–48 hours, and for a limited time, we are offering FREE nationwide delivery on all orders today." 
  }

];

const FAQSection = () => {
  return (
    <section className="bg-background py-10 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:mb-16"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-4">
                <HelpCircle className="w-4 h-4" /> GOT QUESTIONS?
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                Common Questions
            </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-[1.5rem] border border-border bg-card px-8 py-2 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-bold text-foreground font-display text-lg md:text-xl hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed md:text-lg">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

