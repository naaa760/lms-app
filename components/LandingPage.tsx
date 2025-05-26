import React from "react";
import Hero from "../components/landing/Hero";
import CourseGrid from "../components/landing/CourseGrid";
import Categories from "../components/landing/Categories";
import GrowthSection from "../components/landing/GrowthSection";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-neutral-200 relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-stone-300/30">
              <div className="h-full w-full grid grid-cols-2">
                <div className="border-r border-stone-300/30" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Light Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-amber-100/20 pointer-events-none"></div>

      {/* Radial Gradient Accents */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-stone-300/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <CourseGrid />
        <Categories />
        <GrowthSection />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
