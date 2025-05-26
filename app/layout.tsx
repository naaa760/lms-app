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
      <body>
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
          {/* Only show Navbar when user is logged in */}
          {userId && <Navbar />}
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
