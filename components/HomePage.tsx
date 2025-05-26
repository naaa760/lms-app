import React from "react";

import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const HomePage = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <div className="relative min-h-screen">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Warm circular gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-amber-700/10 via-stone-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-stone-700/10 via-amber-500/5 to-transparent blur-3xl" />

        {/* Grid patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.02]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:32px_32px] opacity-[0.02]" />
      </div>

      <main className="relative z-10 container mx-auto px-6 pt-28 pb-12">
        <div className="text-center mb-16 bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 rounded-[30px] p-8 shadow-xl border border-amber-200/20 backdrop-blur-sm">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-900 to-stone-800 bg-clip-text text-transparent">
            Popular Companions
          </h1>
          <p className="text-stone-700 max-w-2xl mx-auto text-lg">
            Discover your perfect learning companion and start your educational
            journey today
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companions.map((companion) => (
            <div
              key={companion.id}
              className="transform hover:-translate-y-2 transition-all duration-500"
            >
              <CompanionCard
                {...companion}
                color={getSubjectColor(companion.subject)}
              />
            </div>
          ))}
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/20">
            <CompanionsList
              title="Recently completed sessions"
              companions={recentSessionsCompanions}
              classNames="w-full"
            />
          </div>
          <div className="bg-gradient-to-br from-stone-900 via-amber-800 to-stone-800 rounded-2xl shadow-xl">
            <CTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
