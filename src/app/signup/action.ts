"use server";
import { createClient } from "@/utils/supabase/server";
import { isEmail, isStrongPassword, isEmpty } from "validator";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const image = formData.get("image") as File | null;

  if (isEmpty(email) || isEmpty(password)) {
    throw new Error("Email and password are required");
  }

  if (!isEmail(email)) {
    throw new Error("Invalid email format");
  }

  if (!isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log({ email, password, image, user: data.user });

  if (data.user?.confirmation_sent_at) {
    // Email confirmation required
    return redirect("/confirm"); // redirect to a page telling user to check email
  }

  // --------------------------
  // 4️⃣ Auto-login flow
  // --------------------------
  // Supabase sets session cookies automatically
  revalidatePath("/", "layout"); // update any user-dependent layout
  return redirect("/account"); // redirect to private account/dashboard page
}
