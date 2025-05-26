
import React from 'react';
import { Button } from '../ui/button';

const CourseGrid = () => {
  const courses = [
    {
      id: 1,
      title: "Learn Figma to DevSkill Cms Beginner to Advanced",
      instructor: "Sahil Tukadar",
      rating: 4.5,
      reviews: 120,
      price: "$49.69",
      image: "bg-gradient-to-br from-blue-100 to-blue-200",
      icon: "📚"
    },
    {
      id: 2,
      title: "Create a Digital Illustration With Procreate",
      instructor: "Sahil Tukadar",
      rating: 4.6,
      reviews: 150,
      price: "$49.69",
      image: "bg-gradient-to-br from-green-100 to-teal-200",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Create a perfect career with UI Design Right Place",
      instructor: "Sahil Tukadar",
      rating: 4.8,
      reviews: 200,
      price: "$49.69",
      image: "bg-gradient-to-br from-purple-100 to-blue-200",
      icon: "💻"
    },
    {
      id: 4,
      title: "Leadership and Management Skills Development",
      instructor: "Sahil Tukadar",
      rating: 4.7,
      reviews: 180,
      price: "$49.69",
      image: "bg-gradient-to-br from-blue-200 to-cyan-200",
      icon: "📊"
    },
    {
      id: 5,
      title: "Create a Design System Figma Lab",
      instructor: "Sahil Tukadar",
      rating: 4.6,
      reviews: 160,
      price: "$49.69",
      image: "bg-gradient-to-br from-purple-200 to-pink-200",
      icon: "🎯"
    },
    {
      id: 6,
      title: "Create a Digital Illustration With Procreate",
      instructor: "Sahil Tukadar",
      rating: 4.9,
      reviews: 220,
      price: "$49.69",
      image: "bg-gradient-to-br from-purple-300 to-purple-400",
      icon: "✨"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            Our Course
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Explore Our Course
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
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
            </select>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
              🔍
            </Button>
          </div>
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
              {/* Course Image */}
              <div className={`h-48 ${course.image} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}>
                {course.icon}
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(Math.floor(course.rating))}
                  </div>
                  <span className="text-sm text-gray-600">{course.rating} ({course.reviews})</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2 group-hover:text-teal-600 transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <span className="text-sm text-gray-600">{course.instructor}</span>
                  </div>
                  <div className="text-lg font-bold text-orange-500">
                    {course.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
