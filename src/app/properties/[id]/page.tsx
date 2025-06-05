"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Star,
  Heart,
  Share2,
  MapPin,
  Users,
  BedDouble,
  Bath,
} from "lucide-react";
import Map from "@/components/Map";
import { DatePicker } from "@/components/ui/date-picker";
import { useState } from "react";
import { differenceInDays } from "date-fns";

// Sample property data - in a real app, this would come from an API or database
const properties = {
  "1": {
    images: ["/banner.jpg", "/banner.jpg", "/banner.jpg"],
    title: "Luxury Villa in Lagos",
    location: "Lagos, Nigeria",
    price: "1,000,000",
    rating: 4,
    reviewCount: 2,
    beds: 5,
    rooms: 3,
    bathrooms: 2,
    amenities: [
      { icon: "🌊", label: "waterfront" },
      { icon: "🍳", label: "kitchen" },
      { icon: "📶", label: "Wifi" },
      { icon: "💻", label: "Dedicated workspace" },
      { icon: "🅿️", label: "Free street parking" },
    ],
    address: "Plot 217 CE Avenue, Lekki, Lagos Nigeria",
    host: {
      name: "John Doe",
      yearsHosting: 5,
      rating: 4.5,
      reviewCount: 2,
      image: "/host.jpg",
    },
    highlights: [
      {
        icon: "🏞️",
        title: "Beautiful area",
        desc: "This home is in a scenic location",
      },
      {
        icon: "🗺️",
        title: "Prime location",
        desc: "Close to major attractions",
      },
    ],
    description:
      "Luxurious villa with modern amenities and stunning views. Perfect for families and large groups.",
    gallery: [
      {
        src: "/banner.jpg",
        label: "Master Bedroom",
        desc: "1 king bed",
      },
      {
        src: "/banner.jpg",
        label: "Guest Bedroom",
        desc: "2 queen beds",
      },
    ],
    latitude: 6.465422,
    longitude: 3.406448,
  },
  "2": {
    images: ["/banner.jpg", "/banner.jpg", "/banner.jpg"],
    title: "Modern Apartment in Victoria Island",
    location: "Lagos, Nigeria",
    price: "500,000",
    rating: 5,
    reviewCount: 1,
    beds: 3,
    rooms: 2,
    bathrooms: 1,
    amenities: [
      { icon: "🌊", label: "waterfront" },
      { icon: "🍳", label: "kitchen" },
      { icon: "📶", label: "Wifi" },
    ],
    address: "Victoria Island, Lagos Nigeria",
    host: {
      name: "Jane Smith",
      yearsHosting: 3,
      rating: 5.0,
      reviewCount: 1,
      image: "/host.jpg",
    },
    highlights: [
      {
        icon: "🏢",
        title: "Modern living",
        desc: "Contemporary design and amenities",
      },
    ],
    description:
      "Stylish apartment in the heart of Victoria Island. Perfect for professionals and small families.",
    gallery: [
      {
        src: "/banner.jpg",
        label: "Bedroom",
        desc: "1 queen bed",
      },
    ],
    latitude: 6.428055,
    longitude: 3.424741,
  },
  "3": {
    images: ["/banner.jpg", "/banner.jpg", "/banner.jpg"],
    title: "Beachfront House in Lekki",
    location: "Lagos, Nigeria",
    price: "2,000,000",
    rating: 4.5,
    reviewCount: 3,
    beds: 6,
    rooms: 4,
    bathrooms: 3,
    amenities: [
      { icon: "🌊", label: "waterfront" },
      { icon: "🍳", label: "kitchen" },
      { icon: "📶", label: "Wifi" },
      { icon: "🏊", label: "Pool" },
    ],
    address: "Lekki, Lagos Nigeria",
    host: {
      name: "Mike Johnson",
      yearsHosting: 8,
      rating: 4.8,
      reviewCount: 3,
      image: "/host.jpg",
    },
    highlights: [
      {
        icon: "🏖️",
        title: "Beachfront",
        desc: "Direct access to the beach",
      },
    ],
    description:
      "Luxurious beachfront property with stunning ocean views. Perfect for large groups and special occasions.",
    gallery: [
      {
        src: "/banner.jpg",
        label: "Master Suite",
        desc: "1 king bed",
      },
      {
        src: "/banner.jpg",
        label: "Guest Room",
        desc: "2 queen beds",
      },
    ],
    latitude: 6.434156,
    longitude: 3.500356,
  },
};

export default function PropertyDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const property = properties[params.id as keyof typeof properties];
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-600">Property not found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to home page
        </Link>
      </div>
    );
  }

  const calculateTotalPrice = () => {
    if (!checkIn || !checkOut) return property.price;
    const nights = differenceInDays(checkOut, checkIn);
    const basePrice = parseInt(property.price.replace(/,/g, ""));
    return (basePrice * nights).toLocaleString();
  };

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header with back button */}
      <div className="p-4 border-b">
        <Link
          href="/properties"
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          ← Back to properties
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="col-span-2">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {property.images.slice(1, 3).map((image, index) => (
              <div
                key={index}
                className="relative h-[200px] rounded-xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${property.title} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Title and Basic Info */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl">
              <Users className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm text-gray-500">Guests</div>
                <div className="font-semibold">Up to {property.beds * 2}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl">
              <BedDouble className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm text-gray-500">Bedrooms</div>
                <div className="font-semibold">{property.rooms}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl">
              <Bath className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm text-gray-500">Bathrooms</div>
                <div className="font-semibold">{property.bathrooms}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">About this place</h2>
            <p className="text-gray-700 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              What this place offers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-xl">{amenity.icon}</span>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div className="text-gray-700 mb-4">{property.address}</div>
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Map
                latitude={property.latitude}
                longitude={property.longitude}
                popupText={property.title}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Booking Card */}
          <div className="sticky top-16 bg-white rounded-xl shadow-lg p-6 border">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-2xl font-bold">₦{property.price}</div>
                <div className="text-gray-500">per night</div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">{property.rating}</span>
                <span className="text-gray-500">
                  ({property.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Check-in</div>
                  <DatePicker
                    date={checkIn}
                    onSelect={setCheckIn}
                    placeholder="Add dates"
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Check-out</div>
                  <DatePicker
                    date={checkOut}
                    onSelect={setCheckOut}
                    placeholder="Add dates"
                    disabled={!checkIn}
                  />
                </div>
              </div>

              {nights > 0 && (
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>
                      ₦{property.price} x {nights} nights
                    </span>
                    <span>₦{calculateTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₦{calculateTotalPrice()}</span>
                  </div>
                </div>
              )}

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-xl text-lg"
                disabled={!checkIn || !checkOut}
              >
                Reserve
              </Button>

              <div className="text-center text-gray-500">
                You won&apos;t be charged yet
              </div>
            </div>
          </div>

          {/* Host Info */}
          <div className="mt-6 bg-white rounded-xl shadow-lg p-6 border">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={property.host.image}
                alt={property.host.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold text-lg">
                  Hosted by {property.host.name}
                </div>
                <div className="text-gray-500">
                  Joined in{" "}
                  {new Date().getFullYear() - property.host.yearsHosting}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-semibold">{property.host.rating}</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
              <div>
                <div className="font-semibold">{property.host.reviewCount}</div>
                <div className="text-sm text-gray-500">Reviews</div>
              </div>
              <div>
                <div className="font-semibold">
                  {property.host.yearsHosting}
                </div>
                <div className="text-sm text-gray-500">Years hosting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
