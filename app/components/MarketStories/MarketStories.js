import MarketStoryCard from "./MarketStoryCard";
// load dummy data
import stories from "@/app/data/stories.json";

export default function MarketStories() {
  return (
    <div>
      {/* market story header */}
      <h2 className="hidden md:block text-xl font-bold uppercase text-rose-600 bg-gray-200 w-fit p-2 mb-5">
        Market Stories
      </h2>
      {/* dynamically load stories from dummy data */}
      {stories.slice(0, 4).map((story) => (
        <MarketStoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}
