"use client";

import { MdArrowRight } from "react-icons/md";
import DiscussionForum from "../DiscussionForum/DiscussionForum";
import MarketStories from "../MarketStories/MarketStories";
import SideMenu from "../SideMenu/SideMenu";
import { useState } from "react";

export default function Main() {
  const [hidden, setHidden] = useState(false);

  const handleMenuToggle = () => {
    console.log("menu toggle clicked");
    setHidden(!hidden);
  };

  return (
    <div className="flex">
      <div className={`w-1/5 ${hidden ? "-ml-[200px]" : "ml-0"}`}>
        <div className="sticky top-0">
          <SideMenu />
          <aside className="flex items-center absolute -right-3 top-1/2 bg-blue-900 h-20 w-3">
            <button
              onClick={handleMenuToggle}
              className="text-3xl text-white -ml-[9px] w-fit"
            >
              <MdArrowRight />
            </button>
          </aside>
        </div>
      </div>

      <div className={`m-2 ${hidden ? "w-[98%] mx-auto" : "w-4/5"}`}>
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
  );
}
