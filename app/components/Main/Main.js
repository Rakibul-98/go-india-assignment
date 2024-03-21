// client components
"use client";

import { MdArrowRight } from "react-icons/md";
import DiscussionForum from "../DiscussionForum/DiscussionForum";
import MarketStories from "../MarketStories/MarketStories";
import SideMenu from "../SideMenu/SideMenu";
import { useState, useEffect } from "react";
import useScreenSize from "@/app/lib/useScreenSize";

export default function Main() {
  // some states for interaction
  const screenSize = useScreenSize();
  const [hidden, setHidden] = useState(false);
  const [showForum, setShowForum] = useState(true);
  const [showStory, setShowStory] = useState(true);

  // use effect hook auto render on changing screen size
  useEffect(() => {
    if (screenSize.width <= 767) {
      setShowForum(true);
      setShowStory(false);
    } else {
      setShowForum(true);
      setShowStory(true);
    }
  }, [screenSize.width]);

  // side menu toggle button
  const handleMenuToggle = () => {
    setHidden(!hidden);
  };

  // function to handle showing the discussion forum
  const handleShowForum = () => {
    setShowForum(true);
    setShowStory(false);
  };

  // function to handle showing the market stories
  const handleShowStory = () => {
    setShowStory(true);
    setShowForum(false);
  };

  return (
    // main section
    <div className="flex">
      {/* side menu section */}
      <div
        className={`fixed z-50 md:sticky transition-all duration-300 md:w-[25%] lg:w-1/5 ${
          hidden
            ? "ml-0"
            : "-ml-[180px] md:-ml-[192px] lg:-ml-[200px] xl:-ml-[268px]"
        }`}
      >
        <div className="sticky top-0">
          <SideMenu />
          {/* button to handle menu */}
          <aside
            onClick={handleMenuToggle}
            className="flex items-center absolute cursor-pointer -right-3 top-[40%] bg-blue-900 h-28 w-3"
          >
            <button className="text-3xl text-white -ml-[9px] w-fit">
              <MdArrowRight />
            </button>
          </aside>
        </div>
      </div>
      {/* content section */}
      <div
        className={`md:m-2 ${hidden ? "md:w-4/5" : "md:w-[98%] md:mx-auto"}`}
      >
        {/* forum header for small screen size */}
        <div className="grid md:hidden grid-cols-2 text-center bg-blue-900 text-white cursor-pointer mb-5 sticky top-0">
          <p
            className={`${
              showForum ? "bg-blue-950 border-b border-red-700" : "bg-blue-900"
            } py-1`}
            onClick={handleShowForum}
          >
            Discussion Forum
          </p>
          <p
            className={`${
              showStory ? "bg-blue-950 border-b border-red-700" : "bg-blue-900"
            } py-1`}
            onClick={handleShowStory}
          >
            Market Stories
          </p>
        </div>
        {/* forum and story card */}
        <div className="md:grid grid-cols-12 gap-10">
          <div className={`${showForum ? "" : "hidden"} md:col-span-8`}>
            <DiscussionForum />
          </div>
          <div className={`${showStory ? "" : "hidden"} md:col-span-4`}>
            <MarketStories />
          </div>
        </div>
      </div>
    </div>
  );
}
