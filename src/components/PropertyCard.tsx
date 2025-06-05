import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Share2, MapPin, BedDouble, Bath, Users } from "lucide-react";

type Property = {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  beds: number;
  bedrooms: number;
  bathrooms: number;
};

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const {
    id,
    image,
    title,
    location,
    price,
    rating,
    beds,
    bedrooms,
    bathrooms,
  } = property;

  return (
    <div className="w-[350px] h-[500px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-[250px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Top Badges */}
        <div className="absolute top-4 left-4">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1.5 text-xs font-medium bg-white/90 backdrop-blur-sm"
          >
            <span className="text-yellow-400 mr-1">●</span>
            Guest favourite
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full p-2 bg-white/90 backdrop-blur-sm hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full p-2 bg-white/90 backdrop-blur-sm hover:bg-white"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="font-bold text-lg">₦{price}</span>
            <span className="text-sm text-gray-600"> /night</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full ml-2 flex-shrink-0">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        {/* Property Features */}
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-gray-100">
          <div className="flex flex-col items-center text-center">
            <BedDouble className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-sm font-medium">{bedrooms}</span>
            <span className="text-xs text-gray-500">Bedrooms</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-sm font-medium">{beds}</span>
            <span className="text-xs text-gray-500">Beds</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Bath className="w-5 h-5 text-gray-600 mb-1" />
            <span className="text-sm font-medium">{bathrooms}</span>
            <span className="text-xs text-gray-500">Baths</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <Link href={`/properties/${id}`} passHref>
            <Button 
              className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium py-6 transition-colors duration-200"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
