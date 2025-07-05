import Link from "next/link";
import D_CHAIR from "@/app/assets/3D_CHAIR.jpg";
import Image from "next/image";
import Navlink from "./Navlink/navlink";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-800 ">
        <Link href="/">
          <Image
            src={D_CHAIR}
            alt="threeD chair"
            width={100}
            height={100}
            className="rounded-4xl"
          />
          Meal-chair
        </Link>

        <nav>
          <ul className="flex gap-x-4  ">
            <li>
              <Navlink href="/meal">Browse meal</Navlink>
            </li>
            <li>
              <Navlink href="/community">meal community</Navlink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
