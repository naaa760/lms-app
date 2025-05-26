"use client";
import { removeBookmark } from "@/lib/actions/companion.actions";
import { addBookmark } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
}: CompanionCardProps) => {
  const pathname = usePathname();
  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname);
    } else {
      await addBookmark(id, pathname);
    }
  };
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-amber-50/80 backdrop-blur-sm border border-amber-100/20 hover:border-amber-200/30 transition-all duration-300 shadow-lg hover:shadow-xl p-6">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
        style={{
          background: `linear-gradient(135deg, ${color}40, transparent)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <div
            className="px-4 py-1.5 rounded-full text-sm font-medium text-white shadow-sm"
            style={{ backgroundColor: color }}
          >
            {subject}
          </div>
          <button
            onClick={handleBookmark}
            className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 transition-all duration-300 shadow-sm"
          >
            <Image
              src={
                bookmarked
                  ? "/icons/bookmark-filled.svg"
                  : "/icons/bookmark.svg"
              }
              alt="bookmark"
              width={16}
              height={16}
              className={`${
                bookmarked ? "opacity-100" : "opacity-70"
              } transition-opacity duration-300`}
              style={{ filter: "brightness(0.2)" }}
            />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-stone-800 mb-2 group-hover:text-amber-900 transition-colors duration-300">
          {name}
        </h2>
        <p className="text-stone-600 mb-4">{topic}</p>

        <div className="flex items-center gap-2 mb-6">
          <Image src="/icons/clock.svg" alt="duration" width={16} height={16} />
          <p className="text-sm text-stone-600">{duration} minutes</p>
        </div>

        <Link href={`/companions/${id}`} className="block w-full">
          <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-700 to-stone-800 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            Launch Lesson
          </button>
        </Link>
      </div>
    </article>
  );
};

export default CompanionCard;
