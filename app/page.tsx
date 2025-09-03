import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl font-semibold text-center">Home</h1>
      <p className="text-xl text-center mt-4">
        This is an example of Home Page in my simple Next.js website.
      </p>
      <div className="flex justify-center mx-auto mt-4">
        <Link
          href={"/posts"}
          className=" bg-black text-xl text-white px-8 py-2 rounded-full hover:scale-95 transition-transform duration-75 ease-in-out"
        >
          Go to post!
        </Link>
      </div>
    </main>
  );
}
