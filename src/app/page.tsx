"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-row gap-6">
        <h2>images</h2>
        <Link href="/meal">Browse Meals</Link>
        <Link href="/meal/share">Share meals</Link>
        <Link href="/community">Engage in communities</Link>
      </div>
    </>
  );
}
