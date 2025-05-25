"use client";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#cc95c0] via-[#dbd4b4] to-[#7aa1d2]">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-6xl font-bold leading-tight text-white">
              Smart, Seamless, Powerful,
              <span className="block mt-2">Your training platform</span>
            </h1>
            <p className="text-xl text-white/80">
              A smart, seamless, and powerful platform designed to deliver
              high-value training with ease and scalability
            </p>
            <div className="flex gap-4 pt-4">
              <SignInButton mode="modal">
                <button
                  className="bg-white text-[#cc95c0] px-8 py-4 rounded-full text-lg font-semibold 
                  hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </button>
              </SignInButton>
            </div>
          </motion.div>

          {/* Right Column with Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Chart Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -left-10 top-0 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            >
              <div className="w-48">
                <p className="text-sm font-semibold mb-2">Total Users</p>
                <div className="h-24 bg-blue-50 rounded-lg flex items-end p-2">
                  {/* Simple bar chart visualization */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 bg-blue-500 mx-0.5 rounded-t"
                      style={{ height: `${Math.random() * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main Image */}
            <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <Image
                src="/images/hero.png"
                alt="Platform Preview"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -right-8 bottom-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Image
                    src="/icons/users.svg"
                    alt="Users"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold">12,768</p>
                  <p className="text-sm text-gray-600">Total Students</p>
                </div>
              </div>
            </motion.div>

            {/* Active Courses Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute right-20 -top-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Image
                    src="/icons/book.svg"
                    alt="Courses"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold">108</p>
                  <p className="text-sm text-gray-600">Active Courses</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
