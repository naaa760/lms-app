import { Button } from "../ui/button";
import Navigation from "./Navigation";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden w-full">
      {/* Remove all decorative SVGs that cause overflow on mobile */}

      {/* Simplified grid background that won't cause overflow */}
      <div className="absolute inset-0 opacity-10 md:opacity-30">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-1 md:gap-4 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-amber-400/20"></div>
          ))}
        </div>
      </div>

      {/* Light effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-stone-300/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-amber-200/20 via-transparent to-orange-300/20 pointer-events-none"></div>

      <Navigation />

      {/* Main content with proper mobile constraints */}
      <div className="w-full max-w-full px-4 md:px-6 pt-32 md:pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh]">
            {/* Left Content - Text first on mobile */}
            <div className="space-y-6 md:space-y-8 order-1 w-full">
              {/* Background pattern - contained properly */}
              <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 md:opacity-20">
                <Image
                  src="/line.png"
                  alt="Background Pattern"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center lg:text-left w-full">
                <div className="inline-block bg-orange-100 text-orange-600 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                  #1 Learning Platform
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-serif mt-6 md:mt-8 break-words">
                  Smart Learning
                  <br />
                  Deeper & More
                  <br />
                  <span className="text-orange-500">-Amazing</span>
                </h1>

                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mt-6 md:mt-8 max-w-full lg:max-w-lg mx-auto lg:mx-0">
                  Proactively deploy unique intellectual capital without
                  enterprise-class bricks-and-clicks synergy. Enthusiastically
                  revolutionize intuitive.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 w-full max-w-full">
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

            {/* Right Content - Image second on mobile */}
            <div className="relative order-2 w-full max-w-full">
              {/* Only show decorative elements on larger screens */}
              <div className="hidden lg:block absolute -top-16 -right-16 w-[160px] h-[160px] animate-float-slow opacity-30">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient
                      id="blob1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#d4a373" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#ccd5ae"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#blob1)"
                    d="M42.7,-54.9C53,-51.3,57.3,-35.7,57,-22C56.7,-8.3,51.8,3.5,45.1,11.7C38.4,19.9,29.8,24.6,22,29.4C14.2,34.2,7.1,39.2,-1.9,41.8C-10.9,44.4,-21.8,44.8,-27.1,39.1C-32.3,33.5,-31.9,21.8,-28.8,13.5C-25.8,5.2,-20.2,0.3,-21.2,-10C-22.2,-20.3,-29.8,-35.9,-27.3,-42C-24.9,-48.1,-12.5,-44.8,1.9,-47.4C16.2,-50,32.4,-58.4,42.7,-54.9Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              <div className="hidden lg:block absolute -bottom-10 -left-16 w-[140px] h-[140px] animate-float opacity-30">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient
                      id="blob2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#fefae0" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#e9edc9"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#blob2)"
                    d="M37.6,-66.8C49.9,-58.1,61.7,-50.3,56.2,-39.3C50.6,-28.3,27.8,-14.1,26.1,-1C24.4,12.2,43.9,24.4,50.4,37C56.8,49.7,50.4,62.9,39.8,57.6C29.3,52.2,14.6,28.4,0.7,27.2C-13.3,26,-26.6,47.6,-31.5,49.7C-36.4,51.8,-32.9,34.4,-28.7,22.9C-24.4,11.3,-19.3,5.7,-23.8,-2.6C-28.3,-10.8,-42.3,-21.7,-40.5,-22.6C-38.6,-23.6,-21,-14.7,-11.6,-25C-2.2,-35.3,-1.1,-64.9,5.8,-74.9C12.7,-84.9,25.4,-75.5,37.6,-66.8Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              {/* Image container */}
              <div className="w-full max-w-full flex justify-center">
                <Image
                  src="/girls.png"
                  alt="Learning Platform"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto max-w-sm md:max-w-md lg:max-w-full relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 md:mt-24 w-full max-w-full">
            <div className="text-center mb-8 md:mb-12">
              <span className="bg-teal-100 text-teal-600 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium">
                About Me
              </span>
            </div>

            <p className="text-center text-base md:text-lg text-gray-600 max-w-4xl mx-auto mb-10 md:mb-16 font-light leading-relaxed px-4">
              I am passionate about empowering learners{" "}
              <strong>Worldwide</strong> with high-quality, accessible &
              engaging education. My mission is to offer a diverse range of
              courses.
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
    </div>
  );
};

export default Hero;
