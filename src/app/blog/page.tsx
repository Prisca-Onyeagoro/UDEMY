import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Welcome to my Blog page</h1>
      <Link href="/blog/post-1">Blog Post 1</Link>
      <Link href="/blog/post-2">Blog Post 2</Link>
    </>
  );
}
