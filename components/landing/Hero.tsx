import React from "react";
import { Button } from "../ui/button";
import Navigation from "./Navigation";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-amber-400/30"></div>
          ))}
        </div>
      </div>

      {/* Multiple Light Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-stone-300/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-amber-200/30 via-transparent to-orange-300/40 pointer-events-none"></div>
      <Navigation />

      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
              #1 Learning Platform
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-serif">
              Smart Learning
              <br />
              Deeper & More
              <br />
              <span className="text-orange-500">-Amazing</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg font-light leading-relaxed">
              Proactively deploy unique intellectual capital without
              enterprise-class bricks-and-clicks synergy. Enthusiastically
              revolutionize intuitive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-medium">
                Start Free Trial →
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                How It Work
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <Image
              src="/girls.png"
              alt="Learning Platform"
              width={600}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <span className="bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium">
              About Us
            </span>
          </div>

          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            We are passionate about empowering learners{" "}
            <strong>Worldwide</strong> with high-quality, accessible & engaging
            education. Our mission offering a diverse range of courses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                25+
              </div>
              <div className="text-gray-600 font-light">
                Years of eLearning
                <br />
                Education Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                56k
              </div>
              <div className="text-gray-600 font-light">
                Students Enrolled in
                <br />
                LMSZONE Courses
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                170+
              </div>
              <div className="text-gray-600 font-light">
                Experienced Teacher&apos;s
                <br />
                Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
