"use client";

import { useRouter } from "next/navigation";

export default function PostCard({
  postData,
}: {
  postData: {
    id: number;
    title: string;
    desc: string;
    author: string;
    date: string;
  };
}) {
  const router = useRouter();

  function handleClick() {
    router.push(`/posts/${postData.id}`);
  }

  return (
    <div
      className="border rounded-xl p-4 cursor-pointer hover:scale-95 transition-transform duration-75 ease-in-out"
      onClick={handleClick}
    >
      <h1 className="text-xl font-bold">{postData.title}</h1>
      <p className="text">{postData.desc}</p>
      <div className="flex justify-between mt-2">
        <p className="text-sm font-semibold">{postData.author}</p>
        <p className="text-sm font-semibold">{postData.date}</p>
      </div>
    </div>
  );
}
