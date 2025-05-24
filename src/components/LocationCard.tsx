import Image from "next/image";

type Location = {
  image: string;
  name: string;
  count: number | string;
};

type LocationCardProps = {
  location: Location;
};

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="flex items-center bg-white border border-blue-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 w-[340px] max-w-full">
      <div className="relative w-24 h-20 flex-shrink-0">
        <Image
          src={location.image}
          alt={location.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <div className="px-4 py-3 flex flex-col justify-center">
        <div className="font-semibold text-base">{location.name}</div>
        <div className="text-gray-600 text-sm">{location.count} properties</div>
      </div>
    </div>
  );
}
