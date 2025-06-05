import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  getUserCompanions,
  getUserSessions,
  getBookmarkedCompanions,
} from "@/lib/actions/companion.actions";
import Image from "next/image";
import CompanionsList from "@/components/CompanionsList";

const Profile = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const companions = await getUserCompanions(user.id);
  const sessionHistory = await getUserSessions(user.id);
  const bookmarkedCompanions = await getBookmarkedCompanions(user.id);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Decorative Elements - Mobile optimized */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Rich warm gradients - Responsive */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-800/10 via-stone-700/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-stone-800/10 via-amber-700/5 to-transparent blur-3xl" />

        {/* Grid patterns - Smaller on mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:15px_15px] md:bg-[size:20px_20px] opacity-[0.01] md:opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-6 pt-16 md:pt-20 pb-8 md:pb-12">
        {/* User Stats Card with oval corners - Mobile responsive */}
        <div className="glass-card mb-6 md:mb-12 p-4 md:p-8 bg-gradient-to-br from-white/70 via-amber-50/70 to-stone-50/70 rounded-[20px] md:rounded-[30px]">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-8">
            {/* User Info - Mobile layout */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
              <div className="relative group flex-shrink-0">
                <Image
                  src={user.imageUrl}
                  alt={user.firstName!}
                  width={80}
                  height={80}
                  className="md:w-[110px] md:h-[110px] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-stone-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col gap-2 md:gap-3 text-center sm:text-left">
                <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-amber-800 to-stone-700 bg-clip-text text-transparent">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-stone-600 text-sm md:text-base">
                  {user.emailAddresses[0].emailAddress}
                </p>
              </div>
            </div>

            {/* Stats Cards - Mobile responsive grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full sm:w-auto">
              <div className="glass-card p-4 md:p-6 group hover:bg-white/70">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
                  <div className="p-2 md:p-3 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/icons/check.svg"
                      alt="checkmark"
                      width={20}
                      height={20}
                      className="md:w-[24px] md:h-[24px] group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-2xl md:text-4xl font-bold text-stone-800">
                      {sessionHistory.length}
                    </p>
                    <div className="text-xs md:text-sm text-stone-600">
                      Lessons completed
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card p-4 md:p-6 group hover:bg-white/70">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
                  <div className="p-2 md:p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-all duration-300 flex-shrink-0">
                    <Image
                      src="/icons/cap.svg"
                      alt="cap"
                      width={20}
                      height={20}
                      className="md:w-[24px] md:h-[24px] group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-2xl md:text-4xl font-bold text-stone-800">
                      {companions.length}
                    </p>
                    <div className="text-xs md:text-sm text-stone-600">
                      Companions created
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Sections with oval corners - Mobile responsive */}
        <Accordion type="multiple" className="space-y-3 md:space-y-4">
          <AccordionItem
            value="bookmarks"
            className="glass-card overflow-hidden bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 rounded-[20px] md:rounded-[25px]"
          >
            <AccordionTrigger className="text-lg md:text-2xl font-bold hover:text-purple-400 transition-colors duration-300 px-4 md:px-6">
              Bookmarked Companions {`(${bookmarkedCompanions.length})`}
            </AccordionTrigger>
            <AccordionContent className="px-4 md:px-6 pt-4">
              <CompanionsList
                companions={bookmarkedCompanions}
                title="Bookmarked Companions"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="recent"
            className="glass-card bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 rounded-[20px] md:rounded-[25px]"
          >
            <AccordionTrigger className="text-lg md:text-2xl font-bold hover:text-purple-400 transition-colors duration-300 px-4 md:px-6">
              Recent Sessions
            </AccordionTrigger>
            <AccordionContent className="px-4 md:px-6 pt-4">
              <CompanionsList
                title="Recent Sessions"
                companions={sessionHistory}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="companions"
            className="glass-card bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 rounded-[20px] md:rounded-[25px]"
          >
            <AccordionTrigger className="text-lg md:text-2xl font-bold hover:text-purple-400 transition-colors duration-300 px-4 md:px-6">
              My Companions {`(${companions.length})`}
            </AccordionTrigger>
            <AccordionContent className="px-4 md:px-6 pt-4">
              <CompanionsList title="My Companions" companions={companions} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};

export default Profile;
