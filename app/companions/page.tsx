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
    <main className="min-h-screen relative">
      {/* Decorative grid and shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:32px_32px] opacity-[0.03]" />

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-amber-700/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-stone-700/5 blur-3xl" />

        {/* Decorative Image */}
        <div className="absolute top-40 right-0 -rotate-[10deg] opacity-[0.07]">
          <Image
            src="/li1.png"
            alt="Decorative"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Header section with oval corners */}
        <div className="bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 rounded-[30px] p-8 mb-12 shadow-xl border border-amber-200/20 backdrop-blur-sm">
          <section className="flex justify-between gap-4 max-sm:flex-col">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-900 to-stone-800 bg-clip-text text-transparent">
              Companion Library
            </h1>
            <div className="flex gap-4">
              <SearchInput />
              <SubjectFilter />
            </div>
          </section>
        </div>

        {/* Grid with oval corners */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.02] rounded-[40px]" />

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
      </div>
    </main>
  );
};

export default CompanionsLibrary;
