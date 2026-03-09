import { motion } from "framer-motion";
import { Package, BookOpen, Utensils, HeartPulse, CheckCircle2 } from "lucide-react";

const items = [
  { icon: Package, title: "Utero Clear Herbal Capsules", desc: "Our proprietary 100% natural formula designed to target fibroid tissues." },
  { icon: Utensils, title: "Fibroid Diet Guide", desc: "Expert nutritional advice on what to eat and avoid to stop feeding fibroids." },
  { icon: HeartPulse, title: "Hormone Balance Plan", desc: "Step-by-step instructions to naturally regulate estrogen and progesterone." },
  { icon: BookOpen, title: "Womb Health Protocol", desc: "Daily habits and practices to maintain a healthy, fertile reproductive system." },
];

const BenefitsSection = () => {
  return (
    <section className="bg-accent/30 py-10 md:py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <span className="text-sm font-black uppercase tracking-[0.2em] text-primary/60">WHAT YOU RECEIVE</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">
            When you start the Utero Clear protocol you receive:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              
              <div className="mt-6 pt-4 border-t border-border flex items-center text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-4 h-4 mr-2" /> INCLUDED IN PROTOCOL
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

