import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 mb-20">
      <nav className="mx-auto px-3 md:px-6 py-3 md:py-4 mt-2 md:mt-4 max-w-[1400px]">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl shadow-xl">
          <div className="px-4 md:px-8 py-3 md:py-4 flex justify-between items-center relative">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 md:gap-3">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={32}
                  height={32}
                  className="md:w-[38px] md:h-[38px] hover:scale-110 transition-transform duration-300"
                  priority
                />
                <span className="text-lg md:text-xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-900 bg-clip-text text-transparent">
                  Eduno
                </span>
              </div>
            </Link>

            {/* Navigation Items - Responsive */}
            <div className="flex items-center gap-3 md:gap-8">
              <div className="hidden md:block">
                <NavItems />
              </div>

              {/* Mobile NavItems */}
              <div className="flex md:hidden items-center gap-2">
                <Link
                  href="/companions"
                  className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1 rounded-lg hover:bg-white/20"
                >
                  Companions
                </Link>
                <Link
                  href="/my-journey"
                  className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1 rounded-lg hover:bg-white/20"
                >
                  Journey
                </Link>
              </div>

              <SignedOut>
                <SignInButton>
                  <button className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white px-3 md:px-6 py-2 md:py-2.5 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 text-sm md:text-base">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="bg-white/20 p-1 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                  <UserButton />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
