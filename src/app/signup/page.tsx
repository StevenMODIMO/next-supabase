import type { Metadata } from "next";
import SignupForm from "@/components/Signup";

export const metadata: Metadata = {
  title: "Get started",
};

export default function Signup() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}
