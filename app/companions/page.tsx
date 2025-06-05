import { getAllCompanions } from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import Image from "next/image";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Decorative grid and shapes - Mobile optimized */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern - Smaller on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:20px_20px] md:bg-[size:32px_32px] opacity-[0.03]" />

        {/* Decorative shapes - Responsive */}
        <div className="absolute top-10 md:top-20 right-2 md:right-10 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-amber-700/5 blur-3xl" />
        <div className="absolute bottom-10 md:bottom-20 left-2 md:left-10 w-[150px] md:w-[300px] h-[150px] md:h-[300px] rounded-full bg-stone-700/5 blur-3xl" />

        {/* Decorative Image - Hidden on mobile, smaller on tablet */}
        <div className="hidden md:block absolute top-40 right-0 -rotate-[10deg] opacity-[0.07]">
          <Image
            src="/li1.png"
            alt="Decorative"
            width={300}
            height={300}
            className="object-contain lg:w-[500px] lg:h-[500px]"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-6 pt-20 md:pt-24 pb-8 md:pb-12">
        {/* Header section with oval corners - Mobile responsive */}
        <div className="bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 rounded-[20px] md:rounded-[30px] p-4 md:p-8 mb-6 md:mb-12 shadow-xl border border-amber-200/20 backdrop-blur-sm">
          <section className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-amber-900 to-stone-800 bg-clip-text text-transparent text-center md:text-left">
              Companion Library
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <SearchInput />
              <SubjectFilter />
            </div>
          </section>
        </div>

        {/* Grid with oval corners - Mobile responsive */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 relative">
          {/* Background pattern - Less prominent on mobile */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:15px_15px] md:bg-[size:20px_20px] opacity-[0.01] md:opacity-[0.02] rounded-[20px] md:rounded-[40px]" />

          {companions.map((companion) => (
            <div
              key={companion.id}
              className="transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500"
            >
              <CompanionCard
                {...companion}
                color={getSubjectColor(companion.subject)}
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default CompanionsLibrary;
