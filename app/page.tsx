import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import LogoStrip from "@/components/LogoStrip/LogoStrip";
import Process from "@/components/Process/Process";
import Solutions from "@/components/Solutions/Solutions";
import Gallery from "@/components/Gallery/Gallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Process />
        <Solutions />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
