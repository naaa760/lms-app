import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 mb-20">
      <nav className="mx-auto px-6 py-4 mt-4 max-w-[1400px]">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
          <div className="px-8 py-4 flex justify-between items-center relative">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={38}
                  height={38}
                  className="hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-900 bg-clip-text text-transparent">
                  Converso
                </span>
              </div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center gap-8">
              <NavItems />
              <SignedOut>
                <SignInButton>
                  <button className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white px-6 py-2.5 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
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
