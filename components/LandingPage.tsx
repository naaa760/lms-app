import React from "react";
import Hero from "../components/landing/Hero";
import CourseGrid from "../components/landing/CourseGrid";

import GrowthSection from "../components/landing/GrowthSection";
import Testimonials from "../components/landing/Testimonials";

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
        {/* Hero Section with Bottom Gradient */}
        <div className="relative">
          <Hero />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-amber-50/50 to-transparent" />
          <CourseGrid />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-50/30 to-transparent" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
          <GrowthSection />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
          <Testimonials />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-50/20 to-transparent" />
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
