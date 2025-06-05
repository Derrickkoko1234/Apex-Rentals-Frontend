import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample property data - in a real app, this would come from an API or database
const properties = [
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

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
            Discover the perfect property in Lagos. From luxury villas to modern apartments, find your ideal living space.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Properties</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600">Locations</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <PropertyFilters />
        </div>

        {/* Properties Grid */}
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Available Properties</h2>
            <div className="text-gray-600">Showing {properties.length} properties</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Link key={property.id} href={`/properties/${property.id}`}>
                <PropertyCard property={property} />
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" size="default" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive size="default">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="default">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size="default">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" size="default" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
