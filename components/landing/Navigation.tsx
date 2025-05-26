import React from "react";
import { Button } from "../ui/button";
import { SignInButton, SignedOut } from "@clerk/nextjs";

const Navigation = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg">
        <div className="px-8 py-4 relative overflow-hidden">
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full w-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-white/20" />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-stone-800">DEV</span>
                <span className="text-amber-700">SKILL</span>
                <span className="text-amber-700 text-3xl">.</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-amber-700 font-medium">
                Home
              </a>
              <a
                href="#"
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                Our Course
              </a>
              <a
                href="#"
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                Pages
              </a>
              <a
                href="#"
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                Mentors
              </a>
              <a
                href="#"
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                Blog
              </a>
            </div>

            {/* Sign In Button */}
            <SignedOut>
              <SignInButton>
                <Button className="bg-gradient-to-r from-amber-700 to-stone-800 hover:from-amber-800 hover:to-stone-900 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
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
