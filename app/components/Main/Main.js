import DiscussionForum from "../DiscussionForum/DiscussionForum";
import MarketStories from "../MarketStories/MarketStories";
import { MdArrowRight } from "react-icons/md";
import SideMenu from "../SideMenu/SideMenu";

export default function Main() {
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-3 relative h-screen bg-blue-900">
          <SideMenu />
          <aside className="flex items-center absolute left-[250px] top-1/2 bg-blue-900 h-20 w-3">
            <button className="text-3xl text-white -ml-[9px] w-fit">
              <MdArrowRight />
            </button>
          </aside>
        </div>
        <div className="col-span-9 m-2">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <DiscussionForum />
            </div>
            <div className="col-span-4">
              <MarketStories />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="m-2 relative">

    //   <div className="grid grid-cols-12 gap-10">
    //     {/* <div className="col-span-8">
    //       <SideMenu />
    //     </div> */}
    //     <div className="col-span-8">
    //       <DiscussionForum />
    //     </div>
    //     <div className="col-span-4">
    //       <MarketStories />
    //     </div>
    //   </div>

    //   <aside className="flex items-center fixed left-0 top-1/2 bg-blue-900 h-20 w-3">
    //     <button className="text-3xl text-white -ml-[9px] w-fit">
    //       <MdArrowRight />
    //     </button>
    //   </aside>
    // </div>
  );
}
