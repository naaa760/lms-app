import React from "react";

const Footer = () => {
  const paymentMethods = [
    { name: "PayPal", color: "bg-blue-600" },
    { name: "Mastercard", color: "bg-red-500" },
    { name: "Visa", color: "bg-blue-700" },
    { name: "Google Pay", color: "bg-gray-600" },
    { name: "Apple Pay", color: "bg-gray-900" },
  ];

  return (
    <footer className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-gray-900">DEV</span>
                <span className="text-orange-500">SKILL</span>
                <span className="text-orange-500 text-3xl">.</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              We&apos;re always in search for talented and motivated people.
              Don&apos;t be shy introduce yourself Subscribe to my application
              to a lot more.
            </p>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Social Media</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">X</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download App */}
          <div>
            <p className="text-gray-600 mb-6">
              Join us on this journey of discovery as we explore the latest
              trend
            </p>

            <div className="space-y-3 mb-6">
              <div className="text-gray-600">📍 India</div>
              <div className="text-gray-600">📞 +91 8109138725</div>
            </div>

            <div className="flex gap-3">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                📱 Google Play
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                🍎 App Store
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-200 pt-8">
          <h4 className="font-semibold text-gray-900 mb-4">
            I Accept Payment Gateway
          </h4>
          <div className="flex flex-wrap gap-3 mb-8">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className={`${method.color} text-white px-4 py-2 rounded-lg text-sm font-medium`}
              >
                {method.name}
              </div>
            ))}
          </div>

          <div className="text-center text-gray-600 text-sm">
            © 2025 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
