import Link from "next/link";
import MealGrid from "../../../components/meal/mealGrid";
import { Suspense } from "react";
import { getMeals } from "../../../lib/Meals";

async function Meal() {
  const meals = await getMeals();
  return (
    <>
      <MealGrid meal={meals} />
    </>
  );
}

export default async function Mealpage() {
  return (
    <>
      <h1 className="text-orange-500">Welcome</h1>
      <h2>
        <Link href="/meal/share">Share meal recipie</Link>
      </h2>

      <Suspense fallback={<div className="text-center">Fetching data...</div>}>
        <Meal />
      </Suspense>
    </>
  );
}
