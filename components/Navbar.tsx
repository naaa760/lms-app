import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto w-full px-8 py-4 bg-white/70 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="bg-emerald-800 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
