import DiscussionCard from "./DiscussionCard";
// loading dummy data
import posts from "@/app/data/posts.json";

export default function DiscussionForum() {
  return (
    <>
    {/* discussion forum header */}
      <h1 className="hidden md:block text-2xl font-bold uppercase bg-gray-200 text-rose-600 py-2 px-3 w-fit mb-4">
        Discussion Forum
      </h1>
      {/* dynamically load all post */}
      {posts.map((post) => (
        <DiscussionCard key={post.id} post={post} />
      ))}
    </>
  );
}
