"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

type UserType = "renter" | "owner" | null;

export default function SignupPage() {
  const [userType, setUserType] = useState<UserType>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log({ userType, email, password, name });
  };

  if (!userType) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Choose your account type
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Select how you want to use Apex Rentals
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card
              className={`p-6 cursor-pointer transition-all ${
                userType === "renter" ? "ring-2 ring-blue-500" : "hover:shadow-md"
              }`}
              onClick={() => setUserType("renter")}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">I want to rent</h3>
                <p className="text-gray-600 text-sm">
                  Find and book properties for your stay
                </p>
              </div>
            </Card>
            <Card
              className={`p-6 cursor-pointer transition-all ${
                userType === "owner" ? "ring-2 ring-blue-500" : "hover:shadow-md"
              }`}
              onClick={() => setUserType("owner")}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">I want to list my property</h3>
                <p className="text-gray-600 text-sm">
                  List your property and manage bookings
                </p>
              </div>
            </Card>
          </div>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            As a {userType === "renter" ? "renter" : "property owner"}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setUserType(null)}
            >
              ← Back
            </Button>
            <Button type="submit">
              Create account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 