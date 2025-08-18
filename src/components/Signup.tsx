// components/SignupForm.tsx
"use client";

import { Mail, Lock, Image } from "lucide-react";
import { useState } from "react";
import { signup } from "@/app/signup/action";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await signup(formData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-green-200">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
        Sign Up
      </h2>
      <form
        onFocus={() => setError(null)}
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className="flex items-center border border-green-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400">
          <Mail className="text-green-400 w-5 h-5 mr-2" />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="flex-1 outline-none"
          />
        </div>

        <div className="flex items-center border border-green-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400">
          <Lock className="text-green-400 w-5 h-5 mr-2" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="flex-1 outline-none"
          />
        </div>

        <label className="flex items-center border border-green-300 rounded-lg px-3 py-2 cursor-pointer hover:bg-green-50 transition-colors">
          <Image className="text-green-400 w-5 h-5 mr-2" />
          <input name="image" type="file" accept="image/*" className="hidden" />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full disabled:bg-green-100 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Sign Up
        </button>
      </form>
      {error && (
        <div className="text-center text-red-500 py-4 font-medium">{error}</div>
      )}
    </div>
  );
}
