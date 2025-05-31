import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Share2, Repeat, BedDouble, Bath } from "lucide-react";

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
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative flex flex-col w-[350px] transition-transform hover:-translate-y-2 hover:shadow-2xl duration-200">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-3xl"
          priority
        />
        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 shadow"
          >
            <span className="text-yellow-400 text-lg">●</span>
            Guest favourite
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full p-2 bg-white/80 hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full p-2 bg-white/80 hover:bg-white"
          >
            <Share2 className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full p-2 bg-white/80 hover:bg-white"
          >
            <Repeat className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="font-semibold text-lg">{title}</div>
            <div className="text-xs text-gray-500">{location}</div>
            <div className="font-bold text-xl mt-1">
              ₦{price}{" "}
              <span className="font-normal text-sm text-gray-600">/ night</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 text-sm text-gray-700">
              <span>{rating}</span>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </div>
        <div className="flex justify-between text-gray-700 text-sm">
          <div className="flex items-center gap-1">
            <BedDouble className="w-5 h-5" />
            {bedrooms} bedroom
          </div>
          <div className="flex items-center gap-1">
            <BedDouble className="w-5 h-5" />
            {beds} beds
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-5 h-5" />
            {bathrooms} bath
          </div>
        </div>

        <hr className="my-2" />
        <Link href={`/properties/${id}`}>
          <Button className="w-full mt-2 mb-3 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow">
            Reserve
          </Button>
        </Link>
      </div>
    </div>
  );
}
