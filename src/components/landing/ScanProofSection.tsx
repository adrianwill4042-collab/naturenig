import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import scanProof from "@/assets/proof3.jpeg";
import patientProof from "@/assets/proof4.jpeg";

const ScanProofSection = () => {
  return (
    <section className="bg-muted/30 py-10 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">MEDICAL PROOF & SCANS</span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-foreground">
            Verified Medical Transformations
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't just ask you to believe—we show you the results through certified ultrasound reports.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Primary Before/After Scan */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-[2rem] border border-border shadow-2xl p-6 md:p-8 flex flex-col justify-between"
            >
                <div>
                    <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Before vs After Protocol</h3>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="relative cursor-zoom-in rounded-2xl overflow-hidden border-2 border-white shadow-lg group">
                                <img 
                                    src={scanProof} 
                                    alt="Ultrasound Scan Comparison" 
                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-white/90 p-3 rounded-full">
                                        <Search className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full">
                                    VERIFIED SCAN
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl bg-black/90 border-none p-0 flex items-center justify-center h-[90vh]">
                            <img src={scanProof} alt="Full Scan Report" className="max-h-full max-w-full object-contain" />
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-destructive/5 p-4 rounded-xl border-l-2 border-destructive">
                        <div className="text-[10px] uppercase font-bold text-destructive mb-1">Before</div>
                        <div className="text-xs font-semibold leading-tight">Multiple fibroids detected in uterine wall.</div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-xl border-l-2 border-primary">
                        <div className="text-[10px] uppercase font-bold text-primary mb-1">After</div>
                        <div className="text-xs font-semibold leading-tight">No visible fibroids. Clear uterine environment.</div>
                    </div>
                </div>
            </motion.div>

            {/* Patient holding report */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-[2rem] border border-border shadow-2xl p-6 md:p-8 flex flex-col"
            >
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Verified Success Stories</h3>
                <div className="relative flex-1 rounded-2xl overflow-hidden border-2 border-white shadow-lg group">
                    <img 
                        src={patientProof} 
                        alt="Patient with scan results" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="mt-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-border/50">
                    <p className="text-sm font-medium text-foreground italic">
                        "Seeing the 'No More Fibroids' on my report was the best day of my life. My family is finally at peace."
                    </p>
                    <div className="mt-2 text-xs font-bold text-primary">— Aisha O., Lagos</div>
                </div>
            </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic text-sm">
            * Medical reports shown are authentic patient results. Individual timelines may vary based on physiological factors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScanProofSection;


