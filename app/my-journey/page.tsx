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
    <main className="min-h-screen relative">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Rich warm gradients */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-800/10 via-stone-700/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-stone-800/10 via-amber-700/5 to-transparent blur-3xl" />

        {/* Grid patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* User Stats Card with oval corners */}
        <div className="glass-card mb-12 p-8 bg-gradient-to-br from-white/70 via-amber-50/70 to-stone-50/70 rounded-[30px]">
          <div className="flex justify-between items-center gap-8 max-sm:flex-col">
            <div className="flex gap-6 items-center">
              <div className="relative group">
                <Image
                  src={user.imageUrl}
                  alt={user.firstName!}
                  width={110}
                  height={110}
                  className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-stone-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-800 to-stone-700 bg-clip-text text-transparent">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-stone-600">
                  {user.emailAddresses[0].emailAddress}
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="flex gap-4 max-sm:w-full">
              <div className="glass-card p-6 group hover:bg-white/70">
                <div className="flex gap-3 items-center">
                  <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-all duration-300">
                    <Image
                      src="/icons/check.svg"
                      alt="checkmark"
                      width={24}
                      height={24}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-4xl font-bold text-stone-800">
                    {sessionHistory.length}
                  </p>
                </div>
                <div className="text-sm text-stone-600">Lessons completed</div>
              </div>
              <div className="glass-card p-6 group hover:bg-white/70">
                <div className="flex gap-3 items-center">
                  <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-all duration-300">
                    <Image
                      src="/icons/cap.svg"
                      alt="cap"
                      width={24}
                      height={24}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-4xl font-bold text-stone-800">
                    {companions.length}
                  </p>
                </div>
                <div className="text-sm text-stone-600">Companions created</div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Sections with oval corners */}
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem
            value="bookmarks"
            className="glass-card overflow-hidden bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 rounded-[25px]"
          >
            <AccordionTrigger className="text-2xl font-bold hover:text-purple-400 transition-colors duration-300 px-6">
              Bookmarked Companions {`(${bookmarkedCompanions.length})`}
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-4">
              <CompanionsList
                companions={bookmarkedCompanions}
                title="Bookmarked Companions"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="recent"
            className="glass-card bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 rounded-[25px]"
          >
            <AccordionTrigger className="text-2xl font-bold hover:text-purple-400 transition-colors duration-300 px-6">
              Recent Sessions
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-4">
              <CompanionsList
                title="Recent Sessions"
                companions={sessionHistory}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="companions"
            className="glass-card bg-gradient-to-br from-white/60 via-amber-50/60 to-stone-50/60 rounded-[25px]"
          >
            <AccordionTrigger className="text-2xl font-bold hover:text-purple-400 transition-colors duration-300 px-6">
              My Companions {`(${companions.length})`}
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-4">
              <CompanionsList title="My Companions" companions={companions} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};

export default Profile;
