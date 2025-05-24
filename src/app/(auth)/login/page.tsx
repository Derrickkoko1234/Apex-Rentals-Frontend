"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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

  const initialValues: LoginFormValues = {
    name: "",
    email: "",
  };

  const handleSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    try {
      await dispatch(login(values)).unwrap();
      onClose(); // Close the modal on successful login
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:text-primary/80"
              onClick={onClose}
            >
              create a new account
            </Link>
          </p>
        </DialogHeader>

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
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                />
                <FormikField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
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
