import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error",
};

export default function ErrorPage() {
  return (
    <p className="text-green-500 text-4xl text-center font-medium">
      Sorry, something went wrong
    </p>
  );
}
