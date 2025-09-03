import PostCard from "@/src/components/PostCard";
import { fPostDatas } from "@/src/lib/fdata";

export default function Posts() {
  const postDatas = fPostDatas;

  return (
    <main>
      <h1 className="text-6xl font-semibold text-center">Posts</h1>
      <p className="text-xl text-center mt-4">
        This is an example of Posts Page in my simple website. You can see some
        Posts here.
      </p>

      {/* Container post card */}
      <div className="mt-4 grid grid-cols-2 gap-4 place-items-center">
        {postDatas.map((post) => {
          return <PostCard key={post.id} postData={post} />;
        })}
      </div>
    </main>
  );
}
