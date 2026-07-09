import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Tokenomics />
        <Roadmap />
        <Faq />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
