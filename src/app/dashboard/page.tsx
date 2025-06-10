 
"use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useAppSelector } from "@/store/hooks";

export default function DashboardPage() {
  // const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/auth/login");
  //   }
  // }, [isAuthenticated, router]);

  // if (!isAuthenticated || !user) {
  //   return null;
  // }
  return (
    <DashboardLayout userType={user?.role as "renter" | "landlord"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600">
            Here's what's happening with your {user?.role === "renter" ? "bookings" : "properties"} today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {user?.role === "renter" ? (
            <>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-gray-600">Active Bookings</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">5</div>
                <div className="text-gray-600">Wishlist Items</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-gray-600">Unread Messages</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-gray-600">Past Stays</div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-gray-600">Active Properties</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-gray-600">Total Bookings</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">5</div>
                <div className="text-gray-600">Unread Messages</div>
              </div>
            </>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {user?.role === "renter" ? (
              <>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Booking Confirmed</div>
                    <div className="text-sm text-gray-600">Luxury Villa in Lagos</div>
                  </div>
                  <div className="text-sm text-gray-600">2 days ago</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">New Message</div>
                    <div className="text-sm text-gray-600">From property owner</div>
                  </div>
                  <div className="text-sm text-gray-600">3 days ago</div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">New Booking</div>
                    <div className="text-sm text-gray-600">Luxury Villa in Lagos</div>
                  </div>
                  <div className="text-sm text-gray-600">1 day ago</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">New Review</div>
                    <div className="text-sm text-gray-600">5 stars - Great experience!</div>
                  </div>
                  <div className="text-sm text-gray-600">2 days ago</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 