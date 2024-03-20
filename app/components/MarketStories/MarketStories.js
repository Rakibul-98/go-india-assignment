import MarketStoryCard from "./MarketStoryCard";
import stories from '@/app/data/stories.json';

export default function MarketStories() {


  return (
    <div>
        <h2 className="text-xl font-bold uppercase text-rose-600 bg-gray-200 w-fit p-2 mb-5">Market Stories</h2>
        {
              (stories.slice(0, 4)).map((story) => (
                <MarketStoryCard key={story.id} story={story} />
              ))
            }
    </div>
  )
}
