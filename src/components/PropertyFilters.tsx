import { Button } from "@/components/ui/button";
import { SlidersHorizontal, MapPin, BedDouble, Bath, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function PropertyFilters() {
  return (
    <div className="space-y-6">
      {/* Header with Filters and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2 h-10">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Filter Properties</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-8">
                {/* Price Range */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Price Range (₦)</Label>
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                      <Label className="text-sm text-gray-500">Minimum</Label>
                      <Input type="number" placeholder="0" className="h-12" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label className="text-sm text-gray-500">Maximum</Label>
                      <Input type="number" placeholder="1000000" className="h-12" />
                    </div>
                  </div>
                </div>

                {/* Property Type */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Property Type</Label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Bedrooms */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Bedrooms</Label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Amenities */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Amenities</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="wifi" />
                      <Label htmlFor="wifi" className="text-sm">WiFi</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="pool" />
                      <Label htmlFor="pool" className="text-sm">Pool</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="parking" />
                      <Label htmlFor="parking" className="text-sm">Parking</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="gym" />
                      <Label htmlFor="gym" className="text-sm">Gym</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="security" />
                      <Label htmlFor="security" className="text-sm">Security</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="aircon" />
                      <Label htmlFor="aircon" className="text-sm">Air Conditioning</Label>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1 h-12">Reset</Button>
                  <Button className="flex-1 h-12">Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Select>
            <SelectTrigger className="w-[180px] h-10">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="gap-2 h-10 px-4">
          <MapPin className="w-4 h-4" />
          Location
        </Button>
        <Button variant="outline" className="gap-2 h-10 px-4">
          <BedDouble className="w-4 h-4" />
          Bedrooms
        </Button>
        <Button variant="outline" className="gap-2 h-10 px-4">
          <Bath className="w-4 h-4" />
          Bathrooms
        </Button>
        <Button variant="outline" className="gap-2 h-10 px-4">
          <Users className="w-4 h-4" />
          Guests
        </Button>
      </div>
    </div>
  );
} 