import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <nav className='flex justify-between h-18 items-center bg-black text-white w-screen sticky'>
            <div className = 'flex mx-0 items-center'>
              {/* <div className ='flex items-center'>Logo</div> */}
              {/* <div className="text-3xl">UTILIX</div> */}
              <Image
                src="/assets/logo.svg" // path is relative to public/
                alt="Company Logo"
                width={250}
                height={250}
                className="rounded-full object-contain"
              />
            </div>

            <div className=''>

            <SignedOut>
              <div className="flex items-center">

              <div className="mx-3">
                <SignInButton>
                <button className="relative cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black text-white  dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Sign In
                  </span>
                  </button>
                </SignInButton>
              </div>
              <div className='mx-3' >

                <SignUpButton>
                <button className="relative  cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black text-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Sign Up
                  </span>
                  </button>
                </SignUpButton>
              </div>
                </div>
            </SignedOut>

            <SignedIn>
              <div className='mr-8 felx items-center'>
                <UserButton/>
              </div>
            </SignedIn>
            </div>
          </nav>
          <div className='flex'>

          <Sidebar></Sidebar>
          {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
