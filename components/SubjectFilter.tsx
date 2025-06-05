"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("subject") || "";

  const [subject, setSubject] = useState(query);

  useEffect(() => {
    let newUrl = "";
    if (subject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [subject, router, searchParams]);

  return (
    <Select onValueChange={setSubject} value={subject}>
      <SelectTrigger className="w-full sm:w-auto min-w-0 sm:min-w-[140px] md:min-w-[160px] bg-white/80 backdrop-blur-sm border border-stone-300/50 rounded-lg px-3 py-2 md:py-2.5 shadow-sm hover:shadow-md transition-all duration-300 text-sm md:text-base">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent className="bg-white/95 backdrop-blur-sm border border-stone-300/50 rounded-lg shadow-lg">
        <SelectItem value="all" className="capitalize text-sm md:text-base">
          All subjects
        </SelectItem>
        {subjects.map((subject) => (
          <SelectItem
            key={subject}
            value={subject}
            className="capitalize text-sm md:text-base"
          >
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
