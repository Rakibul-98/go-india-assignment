import DiscussionForum from "../DiscussionForum/DiscussionForum";
import MarketStories from "../MarketStories/MarketStories";

export default function Main() {
  return (
    <div>
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <DiscussionForum />
        </div>
        <div className="col-span-2">
          <MarketStories />
        </div>
      </div>
    </div>
  );
}
