/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, User } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  let { isAuthenticated, user } = authState;

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clientLoaded, setClientLoaded] = useState(false);

  // Check for user data in localStorage ONLY after component mounts on client
  useEffect(() => {
    // Set flag to indicate client-side rendering has begun
    setClientLoaded(true);

    // Now we can safely access localStorage
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      try {
        isAuthenticated = true;
        user = JSON.parse(userData);
      } catch (error) {
        console.error("Failed to parse user data:", error);
        // Clear invalid data
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();

      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Close dropdown immediately
      setIsDropdownOpen(false);

      // Force re-render by toggling a state
      setClientLoaded((prev) => !prev);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    if (isDropdownOpen || showLoginModal) {
      document.body.classList.add("dropdown-open");
    } else {
      document.body.classList.remove("dropdown-open");
    }
  }, [isDropdownOpen, showLoginModal]);

  // Get auth data from localStorage or Redux, depending on what's available
  const getAuthData = () => {
    // If we haven't mounted on client yet, use Redux state
    if (!clientLoaded) {
      return { isAuthenticated, user };
    }

    // After client mount, check localStorage first
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      try {
        return {
          isAuthenticated: true,
          user: JSON.parse(userData),
        };
      } catch (error) {
        // Fall back to Redux state
        return { isAuthenticated, user };
      }
    }

    // Default to Redux state
    return { isAuthenticated, user };
  };

  // Get current auth status
  const { isAuthenticated: isAuth, user: currentUser } = getAuthData();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and site name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-complete.png"
                alt="Logo"
                width={150}
                height={150}
                className="dark:invert"
              />
            </Link>
          </div>

          {/* Navigation links for desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Wishlist
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Booking
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Message
            </Link>
          </div>

          {/* Login button or Profile dropdown */}
          <div className="hidden md:block">
            {isAuth ? (
              <DropdownMenu
                open={isDropdownOpen}
                onOpenChange={setIsDropdownOpen}
              >
                <DropdownMenuTrigger className="flex items-center space-x-2 hover:text-primary focus:outline-none">
                  <User size={20} />
                  <span>{currentUser?.name}</span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="w-full cursor-pointer">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="w-full cursor-pointer">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer text-red-600"
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => setShowLoginModal(true)}
                variant="outline"
                className="rounded-full cursor-pointer hover:cursor-pointer"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, appears below the navbar on small screens */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Wishlist
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Booking
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Message
            </Link>
            {isAuth ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full mt-2 rounded-full text-red-600 border-red-300"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setShowLoginModal(true);
                  setIsMobileMenuOpen(false);
                }}
                variant="outline"
                className="w-full mt-2 rounded-full"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </nav>
  );
}
