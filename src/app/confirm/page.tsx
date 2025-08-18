import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/client";
import Confirm from "@/components/Confirm";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Email confirmation",
};

export default async function ConfirmPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/account");
  }
  return (
    <div className="h-[90%] flex items-center justify-center px-4">
      <Confirm />
    </div>
  );
}
