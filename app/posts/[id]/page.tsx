import { fPostDatas } from "@/src/lib/fdata";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = await params;
  const idx = Number(id);

  if (isNaN(idx)) {
    notFound();
  }
  const post = fPostDatas[idx - 1];

  return (
    <div className="min-h-full flex-row gap-8">
      <h1 className="text-4xl font-semibold">{post.title}</h1>
      <div className="text-gray-500 font-semibold flex gap-4">
        <p>{post.date}</p>
        <p>By {post.author}</p>
      </div>
      <p className="text-xl mt-4">{post.desc}</p>
    </div>
  );
}
