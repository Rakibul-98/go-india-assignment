import DiscussionCard from "./DiscussionCard";
import posts from "@/app/data/posts.json";

export default function DiscussionForum() {
    return (
        <>
            <h1>Discussion Forum</h1>
            {
              (posts.slice(0, 4)).map((post) => (
                <DiscussionCard key={post.id} post={post} />
              ))
            }
        </>
    );
}
