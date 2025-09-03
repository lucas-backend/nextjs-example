import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between px-8 py-4 border-b">
        <h2 className="text-2xl font-bold">EXAMPLE</h2>
        <div className="flex gap-4 font-semibold">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          <Link href={"/posts"} className="hover:underline">
            Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
