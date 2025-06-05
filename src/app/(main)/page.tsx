import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import LocationCard from "@/components/LocationCard";

// Sample blog post data
const propertyDetails = [
  {
    id: "1",
    image: "/banner.jpg",
    title: "Luxury Villa in Lagos",
    location: "Lagos, Nigeria",
    price: "1,000,000",
    rating: 4,
    beds: 5,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: "2",
    image: "/banner.jpg",
    title: "Modern Apartment in Victoria Island",
    location: "Lagos, Nigeria",
    price: "500,000",
    rating: 5,
    beds: 3,
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: "3",
    image: "/banner.jpg",
    title: "Beachfront House in Lekki",
    location: "Lagos, Nigeria",
    price: "2,000,000",
    rating: 4.5,
    beds: 6,
    bedrooms: 4,
    bathrooms: 3,
  },
];

const locationDetails = [
	{
		image: "/banner.jpg",
		name: "Ikoyi",
		count: 458,
	},
	{
		image: "/banner.jpg",
		name: "Lekki",
		count: 320,
	},
	{
		image: "/banner.jpg",
		name: "Victoria Island",
		count: 275,
	},
	{
		image: "/banner.jpg",
		name: "Yaba",
		count: 150,
	},
	{
		image: "/banner.jpg",
		name: "Surulere",
		count: 200,
	},
	{
		image: "/banner.jpg",
		name: "Ikeja",
		count: 180,
	},
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Property Section with shadcn/ui Cards */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Browse Luxury Listings in Lagos
            </h2>
          </div>

          <div className="flex flex-wrap justify-around gap-8">
            {propertyDetails.map((property, index) => (
              <Link key={index} href={`/properties/${property.id}`}>
                <PropertyCard property={property} />
              </Link>
            ))}
          </div>
        </div>
      </section>

			{/* Property Section with shadcn/ui Cards */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Find Properties by Neighborhood
            </h2>
          </div>

          <div className="flex flex-wrap justify-around gap-8">
            {propertyDetails.map((property, index) => (
              <Link key={index} href={`/properties/${property.id}`}>
                <PropertyCard property={property} />
              </Link>
            ))}
          </div>
					{/* add main button */}
					<div className="flex justify-center mt-8">
						<Link href="/properties">
							<Button className="w-full mt-2 mb-3 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow px-16 py-6 transition-colors duration-200">
								Browse Properties For Rent
							</Button>
						</Link>
					</div>
        </div>
      </section>

			{/* Property Section with shadcn/ui Cards */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Find Properties by Neighborhood
            </h2>
          </div>

          <div className="flex flex-wrap justify-around gap-8">
            {locationDetails.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </div>
					{/* add main button */}
					<div className="flex justify-center mt-8">
						<Link href="/properties">
							<Button className="w-full mt-2 mb-3 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow px-16 py-6 transition-colors duration-200">
								View Others
							</Button>
						</Link>
					</div>
        </div>
      </section>
    </div>
  );
}
