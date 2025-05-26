import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const GrowthSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-300 via-amber-200 to-orange-200 relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/p.jpg"
          alt="Background Pattern"
          fill
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-yellow-200/35 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-orange-100/80 to-orange-200/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="w-full h-96 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src="/std.jpg"
                        alt="Background Pattern"
                        fill
                        priority
                        sizes="100vw"
                        quality={100}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 font-serif">
                    Professional Growth
                  </h3>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 font-serif">
                      13.5k+
                    </div>
                    <div className="text-sm text-gray-500 font-light">
                      Number of courses
                      <br />
                      Built Out
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                Why Us
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight font-serif">
              Growth Skill With{" "}
              <span className="text-orange-500">Devskill</span>
              <br />
              Academy & Accelerate to
              <br />
              your Better future
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Embrace the transformative journey of learning with Devskill
              knowledge becomes a catalyst for progress.
            </p>

            <p className="text-gray-600 leading-relaxed font-light">
              Our dynamic educational platform offers you the tools and
              resources to propel yourself towards a brighter future. With
              expert guidance & a supportive community.
            </p>

            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium">
              Browse Course
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
