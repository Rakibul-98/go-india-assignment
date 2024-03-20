import MarketStoryCard from "./MarketStoryCard";
import stories from '@/app/data/stories.json';

export default function MarketStories() {


  return (
    <div>
        <h2>Market Stories</h2>
        {
              (stories.slice(0, 4)).map((story) => (
                <MarketStoryCard key={story.id} story={story} />
              ))
            }
    </div>
  )
}
