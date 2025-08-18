"use client";
import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="py-2 px-6">{children}</div>;
}
