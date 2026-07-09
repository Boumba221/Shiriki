import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Features from "@/components/Features";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <FeatureGrid />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
