import { Button } from "../ui/button";
import Navigation from "./Navigation";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* New SVG Decorative Elements with Beautiful Gradient */}

      {/* First SVG - Top Left Area - Made responsive */}
      <svg
        className="absolute top-16 left-4 md:left-8 w-24 h-24 md:w-36 md:h-36 opacity-70 z-0 animate-pulse"
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

      {/* Second SVG - Top Right Area - Made responsive */}
      <svg
        className="absolute top-1/4 right-4 md:right-12 w-20 h-20 md:w-32 md:h-32 opacity-60 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="beautifulGradient2" cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#f1dec9" stopOpacity="1" />
            <stop offset="60%" stopColor="#c4a889" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a4907c" stopOpacity="0.6" />
          </radialGradient>
          <filter id="softGlow2">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          fill="url(#beautifulGradient2)"
          filter="url(#softGlow2)"
          d="M15.5,-31.3C16.1,-23.6,10,-12.7,17.3,-5.4C24.6,2,45.4,5.7,52.5,12.8C59.7,19.9,53.3,30.3,44.8,37.3C36.3,44.2,25.7,47.8,17.7,41.5C9.8,35.3,4.5,19.1,-10.2,21C-24.8,22.9,-48.7,42.9,-51.5,42.8C-54.4,42.8,-36.2,22.7,-34.1,7.7C-32,-7.4,-45.9,-17.4,-49.3,-27.7C-52.7,-38.1,-45.4,-48.8,-35.5,-52.2C-25.5,-55.6,-12.7,-51.7,-2.7,-47.5C7.4,-43.4,14.8,-39,15.5,-31.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Third SVG - Bottom Left Area - Made responsive */}
      <svg
        className="absolute bottom-1/3 left-4 md:left-1/5 w-20 h-20 md:w-28 md:h-28 opacity-50 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="beautifulGradient3"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#a4907c" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#b89d85" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#d4c4a7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f1dec9" stopOpacity="0.5" />
          </linearGradient>
          <filter id="softGlow3">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          fill="url(#beautifulGradient3)"
          filter="url(#softGlow3)"
          d="M17.9,-20C22.3,-8.8,24.3,-1.4,27.9,15.9C31.6,33.3,36.9,60.5,31.8,61C26.8,61.4,11.3,35.1,0.3,21.4C-10.7,7.7,-17.1,6.5,-16.7,4.9C-16.2,3.2,-8.9,1,-4.9,-10.2C-1,-21.3,-0.5,-41.4,3.1,-43.9C6.8,-46.4,13.5,-31.3,17.9,-20Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-4 h-full w-full">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border border-amber-400/30"></div>
          ))}
        </div>
      </div>

      {/* Multiple Light Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-stone-300/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-amber-200/30 via-transparent to-orange-300/40 pointer-events-none"></div>

      <Navigation />

      <div className="container mx-auto px-4 md:px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 relative min-h-[400px] md:min-h-[600px] order-2 lg:order-1">
            {/* Background Line Image */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
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
            <div className="relative z-10">
              <div className="inline-block bg-orange-100 text-orange-600 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                #1 Learning Platform
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight font-serif mt-6 md:mt-8">
                Smart Learning
                <br />
                Deeper & More
                <br />
                <span className="text-orange-500">-Amazing</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 max-w-lg font-light leading-relaxed mt-6 md:mt-8">
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

          {/* Right Content - Hero Image - Made responsive */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative SVGs around the image - Made responsive */}
            {/* Top right blob - Hidden on mobile */}
            <div className="hidden md:block absolute -top-10 lg:-top-20 -right-8 lg:-right-20 w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] animate-float-slow">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient
                    id="blobGradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#d4a373" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#ccd5ae" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#e9edc9" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#blobGradient1)"
                  d="M42.7,-54.9C53,-51.3,57.3,-35.7,57,-22C56.7,-8.3,51.8,3.5,45.1,11.7C38.4,19.9,29.8,24.6,22,29.4C14.2,34.2,7.1,39.2,-1.9,41.8C-10.9,44.4,-21.8,44.8,-27.1,39.1C-32.3,33.5,-31.9,21.8,-28.8,13.5C-25.8,5.2,-20.2,0.3,-21.2,-10C-22.2,-20.3,-29.8,-35.9,-27.3,-42C-24.9,-48.1,-12.5,-44.8,1.9,-47.4C16.2,-50,32.4,-58.4,42.7,-54.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/* Bottom left blob - Made smaller on mobile */}
            <div className="absolute -bottom-12 md:-bottom-24 -left-8 md:-left-16 w-[100px] h-[100px] md:w-[180px] md:h-[180px] animate-float">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient
                    id="blobGradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ddb892" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#b08968" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#9c6644" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#blobGradient2)"
                  d="M37.6,-66.8C49.9,-58.1,61.7,-50.3,56.2,-39.3C50.6,-28.3,27.8,-14.1,26.1,-1C24.4,12.2,43.9,24.4,50.4,37C56.8,49.7,50.4,62.9,39.8,57.6C29.3,52.2,14.6,28.4,0.7,27.2C-13.3,26,-26.6,47.6,-31.5,49.7C-36.4,51.8,-32.9,34.4,-28.7,22.9C-24.4,11.3,-19.3,5.7,-23.8,-2.6C-28.3,-10.8,-42.3,-21.7,-40.5,-22.6C-38.6,-23.6,-21,-14.7,-11.6,-25C-2.2,-35.3,-1.1,-64.9,5.8,-74.9C12.7,-84.9,25.4,-75.5,37.6,-66.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/* Top left blob - Hidden on small screens */}
            <div className="hidden sm:block absolute -top-8 md:-top-16 -left-10 md:-left-20 w-[100px] h-[100px] md:w-[160px] md:h-[160px] animate-float-delayed">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient
                    id="blobGradient3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#e6ccb2" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#ddb892" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#b08968" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#blobGradient3)"
                  d="M9.4,-20.7C9.6,-16.2,5.4,-8.4,15.4,-4.4C25.4,-0.4,49.6,-0.2,59.4,5.6C69.1,11.5,64.3,22.9,56.2,30.1C48,37.3,36.5,40.3,26.6,34.6C16.6,28.9,8.3,14.6,1.3,12.3C-5.6,9.9,-11.3,19.6,-23.8,26.8C-36.4,34,-55.9,38.8,-56.8,33.9C-57.7,29,-39.9,14.5,-38.6,0.7C-37.3,-13,-52.5,-26,-53,-33.2C-53.4,-40.5,-39.2,-41.9,-27.9,-40C-16.6,-38.1,-8.3,-32.9,-1.9,-29.7C4.6,-26.5,9.2,-25.2,9.4,-20.7Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/* Bottom right blob - Hidden on small screens */}
            <div className="hidden sm:block absolute -bottom-5 md:-bottom-10 -right-5 md:-right-10 w-[80px] h-[80px] md:w-[140px] md:h-[140px] animate-float-slow">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient
                    id="blobGradient4"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fefae0" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#e9edc9" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#ccd5ae" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="shimmer">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                    <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7" />
                  </filter>
                </defs>
                <path
                  fill="url(#blobGradient4)"
                  filter="url(#shimmer)"
                  d="M42.7,-54.9C53,-51.3,57.3,-35.7,57,-22C56.7,-8.3,51.8,3.5,45.1,11.7C38.4,19.9,29.8,24.6,22,29.4C14.2,34.2,7.1,39.2,-1.9,41.8C-10.9,44.4,-21.8,44.8,-27.1,39.1C-32.3,33.5,-31.9,21.8,-28.8,13.5C-25.8,5.2,-20.2,0.3,-21.2,-10C-22.2,-20.3,-29.8,-35.9,-27.3,-42C-24.9,-48.1,-12.5,-44.8,1.9,-47.4C16.2,-50,32.4,-58.4,42.7,-54.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <Image
              src="/girls.png"
              alt="Learning Platform"
              width={600}
              height={600}
              priority
              className="w-full h-auto relative z-10 max-w-md mx-auto lg:max-w-none"
            />
          </div>
        </div>

        {/* Stats Section - Made responsive */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-6 md:mb-8">
            <span className="bg-teal-100 text-teal-600 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              About Me
            </span>
          </div>

          <p className="text-center text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-4">
            I am passionate about empowering learners <strong>Worldwide</strong>{" "}
            with high-quality, accessible & engaging education. My mission is to
            offer a diverse range of courses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">
                3+
              </div>
              <div className="text-gray-600 font-light text-sm md:text-base">
                Years of eLearning
                <br />
                Education Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">
                10+
              </div>
              <div className="text-gray-600 font-light text-sm md:text-base">
                Students Enrolled in
                <br />
                LMSZONE Courses
              </div>
            </div>
            <div className="text-center">
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
