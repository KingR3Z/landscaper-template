"use client";

import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Philosophy from "@/components/sections/Philosophy";
import Landscaping from "@/components/sections/Landscaping";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Intro />
        <Services />
        <WhyChoose />
        <Philosophy />
        <Landscaping />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
