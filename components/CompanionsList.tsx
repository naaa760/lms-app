import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      {/* Only show title on desktop - it's already in the accordion trigger on mobile */}
      <h2 className="hidden md:block font-bold text-2xl md:text-3xl mb-4 md:mb-6">
        {title}
      </h2>

      {/* Desktop Table View - Hidden on mobile */}
      <div className="hidden md:block">
        <div className="bg-white/50 rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 bg-stone-100/50 font-semibold text-stone-600">
            <div className="col-span-6 text-lg">Lessons</div>
            <div className="col-span-3 text-lg">Subject</div>
            <div className="col-span-3 text-lg text-right">Duration</div>
          </div>
          <div className="divide-y divide-stone-200/50">
            {companions?.map(({ id, subject, name, topic, duration }) => (
              <Link href={`/companions/${id}`} key={id}>
                <div className="grid grid-cols-12 gap-4 p-4 hover:bg-white/50 transition-colors cursor-pointer">
                  <div className="col-span-6 flex items-center gap-3">
                    <div
                      className="w-16 h-16 flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={28}
                        height={28}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-stone-900">{name}</p>
                      <p className="text-stone-600">{topic}</p>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <div
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      {subject}
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center justify-end">
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-semibold text-stone-900">
                        {duration}
                      </p>
                      <span className="text-stone-600">mins</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Card View - Hidden on desktop */}
      <div className="md:hidden">
        {companions && companions.length > 0 ? (
          <div className="space-y-3">
            {companions.map(({ id, subject, name, topic, duration }) => (
              <Link href={`/companions/${id}`} key={id}>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-stone-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-stone-900 truncate">
                        {name}
                      </h3>
                      <p className="text-sm text-stone-600 truncate">{topic}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      {subject}
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/clock.svg"
                        alt="duration"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span className="text-lg font-semibold text-stone-900">
                        {duration}
                      </span>
                      <span className="text-sm text-stone-600">mins</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Enhanced Empty State for Mobile */
          <div className="text-center py-8 px-4">
            <div className="w-16 h-16 bg-stone-200/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <p className="text-stone-500 text-lg font-medium mb-2">
              No companions found
            </p>
            <p className="text-stone-400 text-sm">
              Start your learning journey by creating or bookmarking companions!
            </p>
          </div>
        )}
      </div>

      {/* Desktop Empty State */}
      {(!companions || companions.length === 0) && (
        <div className="hidden md:block text-center py-8 text-stone-500">
          <div className="w-20 h-20 bg-stone-200/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📚</span>
          </div>
          <p className="text-xl font-medium mb-2">No companions found</p>
          <p className="text-stone-400">
            Start your learning journey by creating or bookmarking companions!
          </p>
        </div>
      )}
    </article>
  );
};

export default CompanionsList;
