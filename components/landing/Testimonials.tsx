import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-20 ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/ll.jpg"
          alt="Background Pattern"
          fill
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-amber-400/30"></div>
          ))}
        </div>
      </div>

      {/* Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-amber-200/40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6 font-serif">
            See why I&apos;ll rated #1 in
            <br />
            Online <span className="text-orange-500">Platform tech</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl text-center border border-white/20">
            <div className="w-20 h-20 bg-gray-900 rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <span className="text-white text-2xl font-bold font-serif">
                CL
              </span>
            </div>

            <div className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
              My dynamic educational platform offers you the tools and resources
              to propel yourself towards a brighter future. With expert guidance
              video and audio & a supportive community,
            </div>

            <div className="mt-8">
              <div className="text-xl font-semibold text-gray-900 font-serif">
                CodeLine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
