import Image from "next/image";
import food1 from "@/app/assets/food1.jpg";
import { getMeal } from "../../../../lib/Meals";
import { notFound } from "next/navigation";
import { title } from "process";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return {
    title: `meal- ${slug}`,
    description: ` This is the meal page for ${slug}`,
  };
}

export default async function Mealapp({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const meal = getMeal(slug);
  console.log(meal);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <div>{/* <Image src={food1} alt="food" fill /> */}</div>
      <div>
        <p>{meal.title}</p>
        <div>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </div>
        <main>
          <p dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
        </main>
      </div>
    </>
  );
}
