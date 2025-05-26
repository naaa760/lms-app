import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Playfair_Display } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { auth } from "@clerk/nextjs/server";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="bg-gradient-to-br from-stone-200 via-amber-100 to-stone-100">
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-stone-900/10 pointer-events-none" />
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
          <div className="relative min-h-screen">
            {userId && <Navbar />}
            <div className="pt-24">{children}</div>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
