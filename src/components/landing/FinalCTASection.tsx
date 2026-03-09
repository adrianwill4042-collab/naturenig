import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="bg-primary py-12 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full opacity-50" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        {/* SECTION 16 - FINAL REMINDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8">
            You deserve to live without:
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "Heavy bleeding",
              "Pelvic pain",
              "Embarrassing stomach swelling",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full text-white font-bold text-lg border border-white/20">
                <div className="w-2 h-2 rounded-full bg-yellow-400" /> {item}
              </div>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Thousands of women are taking action to restore their womb health. <strong>Now it’s your turn.</strong>
          </p>
        </motion.div>

        {/* SECTION 13 & 14 - FINAL CTA & URGENCY */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-8 border-primary-foreground/10"
        >
            <div className="flex items-center justify-center gap-2 text-primary font-black text-sm uppercase tracking-widest mb-6 border-2 border-primary/20 px-4 py-1.5 rounded-full inline-flex">
                <Zap className="w-4 h-4 fill-current" /> Limited Consultation Slots
            </div>
            
            <h3 className="font-display text-2xl md:text-4xl font-black text-foreground mb-6">
                If fibroids are affecting your life, the earlier you address them, the easier they are to manage.
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Click below to see if this treatment is right for you.
            </p>

            <a
                href="#order-form"
                className="inline-block w-full rounded-2xl bg-destructive px-10 py-6 text-xl md:text-2xl font-black text-white shadow-2xl transition-all hover:scale-105 active:scale-95 animate-pulse-glow"
            >
                START YOUR FIBROID RECOVERY TODAY
            </a>

            <div className="mt-8 p-4 bg-destructive/5 rounded-2xl inline-block border border-destructive/10">
                <p className="text-destructive font-black text-lg">
                    ⚠️ Due to high demand, consultations are limited. Only 20 treatment slots available this week.
                </p>
            </div>
        </motion.div>

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-white/70 font-bold uppercase tracking-widest text-sm"
        >
            Check If Utero Clear Is Right For You
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTASection;

