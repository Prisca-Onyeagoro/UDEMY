"use client";

import Image from "next/image";
import Link from "next/link";
import food1 from "@/app/assets/food1.jpg";
import food2 from "@/app/assets/food2.jpg";
import food3 from "@/app/assets/food3.jpg";
import food4 from "@/app/assets/food4.jpg";
import food5 from "@/app/assets/food5.jpg";
import food6 from "@/app/assets/food6.jpg";
import food7 from "@/app/assets/food7.jpg";
import food8 from "@/app/assets/food8.jpg";
import { useEffect, useState } from "react";

const images = [
  { image: food1, alt: "african food" },
  { image: food2, alt: "african food" },
  { image: food3, alt: "african food" },
  { image: food4, alt: "african food" },
  { image: food5, alt: "african food" },
  { image: food6, alt: "african food" },
  { image: food7, alt: "african food" },
  { image: food8, alt: "african food" },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  // console.log(images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {images.map((image, index) => (
        <div className="">
          <Image src={image.image} alt={image.alt} key={index} />
        </div>
      ))}
    </>
  );
}
