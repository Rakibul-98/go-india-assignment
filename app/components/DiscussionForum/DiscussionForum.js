import DiscussionCard from "./DiscussionCard";
import posts from "@/app/data/posts.json";

export default function DiscussionForum() {
  return (
    <>
      <h1 className="text-2xl font-bold uppercase bg-gray-200 text-rose-600 py-2 px-3 w-fit mb-4">
        Discussion Forum
      </h1>
      {posts.map((post) => (
        <DiscussionCard key={post.id} post={post} />
      ))}
    </>
  );
}
