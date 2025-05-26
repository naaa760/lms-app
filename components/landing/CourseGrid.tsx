import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const CourseGrid = () => {
  const courses = [
    {
      id: 1,
      title: "Maths",
      instructor: "AI - friendly",
      rating: 4.5,
      reviews: 120,
      price: "$0.00/$10.00",
      imageSrc: "/math.jpg",
      icon: "📚",
    },
    {
      id: 2,
      title: "Language",
      instructor: "AI - friendly- Sarah",
      rating: 4.6,
      reviews: 150,
      price: "$0.00/$10.00",
      imageSrc: "/lang.jpg",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Science",
      instructor: "AI - friendly-John",
      rating: 4.8,
      reviews: 200,
      price: "$0.00/$10.00",
      imageSrc: "/sci.jpg",
      icon: "💻",
    },
    {
      id: 4,
      title: "History",
      instructor: "AI - friendly-Sam",
      rating: 4.7,
      reviews: 180,
      price: "$0.00/$10.00",
      imageSrc: "/his.jpg",
      icon: "📊",
    },
    {
      id: 5,
      title: "Coding",
      instructor: "AI - friendly-Jake",
      rating: 4.6,
      reviews: 160,
      price: "$0.00/$10.00",
      imageSrc: "/cod.jpg",
      icon: "🎯",
    },
    {
      id: 6,
      title: "Economics",
      instructor: "AI - friendly-Neha",
      rating: 4.9,
      reviews: 220,
      price: "$10.00",
      imageSrc: "/eco.jpg",
      icon: "✨",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/str.jpg"
          alt="Background Pattern"
          fill
          priority
          sizes="100vw"
          quality={100}
        />
      </div>
      {/* Aesthetic Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="h-full w-full grid grid-cols-[repeat(40,minmax(0,1fr))] gap-px">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="bg-gray-900/20" />
            ))}
          </div>
        </div>

        {/* Diagonal Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-500/20 to-transparent transform -rotate-45" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-gray-500/20 to-transparent transform -rotate-45" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gray-500/20 to-transparent transform -rotate-45" />
        </div>

        {/* Radial Gradients for Depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-300/10 rounded-full blur-3xl" />

        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))]">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            My Course
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Explore My Course
          </h2>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search Courses"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
              <option>All Categories</option>
              <option>Maths</option>
              <option>Coding</option>
              <option>Language</option>
              <option>Science</option>
              <option>History</option>
              <option>Economics</option>
            </select>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
              🔍
            </Button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Course Image Container */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={course.imageSrc}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-amber-600 font-semibold">
                    {course.price}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {"★".repeat(Math.floor(course.rating))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    {course.rating} ({course.reviews} reviews)
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                  {course.title}
                </h3>

                {/* Instructor */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-600 italic">
                    by {course.instructor}
                  </span>

                  {/* Enroll Button */}
                  <button className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">
                    Enroll Now →
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/20 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
