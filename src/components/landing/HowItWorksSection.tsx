import { motion } from "framer-motion";
import { CheckCircle2, Zap, Droplets, Heart, Activity } from "lucide-react";

const benefits = [
  "Reduced bleeding",
  "Less pelvic pain",
  "Smaller stomach size",
  "Improved fertility health",
];

const HowItWorksSection = () => {
  return (
    <section className="bg-background py-10 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Utero Clear Hormone Balance Method
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Utero Clear focuses on correcting the internal conditions that allow fibroids to grow. Instead of simply masking symptoms, this protocol works by:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Zap, title: "Supporting hormone balance", desc: "Regulates estrogen levels to stop fibroid fuel." },
              { icon: Droplets, title: "Reducing inflammation", desc: "Decreases the swelling and irritation in the womb." },
              { icon: Activity, title: "Improving womb circulation", desc: "Enhances blood flow to support natural healing." },
              { icon: Heart, title: "Gradual Shrinkage", desc: "Helping fibroids lose mass and break down naturally." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Many women report improvements such as:
            </h3>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium text-foreground">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Why This Works */}
        <div className="mt-24 pt-16 border-t border-border">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Why Fibroids Grow</h3>
              <p className="text-muted-foreground mb-6 text-lg">Fibroids thrive in a womb environment affected by:</p>
              <ul className="space-y-4">
                {[
                  "Hormonal imbalance (Estrogen dominance)",
                  "Poor blood circulation in the pelvic area",
                  "Chronic Inflammation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium bg-card p-4 rounded-xl border border-border">
                    <span className="w-2 h-2 rounded-full bg-destructive" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-foreground italic">If these factors are corrected, fibroids often lose the conditions they need to grow.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary rounded-3xl p-8 md:p-10 text-primary-foreground shadow-2xl"
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 italic underline underline-offset-8 decoration-white/20">How Utero Clear Helps</h3>
              <p className="mb-8 text-primary-foreground/90 text-lg">The protocol works by supporting:</p>
              <ul className="grid gap-4">
                {[
                  "Hormonal regulation",
                  "Natural detoxification pathways",
                  "Uterine circulation",
                  "Reproductive health balance",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

