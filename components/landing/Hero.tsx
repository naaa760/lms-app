import { Button } from "../ui/button";
import Navigation from "./Navigation";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden w-full">
      {/* First SVG - Top Left Area - constrained */}
      <svg
        className="absolute top-16 left-2 md:left-8 w-24 md:w-36 h-24 md:h-36 opacity-70 z-0 animate-pulse"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="beautifulGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#a4907c" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#c4a889" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f1dec9" stopOpacity="0.7" />
          </linearGradient>
          <filter id="softGlow1">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          fill="url(#beautifulGradient1)"
          filter="url(#softGlow1)"
          d="M26.7,-39.3C32.9,-37.5,35.3,-27.3,36,-18.6C36.7,-9.8,35.7,-2.4,39.7,9.4C43.8,21.2,52.7,37.3,47.8,39.2C42.8,41.1,23.8,28.7,13.1,21C2.5,13.2,0.2,10.1,-7.7,13.6C-15.7,17.1,-29.3,27.1,-30.8,26.2C-32.3,25.3,-21.8,13.5,-19.9,4.9C-18.1,-3.7,-24.9,-9.1,-31.5,-22.7C-38.2,-36.2,-44.7,-58,-39.4,-60.3C-34.2,-62.6,-17.1,-45.5,-3.4,-40.1C10.2,-34.8,20.4,-41.2,26.7,-39.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Second SVG - Top Right Area - constrained */}
      <svg
        className="absolute top-1/4 right-2 md:right-12 w-20 md:w-32 h-20 md:h-32 opacity-60 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="beautifulGradient2" cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#f1dec9" stopOpacity="1" />
            <stop offset="60%" stopColor="#c4a889" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a4907c" stopOpacity="0.6" />
          </radialGradient>
        </defs>
        <path
          fill="url(#beautifulGradient2)"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.4C87.4,-31.7,90,-14.4,87.5,1.9C85,18.2,77.4,33.5,66.8,45.8C56.2,58.1,42.6,67.4,27.7,71.8C12.8,76.2,-3.4,75.7,-18.9,71.4C-34.4,67.1,-49.2,59,-59.7,47.2C-70.2,35.4,-76.4,19.9,-77.8,3.7C-79.2,-12.5,-75.8,-29.4,-67.2,-43.6C-58.6,-57.8,-44.8,-69.3,-29.4,-75.8C-14,-82.3,2,-83.8,18.4,-80.1C34.8,-76.4,51.6,-67.5,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Grid Pattern Background - contained */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-4 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-amber-400/20"></div>
          ))}
        </div>
      </div>

      {/* Light effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-stone-300/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-amber-200/20 via-transparent to-orange-300/20 pointer-events-none"></div>

      <Navigation />

      <div className="container mx-auto px-4 md:px-6 pt-32 md:pt-20 pb-16 relative z-10 max-w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          {/* Left Content - Text should come first on mobile */}
          <div className="space-y-6 md:space-y-8 relative min-h-[400px] md:min-h-[600px] order-1 w-full">
            {/* Background Line Image - contained */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
              <Image
                src="/line.png"
                alt="Background Pattern"
                fill
                style={{ objectFit: "contain" }}
                className="opacity-20"
                priority
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 px-2 md:px-0">
              <div className="inline-block bg-orange-100 text-orange-600 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                #1 Learning Platform
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight font-serif mt-6 md:mt-8 break-words">
                Smart Learning
                <br />
                Deeper & More
                <br />
                <span className="text-orange-500">-Amazing</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 max-w-full md:max-w-lg font-light leading-relaxed mt-6 md:mt-8">
                Proactively deploy unique intellectual capital without
                enterprise-class bricks-and-clicks synergy. Enthusiastically
                revolutionize intuitive.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
                <Button className="bg-amber-700 hover:bg-amber-950 text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium w-full sm:w-auto">
                  Start Free Trial →
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
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
          </div>

          {/* Right Content - Hero Image - Should come second on mobile */}
          <div className="relative order-2 w-full overflow-hidden">
            <Image
              src="/girls.png"
              alt="Learning Platform"
              width={600}
              height={600}
              priority
              className="w-full h-auto relative z-10 max-w-full mx-auto lg:max-w-none"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 overflow-hidden">
          <div className="text-center mb-8">
            <span className="bg-teal-100 text-teal-600 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium">
              About Me
            </span>
          </div>

          <p className="text-center text-base md:text-lg text-gray-600 max-w-4xl mx-auto mb-10 md:mb-16 font-light leading-relaxed px-4">
            I am passionate about empowering learners <strong>Worldwide</strong>{" "}
            with high-quality, accessible & engaging education. My mission is to
            offer a diverse range of courses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">
                3+
              </div>
              <div className="text-gray-600 font-light text-sm md:text-base">
                Years of eLearning
                <br />
                Education Experience
              </div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">
                10+
              </div>
              <div className="text-gray-600 font-light text-sm md:text-base">
                Students Enrolled in
                <br />
                LMSZONE Courses
              </div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">
                10+
              </div>
              <div className="text-gray-600 font-light text-sm md:text-base">
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
