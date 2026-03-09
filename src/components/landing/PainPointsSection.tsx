import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, History } from "lucide-react";
import fibroidStat from "@/assets/fibroid-stat.jpg";
import warningFibroid from "@/assets/warning-fibroid.jpg";

const painPoints = [
  "Heavy menstrual bleeding that drains your energy",
  "Lower abdominal pain or pressure",
  "People asking if you are pregnant because of your stomach",
  "Frequent urination caused by fibroids pressing the bladder",
  "Doctors recommending expensive surgery",
];

const PainPointsSection = () => {
  return (
    <section className="bg-card py-10 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
            Dear Nigerian Woman,
          </h2>
          <p className="text-xl md:text-2xl font-medium text-primary italic">
            Do you experience any of these?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-background rounded-3xl p-8 md:p-12 shadow-sm border border-border"
        >
          <ul className="space-y-4 max-w-2xl mx-auto">
            {painPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-4 text-foreground">
                <CheckCircle2 className="mt-1 flex-shrink-0 h-6 w-6 text-destructive" />
                <span className="text-lg md:text-xl font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <p className="text-lg font-bold text-foreground">If this sounds familiar, keep reading.</p>
          </div>
        </motion.div>

        {/* Agitate the Problem */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Most women are told only three options exist:
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "1️⃣", title: "Surgery", desc: "(Myomectomy)" },
              { num: "2️⃣", title: "Hormonal drugs", desc: "with side effects" },
              { num: "3️⃣", title: "Wait & See", desc: "“Just live with it”" },
            ].map((opt, i) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted/50 p-6 rounded-2xl border border-border text-center"
              >
                <div className="text-3xl mb-2">{opt.num}</div>
                <h4 className="font-bold text-lg">{opt.title}</h4>
                <p className="text-sm text-muted-foreground">{opt.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-3xl bg-destructive/5 border border-destructive/10 text-center"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
              But what many doctors don’t explain is that <strong>fibroids grow because the womb environment allows them to survive.</strong>
            </p>
            <p className="mt-4 text-xl font-bold text-destructive">
              Unless that environment changes, fibroids keep growing.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-2xl relative group"
          >
            <img src={fibroidStat} alt="Fibroid statistics" className="w-full h-auto transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-destructive mb-6 flex items-center gap-2">
              <AlertCircle className="w-8 h-8" /> DO NOT LET IT RESULT TO THIS
            </h3>
            <img src={warningFibroid} alt="Fibroid warning" className="rounded-3xl shadow-2xl w-full h-auto" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;

