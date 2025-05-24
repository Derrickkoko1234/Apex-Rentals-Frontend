"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function HeroSection() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Search submitted");
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/banner.jpg" // Replace with your hero image
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay with blur effect */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 z-10 max-w-6xl mx-auto space-y-4 sm:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Find. Rent. Relax.
        </h1>
        {/* <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto">
          Discover premium vehicles for any occasion
        </p> */}

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-2xl mt-4 sm:mt-6"
        >
          <div className="flex h-10 sm:h-12 w-full items-center rounded-md border border-input bg-white/90 px-3 py-2 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring">
            <Input
              type="text"
              placeholder="Address, neighborhood, city, state..."
              className="border-0 bg-transparent h-full flex-grow focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-black placeholder:text-gray-500"
            />
            <Button 
              type="submit" 
              variant="ghost" 
              size="icon"
              className="h-7 w-7 sm:h-8 sm:w-8 hover:bg-gray-100 rounded-full"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
