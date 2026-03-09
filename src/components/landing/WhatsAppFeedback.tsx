import { motion } from "framer-motion";

const whatsappProofs = [
  "https://fibroidtreatment.xyz/img/test.webp",
  "https://fibroidtreatment.xyz/img/testim.webp",
  "https://fibroidtreatment.xyz/img/testimo.webp",
  "https://fibroidtreatment.xyz/img/testimon.webp",
  "https://fibroidtreatment.xyz/img/testimony.webp",
  "https://fibroidtreatment.xyz/img/testimonial.webp",
];

const facebookStyleComments = [
  { name: "Mahmud Kayode", text: "Yes, I got it for my wife. She had multiple fibroids, and after using this, her pain reduced drastically and her tummy came down." },
  { name: "Fasoyinu Oyedamola", text: "Yes, it helped me when I was almost scheduled for surgery. It worked for me!" },
  { name: "Chinenye Uzo", text: "I had severe lower back pain and heavy bleeding every month because of fibroids. I’ve used this product for 2 months now, and my last period was normal!" },
];

const WhatsAppFeedback = () => {
  return (
    <section className="bg-muted/30 py-10 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* WhatsApp Proofs */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">WhatsApp & Customer Feedback</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {whatsappProofs.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl overflow-hidden border border-border bg-card group cursor-pointer shadow-sm hover:shadow-lg transition-all"
              >
                <img src={src} alt="WhatsApp Testimonial" className="w-full h-auto group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facebook Style Comments */}
        <div className="max-w-2xl mx-auto bg-card rounded-3xl border border-border p-6 md:p-8 shadow-sm">
          <h3 className="font-bold text-lg mb-6 border-b pb-4 border-border text-foreground">Community Comments</h3>
          <div className="space-y-6">
            {facebookStyleComments.map((c, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0" />
                <div className="bg-muted/50 p-4 rounded-2xl flex-1">
                  <div className="font-bold text-sm text-primary mb-1">{c.name}</div>
                  <p className="text-sm text-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppFeedback;
