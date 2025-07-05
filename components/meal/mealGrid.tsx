import MealItem from "./mealItem";

type Meal = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

interface MealGridProp {
  meal: Meal[];
}

export default function MealGrid({ meal }: MealGridProp) {
  return (
    <>
      <div>
        <ul className="w-90% max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[5rem] mx-auto my-8 list-none p-0">
          {meal.map((meal) => (
            <li key={meal.slug}>
              <MealItem {...meal} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
