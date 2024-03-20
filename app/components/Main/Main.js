import DiscussionForum from "../DiscussionForum/DiscussionForum";
import MarketStories from "../MarketStories/MarketStories";
import { MdArrowRight } from "react-icons/md";

export default function Main() {
  return (
    <div className="m-2 relative">
      <div className="grid grid-cols-10 gap-10">
        <div className="col-span-7">
          <DiscussionForum />
        </div>
        <div className="col-span-3">
          <MarketStories />
        </div>
      </div>
      <aside className="flex items-center fixed left-0 top-1/2 bg-blue-900 h-20 w-3">
        <button className="text-3xl text-white -ml-[9px] w-fit"><MdArrowRight/></button>
      </aside>
    </div>
  );
}
