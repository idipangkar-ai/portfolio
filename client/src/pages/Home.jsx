import HeroSection from "../sections/HeroSection";
import ProjectShowcase from "../sections/ProjectShowcase";
import CapabilitiesSection from "../sections/CapabilitiesSection";
import AboutPreview from "../sections/AboutPreview";
import ProductQuestionsSection from "../sections/ProductQuestionsSection";
import ContactCTA from "../sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductQuestionsSection />
      <ProjectShowcase limit={2} />
      <CapabilitiesSection />
      <ContactCTA />
    </>
  );
}
