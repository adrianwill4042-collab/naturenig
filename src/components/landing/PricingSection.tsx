import { motion } from "framer-motion";
import { Check, ShieldCheck, Tag, Star } from "lucide-react";

const valueStack = [
  { item: "Fibroid treatment consultation", value: "₦30,000" },
  { item: "Herbal hormone therapy", value: "₦45,000" },
  { item: "Womb detox protocol", value: "₦20,000" },
  { item: "Fibroid diet guide", value: "₦10,000" },
];

const PricingSection = () => {
  return (
    <section className="bg-card py-10 md:py-24 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5 -skew-y-6 -translate-y-24" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <span className="text-sm font-black uppercase tracking-widest text-primary/60">YOUR INVESTMENT</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-foreground">
            Access the Full Protocol
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          {/* SECTION 10 - VALUE STACK */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl border border-border p-8 md:p-10 shadow-sm"
          >
            <h3 className="font-bold text-xl mb-8 border-b pb-4 border-border">If you were to buy everything separately:</h3>
            <div className="space-y-6">
              {valueStack.map((v, i) => (
                <div key={i} className="flex justify-between items-center text-base sm:text-lg">
                  <span className="text-muted-foreground">{v.item}</span>
                  <span className="font-mono font-bold text-foreground">{v.value}</span>
                </div>
              ))}
              <div className="pt-6 border-t-2 border-dashed border-border flex justify-between items-center">
                <span className="text-xl font-black text-foreground uppercase">Total value:</span>
                <span className="text-2xl font-black text-foreground line-through decoration-destructive decoration-4 opacity-50">₦105,000</span>
              </div>
            </div>
          </motion.div>

          {/* SECTION 11 - PRICE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-primary rounded-[2.5rem] p-6 sm:p-10 md:p-12 text-primary-foreground shadow-2xl relative overflow-hidden flex flex-col justify-center border-4 border-white/20"
          >
            <div className="absolute top-6 right-6 rotate-12">
              <Star className="w-16 h-16 text-yellow-400 fill-current opacity-20" />
            </div>
            
            <p className="text-xl font-bold mb-4 opacity-90 italic">Today you can access the full protocol for:</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-7xl md:text-8xl font-black tracking-tighter">₦35,000</span>
              <span className="text-xl font-bold opacity-70">/ ONE TIME</span>
            </div>
            
            <ul className="mb-10 space-y-4">
              {["Full Herbal Protocol", "Immediate Access to Guides", "Personal Support"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-bold">
                  <Check className="w-6 h-6 bg-white/20 p-1 rounded-full text-white" /> {f}
                </li>
              ))}
            </ul>

            <a
              href="#order-form"
              className="bg-white text-primary text-xl font-black py-6 rounded-2xl text-center shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all animate-pulse-glow"
            >
              START YOUR FIBROID RECOVERY TODAY
            </a>
          </motion.div>
        </div>

        {/* POD & Shipping Note */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
        >
            <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-muted/50 px-8 py-4 rounded-2xl border border-border">
                <div className="flex items-center gap-2 font-bold text-foreground">
                    <span className="text-xl">🚚</span> FREE Delivery Nationwide
                </div>
                <div className="hidden md:block w-px h-4 bg-border" />
                <div className="flex items-center gap-2 font-bold text-primary">
                    <span className="text-xl">✅</span> Pay on Delivery (POD) available
                </div>
            </div>
        </motion.div>

        {/* SECTION 12 - GUARANTEE */}

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-accent/20 border-2 border-dashed border-primary/30 rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
            <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-12 h-12 text-primary" />
                </div>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                30-Day Satisfaction Guarantee
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
                If you are not satisfied with your progress, simply contact us within 30 days. We stand behind our protocol because we've seen it work for thousands of Nigerian women.
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

