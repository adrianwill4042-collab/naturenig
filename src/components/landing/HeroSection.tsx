import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import productImg from "@/assets/sos.jpeg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/30 pt-6 pb-10 md:pt-16 md:pb-24">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary tracking-wide mb-6 border border-primary/20"
>
  🌿 100% NATURAL HERBAL SOLUTION
</motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-[1.75rem] xs:text-3xl md:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.1] text-foreground text-balance max-w-5xl mx-auto"
        >
          Shrink Fibroids, Stop Heavy Bleeding, and Relieve Pelvic Pain <span className="text-primary italic">Without Surgery</span> Using the Utero Clear Hormone Balance Method
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground font-body leading-relaxed"
        >
          Discover how Nigerian women are restoring womb health by correcting the hormonal environment that allows fibroids to grow — helping reduce bleeding, shrink fibroids, and improve fertility naturally.
        </motion.p>

        {/* Quick Social Proof */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card p-5 rounded-2xl shadow-sm border border-border text-left relative overflow-hidden group hover:border-primary/30 transition-colors"
          >
            <div className="flex text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-sm italic text-foreground leading-relaxed">
              “After struggling with fibroids for years, my bleeding reduced and my stomach became flat again.”
            </p>
            <div className="mt-2 text-xs font-bold text-muted-foreground">— Mrs. Juliet K., Abuja</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card p-5 rounded-2xl shadow-sm border border-border text-left relative overflow-hidden group hover:border-primary/30 transition-colors"
          >
            <div className="flex text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-sm italic text-foreground leading-relaxed">
              “Doctors told me surgery was my only option. After 4 weeks I started seeing real changes.”
            </p>
            <div className="mt-2 text-xs font-bold text-muted-foreground">— Ngozi A., Lagos</div>
          </motion.div>
        </div>

        {/* Product Image & CTA */}
        <div className="mt-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-125 -z-10 animate-pulse-glow" />
            <img
              src={productImg}
              alt="Utero Clear supplement bottles"
              className="w-full max-w-sm rounded-3xl shadow-2xl animate-float"
              loading="eager"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-primary animate-bounce">
              <Check className="w-4 h-4" /> Check If This Treatment Is Right For You
            </div>
            <a
              href="#order-form"
              className="group relative inline-flex items-center justify-center rounded-full bg-primary px-12 py-5 text-xl font-bold text-primary-foreground shadow-[0_0_40px_rgba(22,101,52,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(22,101,52,0.5)] active:scale-95"
            >
              GET THE TREATMENT GUIDE
              <span className="absolute -top-3 -right-3 rounded-full bg-secondary px-3 py-1 text-xs font-black animate-pulse text-white shadow-lg">
                OFFER ENDS TODAY
              </span>
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-bold text-muted-foreground">
              <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Natural Formula</div>
              <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> 30-Day Guarantee</div>
              <div className="flex items-center gap-1.5 text-foreground"><span className="text-primary">🚚</span> Free Nationwide Delivery</div>
              <div className="flex items-center gap-1.5 text-foreground"><span className="text-primary">✅</span> Pay on Delivery</div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

