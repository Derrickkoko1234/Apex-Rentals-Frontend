/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import Image from "next/image"; // Add Image import
import { FormWrapper } from "@/components/forms/FormWrapper";
import { FormikField } from "@/components/forms/FormikField";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/lib/validation/auth.schema";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LoginFormValues {
  name: string;
  email: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // const [isKingsChatLoading, setIsKingsChatLoading] = useState(false);

  const initialValues: LoginFormValues = {
    name: "",
    email: "",
  };

  const handleSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    try {
      const response = await dispatch(login(values)).unwrap();
      console.log(response.data);

      // save token to local storage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      onClose(); // Close the modal on successful login
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleKingsChatSignIn = async () => {
  //   setIsKingsChatLoading(true);
  //   try {
  //     // Implementation for KingsChat Sign-in
  //     // You would typically call an auth action like:
  //     // await dispatch(loginWithKingsChat()).unwrap();
  //     // For now, we'll just log the attempt
  //     console.log("KingsChat Sign-in clicked");

  //     // Simulate a delay
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     onClose();
  //     router.push("/dashboard");
  //   } catch (error) {
  //     console.error("KingsChat login failed:", error);
  //   } finally {
  //     setIsKingsChatLoading(false);
  //   }
  // };

  // To handle the ESC key or clicking outside to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Sign in to your account
          </DialogTitle>
        </DialogHeader>

        {/* KingsChat Sign-in Button */}
        <div className="mb-4 flex items-center justify-center">
          <a href="https://accounts.kingsch.at/?client_id=com.kingschat&scopes=%5B%22conference_calls%22%5D&post_redirect=true&redirect_uri=http://localhost:3000/" className="kc-web-sdk-btn"></a>
        </div>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <FormWrapper
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {() => (
            <>
              <div className="space-y-4">
                <FormikField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                />
                <FormikField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-primary hover:text-primary/80"
                    onClick={onClose}
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </>
          )}
        </FormWrapper>
      </DialogContent>
    </Dialog>
  );
}
