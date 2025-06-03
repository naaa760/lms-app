import React from "react";
import { Button } from "../ui/button";
import { SignInButton, SignedOut } from "@clerk/nextjs";

const Navigation = () => {
  return (
    <nav className="fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-11/12 max-w-7xl px-2 md:px-0">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl shadow-lg">
        <div className="px-4 md:px-8 py-3 md:py-4 relative overflow-hidden">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-6 md:grid-cols-12 h-full w-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-white/20" />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-lg md:text-2xl font-bold">
                <span className="text-stone-800">EDU</span>
                <span className="text-amber-700">NO</span>
              </div>
            </div>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a
                href="#"
                className="text-amber-700 font-medium hover:text-amber-800 transition-colors text-sm xl:text-base"
              >
                Home
              </a>
              <a
                href="#"
                className="text-stone-700 hover:text-stone-900 transition-colors text-sm xl:text-base"
              >
                Our Course
              </a>
              <a
                href="#"
                className="text-stone-700 hover:text-stone-900 transition-colors text-sm xl:text-base"
              >
                Pages
              </a>
              <a
                href="#"
                className="text-stone-700 hover:text-stone-900 transition-colors text-sm xl:text-base"
              >
                Mentors
              </a>
              <a
                href="#"
                className="text-stone-700 hover:text-stone-900 transition-colors text-sm xl:text-base"
              >
                Blog
              </a>
            </div>

            {/* Sign In Button */}
            <SignedOut>
              <SignInButton>
                <Button className="bg-gradient-to-r from-amber-700 to-stone-800 hover:from-amber-800 hover:to-stone-900 text-white px-4 md:px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
