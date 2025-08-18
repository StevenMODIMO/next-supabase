"use client";

import { Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle login API call
    console.log({ email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-green-200">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex items-center border border-green-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400">
          <Mail className="text-green-400 w-5 h-5 mr-2" />
          <input
          name="email"
            type="email"
            placeholder="Email"
            className="flex-1 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center border border-green-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400">
          <Lock className="text-green-400 w-5 h-5 mr-2" />
          <input
          name="password"
            type="password"
            placeholder="Password"
            className="flex-1 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
