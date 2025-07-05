"use server";

import { redirect } from "next/navigation";
import { SaveMeal } from "./Meals";

// server action to handle form submission
// This function will be called when the form is submmited
// it will recieve the form data as an argument
export async function shareMeal(formData: FormData) {
  "use server";

  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instruction: formData.get("instructions") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    image: formData.get("image") as Blob | string,
  };

  await SaveMeal(meal);
  redirect("/meal");
}
