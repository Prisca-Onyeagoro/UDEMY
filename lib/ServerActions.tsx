import { NextResponse } from "next/server";
import { SaveMeal } from "@/lib/Meals";

export async function POST(request: Request) {
  const formData = await request.formData();

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instruction: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  // Validate fields here...

  await SaveMeal(meal);
  return NextResponse.json({ message: "Meal shared successfully!" });
}
