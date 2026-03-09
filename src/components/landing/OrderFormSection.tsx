import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

const OrderFormSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", altPhone: "", address: "", city: "", package: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappMessage = `Hi, I want to order Utero Clear.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}, ${formData.city}\nPackage: ${formData.package}`;

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    
    // Submit to Formspree
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xzzrvwaa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Order: ${formData.package} - ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Order received! Redirecting to WhatsApp...");
        setTimeout(() => {
          window.open(`https://api.whatsapp.com/send?phone=2347086865133&text=${encodeURIComponent(whatsappMessage)}`, "_blank");
        }, 1500);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Connection error. Please check your internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="order-form" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-border bg-card p-12 shadow-lg text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Order Received!</h2>
            <p className="mt-2 text-muted-foreground">
              Thank you for choosing Utero Clear. We are now redirecting you to WhatsApp to finalize your delivery details.
            </p>
            <Button 
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=2347086865133&text=${encodeURIComponent(whatsappMessage)}`, "_blank")}
              className="mt-8 rounded-xl px-10 py-6"
            >
              Continue to WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="bg-background py-10 md:py-24">
      <div className="container mx-auto px-4 max-w-xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Order Utero Clear</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            🛡️ 60-Day Money Back Guarantee — If you're not satisfied, we'll refund you. No questions asked.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-lg"
        >
          <div>
            <Label htmlFor="name" className="font-body">Full Name</Label>
            <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" />
          </div>
          <div>
            <Label htmlFor="email" className="font-body">Email Address</Label>
            <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="font-body">Mobile Number</Label>
              <Input id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="e.g. 08012345678" />
            </div>
            <div>
              <Label htmlFor="altPhone" className="font-body">Alt Phone (optional)</Label>
              <Input id="altPhone" name="altPhone" value={formData.altPhone} onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label htmlFor="address" className="font-body">Shipping Address</Label>
            <Input id="address" name="address" required value={formData.address} onChange={handleChange} placeholder="House No, Street Name, Area" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city" className="font-body">State / City</Label>
              <Input id="city" name="city" required value={formData.city} onChange={handleChange} placeholder="e.g. Lagos" />
              <p className="text-[10px] text-primary font-bold mt-1">Please enter your current location for delivery.</p>
            </div>
          </div>

          <div>
            <Label htmlFor="package" className="font-body">Select Package</Label>
            <select
              id="package"
              name="package"
              required
              value={formData.package}
              onChange={handleChange}
              className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-lg font-bold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Choose your protocol</option>
              <option value="Utero Clear Full Protocol – ₦35,000">Utero Clear Full Protocol – ₦35,000 (Limited Offer)</option>
              <option value="2x Full Protocol – ₦65,000">2x Full Protocol – ₦65,000 (Save ₦5,000)</option>
              <option value="3x Full Protocol – ₦90,000">3x Full Protocol – ₦90,000 (Best Value - Save ₦15,000)</option>
            </select>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full animate-pulse-glow rounded-xl py-6 text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "🔒 Proceed to Secure Payment"
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground">Payments are processed securely.</p>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderFormSection;
