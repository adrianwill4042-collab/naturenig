import UrgencyBanner from "@/components/landing/UrgencyBanner";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ScanProofSection from "@/components/landing/ScanProofSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PricingSection from "@/components/landing/PricingSection";
import OrderFormSection from "@/components/landing/OrderFormSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import WhatsAppFeedback from "@/components/landing/WhatsAppFeedback";
import StickyBar from "@/components/landing/StickyBar";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";
import SocialNotifications from "@/components/landing/SocialNotifications";
import StoryBridge from "@/components/landing/StoryBridge";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0 overflow-x-hidden w-full">
      <UrgencyBanner />
      <SocialProofSection />
      <HeroSection />
      
      <StoryBridge text="But for too many Nigerian women, the search for relief feels like a never-ending cycle of disappointment..." />
      
      <PainPointsSection />
      
      <StoryBridge text="What if you could stop feeding the fibroids and start restoring your womb's natural environment instead?" />
      
      <HowItWorksSection />
      
      <StoryBridge text="The results aren't just medical reports—they are lives transformed, families restored, and futures reclaimed. We let the medical scans and real patient feedback speak for us." />
      
      <ScanProofSection />
      <WhatsAppFeedback />
      
      <StoryBridge text="Visual and medical proof is essential—because you deserves more than just promises; you deserve verified results that you can see for yourself." />

      
      <BenefitsSection />
      <PricingSection />
      <OrderFormSection />
      <FAQSection />
      <FinalCTASection />
      <StickyBar />
      <FloatingWhatsApp />
      <ExitIntentPopup />
      <SocialNotifications />
    </div>
  );
};

export default Index;


