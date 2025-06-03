import React, { useEffect } from "react";
// "next/image" is not available; we'll use <img> for decorative images
// CompanionCard, CompanionsList, and CTA are custom components from the project
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

// Helper: Animate-on-scroll for cards/headings
const useAnimateOnMount = (query = ".mount-fade-up", delayStep = 120) => {
  useEffect(() => {
    const elements = document.querySelectorAll(query);
    elements.forEach((el, i) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(32px)";
      setTimeout(() => {
        (el as HTMLElement).style.transition =
          "opacity 0.8s cubic-bezier(.4,2,.3,1.11),transform 0.8s cubic-bezier(.4,2,.3,1.11)";
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 300 + delayStep * i);
    });
  }, [query, delayStep]);
};

const HomePage = () => {
  // Dynamically import the Playfair Display font once
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useAnimateOnMount();

  // Fetch data (simulate with Promise.resolve for demo; replace with real data-fetching in prod)
  const [companions, setCompanions] = React.useState<unknown[]>([]);
  const [recentSessionsCompanions, setRecentSessionsCompanions] =
    React.useState<unknown[]>([]);
  useEffect(() => {
    getAllCompanions({ limit: 3 }).then(setCompanions);
    getRecentSessions(10).then(setRecentSessionsCompanions);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Mobile Optimization */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />

        {/* Decorative Elements - Responsive */}
        <div className="absolute top-10 md:top-20 right-4 md:right-10 w-48 md:w-96 h-48 md:h-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-10 md:bottom-20 left-4 md:left-10 w-40 md:w-80 h-40 md:h-80 rounded-full bg-teal-400/10 blur-3xl" />

        {/* Grid Pattern - Smaller on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#10b981_1px,transparent_0)] bg-[size:24px_24px] md:bg-[size:32px_32px] opacity-[0.03]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          {/* Header Section */}
          <div className="text-center md:text-left space-y-4 md:space-y-6 mount-fade-up">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              ✨ Welcome back to your learning journey
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Popular{" "}
              <span
                className="text-emerald-600 italic"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Companions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              Continue your educational adventure with AI-powered tutors
            </p>
          </div>

          {/* Companions Grid - Responsive */}
          <section className="mount-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {companions.map((companion, i) => (
                <div
                  key={companion.id}
                  className="mount-fade-up transition-transform duration-700 hover:-translate-y-5 group"
                  style={{
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  {/* Card Glow effect */}
                  <div
                    className="absolute opacity-60 
                                  left-1/2 -translate-x-1/2 -z-10 top-1/2 -translate-y-1/2
                                  w-[85%] h-[90%] blur-2xl rounded-3xl
                                  pointer-events-none
                                  group-hover:scale-105 transition-transform duration-700
                                 "
                    style={{
                      background: `radial-gradient(circle at 60% 40%, ${getSubjectColor(
                        companion.subject,
                        0.16
                      )}, transparent 66%)`,
                    }}
                  ></div>
                  {/* Glassmorphic Card */}
                  <div
                    className="backdrop-blur-lg border border-white/50 rounded-xl shadow-xl"
                    style={{
                      background:
                        "linear-gradient(120deg,rgba(253,200,48,0.12) 0%,rgba(255,255,255,0.76) 60%,rgba(101,78,163,0.08) 100%)",
                      boxShadow:
                        "0 6px 42px 3px rgba(253,200,48,0.07), 0 1.5px 26px 1px rgba(101,78,163,0.08)",
                    }}
                  >
                    <CompanionCard
                      {...companion}
                      color={getSubjectColor(companion.subject)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Two Column Layout for Desktop, Stacked for Mobile */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Recent Sessions - Takes full width on mobile, 2/3 on desktop */}
            <div className="lg:col-span-2 mount-fade-up">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/20 overflow-hidden">
                <div className="p-6 md:p-8">
                  {/* Mobile-friendly header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Recently completed sessions
                      </h2>
                      <p className="text-gray-600 text-sm md:text-base">
                        Continue where you left off
                      </p>
                    </div>
                  </div>

                  {/* Table Header - Hidden on very small screens */}
                  <div className="hidden sm:grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Lessons
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Subject
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Duration
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Action
                    </div>
                  </div>

                  {/* Sample Recent Sessions - Mobile Optimized */}
                  <div className="space-y-4">
                    {/* Session 1 */}
                    <div className="bg-white/50 rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
                        <div className="sm:col-span-1">
                          <h3 className="font-bold text-gray-900 text-lg">
                            SAM
                          </h3>
                          <p className="text-gray-600 text-sm">
                            he will help with the problem solving
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                            <span className="text-pink-600">💻</span>
                          </div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base">
                            Computer Science
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                            <span className="text-emerald-600 text-sm">⏱</span>
                          </div>
                          <span className="text-gray-700 font-medium">
                            10 min
                          </span>
                        </div>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                          Continue
                        </button>
                      </div>
                    </div>

                    {/* Session 2 */}
                    <div className="bg-white/50 rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
                        <div className="sm:col-span-1">
                          <h3 className="font-bold text-gray-900 text-lg">
                            sam
                          </h3>
                          <p className="text-gray-600 text-sm">
                            wanna know about how economy actually
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-green-600">📊</span>
                          </div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base">
                            Economics
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                            <span className="text-emerald-600 text-sm">⏱</span>
                          </div>
                          <span className="text-gray-700 font-medium">
                            15 min
                          </span>
                        </div>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section - Stacked below on mobile */}
            <div className="lg:col-span-1 mount-fade-up">
              <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden h-full min-h-[400px] relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)] pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center text-center text-white">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Start Your Journey
                    </h3>
                    <p className="text-white/90 mb-6 text-sm md:text-base">
                      Discover new subjects and expand your knowledge with our
                      AI companions
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-xl transition-all duration-300 font-medium">
                      Browse All Companions
                    </button>
                    <button className="w-full bg-white text-emerald-600 hover:bg-white/90 px-6 py-3 rounded-xl transition-all duration-300 font-medium">
                      Create New Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Keyframe Animations */}
      <style>
        {`
        .mount-fade-up {
          opacity: 0;
          transform: translateY(36px);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 4s infinite;
        }
        `}
      </style>
    </div>
  );
};

export default HomePage;
