"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import img from "../../../public/pexels-armin-rimoldi-5553066.jpg";

type Errors = {
  email?: string;
  password?: string;
  form?: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const emailRegex = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    []
  );

  const validate = () => {
    const newErrors: Errors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (isLoading) return;

    setErrors({});
    if (!validate()) return;

    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      console.log("Email:", email.trim());
      console.log("Password:", password);
    } catch {
      setErrors({ form: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={img}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Center */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-white/20 bg-white/10 px-8 py-10 shadow-2xl backdrop-blur-xl sm:px-12">
            {/* Header */}
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold text-white">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm text-gray-300">
                Please sign in to access your account
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Form Error */}
              {errors.form && (
                <div className="rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  {errors.form}
                </div>
              )}

              {/* Email */}
              <div>
                <div className="relative group">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-white"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    className={`w-full rounded-lg border bg-white/5 py-3 pl-10 pr-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-400/20 ${
                      errors.email
                        ? "border-red-400/80"
                        : "border-white/10"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs font-medium text-red-300">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="relative group">
                  <Lock
                    size={18}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-white"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors((p) => ({ ...p, password: undefined }));
                    }}
                    className={`w-full rounded-lg border bg-white/5 py-3 pl-10 pr-10 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-400/20 ${
                      errors.password
                        ? "border-red-400/80"
                        : "border-white/10"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-xs font-medium text-red-300">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-lg bg-white py-3 text-sm font-semibold text-black transition hover:bg-gray-100 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
