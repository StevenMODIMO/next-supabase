"use client";
import { MailCheck } from "lucide-react";

export default function Confirm() {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-green-200 p-6 text-center">
      <MailCheck className="mx-auto text-green-500 w-12 h-12 mb-4" />
      <h1 className="text-2xl font-bold text-green-700 mb-2">
        Check your email!
      </h1>
      <p className="text-green-600 mb-6">
        We’ve sent a confirmation link to your email address. Please click the
        link to activate your account and complete the signup process.
      </p>
      <p className="text-sm text-green-500">
        Didn’t receive the email? Check your spam folder or try signing up
        again.
      </p>
    </div>
  );
}
