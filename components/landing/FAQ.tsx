"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How do I get started with your product?",
      answer:
        "Sign up on our website, explore features, customize your profile, and start using our product. We're here to help!",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, bank transfers, and other secure payment methods for your convenience.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features so you can experience our platform risk-free.",
    },
    {
      question: "Is technical support available?",
      answer:
        "Absolutely! Our technical support team is available 24/7 via email, chat, and phone to assist you with any questions.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. No questions asked, no cancellation fees.",
    },
    {
      question: "Is my data secure with your product?",
      answer:
        "Yes, we use enterprise-grade security measures including encryption, secure servers, and regular security audits to protect your data.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - FAQ Header */}
          <div>
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
              All questions
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Frequently asked
              <br />
              Questions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              For any unanswered questions, reach out to our support team via
              email. We&apos;ll respond as soon as possible to assist you.
            </p>

            {/* What You Looking For Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                What You Looking for?
              </h3>
              <p className="text-gray-600 mb-8">
                Our dynamic educational platform offers you the tools and
                resources to propel yourself towards a brighter future.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Teach Here Card */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Do You Want Teach Here
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Our dynamic educational platform offers you the tools
                    supportive community.
                  </p>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                    Get started
                  </button>
                </div>

                {/* Learn Here Card */}
                <div className="bg-teal-500 rounded-2xl p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Do You Want Learn Here
                  </h4>
                  <p className="text-white/90 text-sm mb-4">
                    Our dynamic educational platform offers you the tools
                    supportive community.
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? "pb-6 max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
