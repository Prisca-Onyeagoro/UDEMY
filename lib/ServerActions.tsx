"use server";

import { NextResponse } from "next/server";
import { SaveMeal } from "./Meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState: any, formData: FormData) {
  const isInvalidText = (text: any) => {
    return !text || text.trim() === "";
  };

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instruction: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  // Validate fields here...
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instruction) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    (typeof meal.creator_email === "string" &&
      !meal.creator_email.includes("@")) ||
    !meal.image
  ) {
    return { message: "invalid input" };
  }

  await SaveMeal(meal);
  revalidatePath("/meal");
  redirect("/meal");
}
