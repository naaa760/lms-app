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
    <div className="min-h-screen w-full bg-journey-pattern bg-cover bg-fixed bg-center">
      {/* Beautiful Transparent Navbar */}
      <nav className="backdrop-blur-md bg-white/30 rounded-[2rem] mx-8 mt-8 p-6 border border-white/40 shadow-lg">
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-4xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text font-serif">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-light">
                {user.emailAddresses[0].emailAddress}
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4 max-sm:w-full">
            <div className="stats-card-journey group">
              <div className="flex gap-3 items-center">
                <div className="p-3 bg-green-100/80 rounded-xl group-hover:bg-green-200/80 transition-all duration-300">
                  <Image
                    src="/icons/check.svg"
                    alt="checkmark"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-4xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  {sessionHistory.length}
                </p>
              </div>
              <div className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                Lessons completed
              </div>
            </div>
            <div className="stats-card-journey group">
              <div className="flex gap-3 items-center">
                <div className="p-3 bg-blue-100/80 rounded-xl group-hover:bg-blue-200/80 transition-all duration-300">
                  <Image
                    src="/icons/cap.svg"
                    alt="cap"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {companions.length}
                </p>
              </div>
              <div className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                Companions created
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-lg:w-3/4 p-6 space-y-6 mx-auto">
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem value="bookmarks" className="journey-card">
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
          <AccordionItem value="recent" className="journey-card">
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
          <AccordionItem value="companions" className="journey-card">
            <AccordionTrigger className="text-2xl font-bold hover:text-purple-400 transition-colors duration-300 px-6">
              My Companions {`(${companions.length})`}
            </AccordionTrigger>
            <AccordionContent className="px-6 pt-4">
              <CompanionsList title="My Companions" companions={companions} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
};

export default Profile;
