
import React from 'react';

const Categories = () => {
  const categories = [
    {
      title: "WordPress Development",
      description: "This introductory course is for students with little to no English.",
      courses: "4+ Courses",
      color: "bg-gradient-to-br from-orange-100 to-orange-200",
      icon: "🔧"
    },
    {
      title: "Web Development",
      description: "This introductory course is for students with little to no English.",
      courses: "4+ Courses",
      color: "bg-gradient-to-br from-teal-100 to-teal-200",
      icon: "💻"
    },
    {
      title: "App Development",
      description: "This introductory course is for students with little to no English.",
      courses: "4+ Courses",
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
      icon: "📱"
    },
    {
      title: "Java Script",
      description: "This introductory course is for students with little to no English.",
      courses: "4+ Courses",
      color: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      icon: "JS"
    },
    {
      title: "IT & Software",
      description: "This introductory course is for students with little to no English.",
      courses: "4+ Courses",
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      icon: "⚡"
    },
    {
      title: "Graphics Designer",
      description: "This introductory course is for students with little to no English.",
      courses: "4+ Courses",
      color: "bg-gradient-to-br from-pink-100 to-pink-200",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-200 via-amber-200 to-yellow-300 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-amber-400/30"></div>
          ))}
        </div>
      </div>

      {/* Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-orange-200/30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
            Categories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6 font-serif">
            Choice Favourite Course
            <br />
            from top category
          </h2>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-2xl font-bold mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-serif">
                {category.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed font-light">
                {category.description}
              </p>
              
              <div className="text-orange-500 font-medium">
                {category.courses}
              </div>
            </div>
          ))}
        </div>
        
        {/* See All Button */}
        <div className="text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium">
            See All Category
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
