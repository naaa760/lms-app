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
    const id = "playfair-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // Mount animation for fade-in of elements
  useAnimateOnMount(".mount-fade-up", 120);

  // Fetch data (simulate with Promise.resolve for demo; replace with real data-fetching in prod)
  const [companions, setCompanions] = React.useState<unknown[]>([]);
  const [recentSessionsCompanions, setRecentSessionsCompanions] =
    React.useState<unknown[]>([]);
  useEffect(() => {
    getAllCompanions({ limit: 3 }).then(setCompanions);
    getRecentSessions(10).then(setRecentSessionsCompanions);
  }, []);

  return (
    <div
      className="relative min-h-screen font-sans"
      style={{ fontFamily: "'Playfair Display', ui-serif, serif" }}
    >
      {/* --- Decorative Gradients, Shine and Patterns --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dreamy Orange-Purple Glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[900px] rounded-full bg-gradient-to-br from-[#fdc830]/30 via-[#f37335]/40 to-[#654ea3]/20 blur-[200px] opacity-80 animate-pulse" />
        {/* Pink Shimmer Overlay */}
        <div className="absolute left-[-200px] top-3/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-pink-400/20 via-fuchsia-300/20 to-transparent blur-3xl" />
        {/* Subtle white shimmer */}
        <div className="absolute right-[-180px] top-20 w-[380px] h-[300px] rounded-full bg-white/20 blur-2xl opacity-25" />
        {/* Dynamic Grid Patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#a78bfa_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#fdc830_1px,transparent_0)] bg-[size:38px_38px] opacity-[0.03]" />
        {/* Sparkle Grid Pattern - Top Right */}
        <div className="absolute top-40 right-20 w-[300px] h-[300px] opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#fdc830_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_2px_2px,#f37335_1px,transparent_0)] bg-[size:22px_22px]" />
          <div className="absolute inset-0 rotate-12 scale-75 animate-pulse delay-150 bg-[radial-gradient(circle_at_2px_2px,#654ea3_1px,transparent_0)] bg-[size:18px_18px]" />
        </div>
        {/* Sparkle Grid Pattern - Bottom Left */}
        <div className="absolute bottom-60 left-40 w-[400px] h-[400px] opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,#fdc830_1px,transparent_1px)] bg-[size:25px_25px]" />
          <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_2px_2px,#f37335_1px,transparent_0)] bg-[size:28px_28px]" />
        </div>
        {/* Shimmering Effect */}
        <div className="absolute top-1/4 right-1/3 w-[200px] h-[200px]">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        {/* Decorative Image with sparkle overlay */}
        <div className="absolute bottom-0 left-0 hidden md:block">
          <div className="relative">
            <img
              src="/li2.png"
              alt="Decorative"
              width={350}
              height={350}
              className="object-cover opacity-55 rounded-2xl"
            />
            {/* Sparkle overlay for image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#fdc830_1px,transparent_0)] bg-[size:20px_20px] opacity-10 animate-pulse" />
          </div>
        </div>
      </div>

      {/* --- MAIN CONTAINER --- */}
      <main className="relative z-10 container min-h-screen flex flex-col justify-center mx-auto px-2 sm:px-6 pt-28 pb-12">
        {/* Header Banner */}
        <div
          className="mount-fade-up text-center mb-16 rounded-[30px] p-10 max-w-3xl mx-auto border border-yellow-300/25 shadow-2xl backdrop-blur-xl
                     bg-gradient-to-br from-[#fffbfa]/80 via-[#fffaf4]/80 to-[#fffafe]/60
                     ring-2 ring-yellow-200/30"
          style={{
            background:
              "linear-gradient(111deg, rgba(253,200,48,0.11) 0%, #fff8ee80 67%, #654ea330 100%)",
            fontWeight: "700",
            filter: "drop-shadow(0px 2px 32px rgba(253,200,48,0.08))",
          }}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-7"
            style={{
              background:
                "linear-gradient(90deg, #fdc830 10%, #f37335 70%, #654ea3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter:
                "drop-shadow(0 6px 11px #fdc83044) drop-shadow(0 0px 10px #f3733530)",
              fontFamily: "'Playfair Display',serif",
              letterSpacing: "0.005em",
            }}
          >
            Popular Companions
          </h1>
          <p
            className="text-stone-600 max-w-2xl mx-auto text-lg font-medium tracking-tight"
            style={{ textShadow: "0 1px 9px #fff4" }}
          >
            Discover your perfect{" "}
            <span className="font-bold text-yellow-600">
              learning companion
            </span>{" "}
            and start your educational journey today.
          </p>
        </div>

        {/* Companion Cards Grid */}
        <section className="mb-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
          {/* Sparkle Grid for Cards Section */}
          <div className="absolute -top-10 -right-10 w-[200px] h-[200px] opacity-10 rotate-12">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#fdc830_1px,transparent_1px)] bg-[size:15px_15px]" />
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_2px_2px,#f37335_1px,transparent_0)] bg-[size:18px_18px]" />
          </div>

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
        </section>

        {/* Recent Sessions & CTA */}
        <div className="grid lg:grid-cols-3 gap-10 relative">
          {/* Sparkle decoration for this section */}
          <div className="absolute -left-20 top-1/2 w-[150px] h-[150px] opacity-15">
            <div className="absolute inset-0 bg-[linear-gradient(-60deg,#654ea3_1px,transparent_1px)] bg-[size:12px_12px]" />
            <div className="absolute inset-0 animate-pulse delay-300 bg-[radial-gradient(circle_at_2px_2px,#fdc830_1px,transparent_0)] bg-[size:16px_16px]" />
          </div>

          {/* Recent Session Companions */}
          <div
            className="mount-fade-up lg:col-span-2 backdrop-blur-lg bg-gradient-to-br from-white/70 via-yellow-50/70 to-purple-50/60 
              rounded-2xl px-8 py-9 shadow-xl border border-yellow-200/30 ring-1 ring-yellow-100/10"
            style={{
              background:
                "linear-gradient(111deg, #fffbeed0 0%, #ffe7ee 60%, #f7f0ff 100%)",
              boxShadow:
                "0 3px 35px 5px rgba(253,200,48,0.07), 0 1.5px 22px 1px rgba(101,78,163,0.08)",
            }}
          >
            <CompanionsList
              title={
                <span>
                  <span className="text-xl font-bold text-yellow-700 pr-2">
                    Recently
                  </span>
                  <span className="text-stone-700">completed sessions</span>
                </span>
              }
              companions={recentSessionsCompanions}
              classNames="w-full"
            />
          </div>
          {/* Shimmer CTA with glow */}
          <div
            className="mount-fade-up bg-gradient-to-br from-[#654ea3] via-[#fdc830] to-[#f37335] rounded-2xl shadow-2xl p-0 overflow-hidden
            border border-purple-900/30 flex flex-col items-stretch justify-center"
            style={{
              minHeight: "326px",
              boxShadow: "0px 0px 45px 2px #fdc83022, 0 2px 28px 6px #654ea335",
              position: "relative",
            }}
          >
            {/* Shimmer Overlay */}
            <div className="absolute left-0 top-0 w-full h-full opacity-15 pointer-events-none select-none">
              <div
                className="w-full h-full bg-[linear-gradient(120deg,rgba(253,200,48,0.27)_0%,rgba(255,255,255,0.10)_54%,rgba(101,78,163,0.43)_95%)] animate-pulse"
                style={{ borderRadius: "inherit" }}
              />
            </div>
            {/* Glassy Card Content */}
            <div className="relative z-10 p-8 flex flex-col h-full">
              <CTA />
            </div>
          </div>
        </div>
      </main>

      {/* Keyframe Animations (scoped to this page only) */}
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
