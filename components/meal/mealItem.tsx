import Link from "next/link";
import Image from "next/image";

interface MealItemProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealItemProps) {
  return (
    <article
      className="
        flex flex-col justify-between
        h-full
        rounded
        shadow-[0_0_12px_rgba(0,0,0,0.3)]
        overflow-hidden
        transition-all duration-300 ease-in-out
        text-[#ddd6cb]
        bg-gradient-to-r from-[#2c1e19] to-[#25200f]
      "
    >
      <header>
        <div className="relative h-[15rem]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="pt-2 pb-0 pr-4 pl-4">
          <h2 className="m-0 text-2xl font-montserrat">{title}</h2>
          <p className="m-0 text-xs text-[#cfa69b] italic">{`by ${creator}`}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 pr-4 pl-4 pb-0">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meal/${slug}`}
            className="
              inline-block mt-4 px-4 py-2 rounded-lg
              bg-gradient-to-r from-[#f9572a] to-[#ff9b05]
              text-white font-bold no-underline
              transition-all duration-300
              hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]
              hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]
              active:bg-gradient-to-r active:from-[#fd4715] active:to-[#f9b241]
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
