import { TiUser } from "react-icons/ti";
import { BiSolidBell, BiSolidMessageAltDetail } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

export default function SideMenu() {
  return (
    // side menu
    <div className="text-sm text-white h-screen bg-blue-900">
      {/* menu header */}
      <div className="flex justify-between items-center text-2xl p-3">
        <div className="flex items-center">
          <p className=" p-1">
            <TiUser />
          </p>
          <p className="text-sm">
            Hello, <span>User</span>
          </p>
        </div>
        <p>
          <BiSolidBell />
        </p>
      </div>
      <hr /> {/* horizontal line under the header */}
      <div className="py-5 leading-10">
        {/* link list */}
        <ul>
          <li className="px-3 flex items-center justify-between bg-sky-950">
            <div className="flex items-center">
              <span className="text-xl mr-1">
                <BiSolidMessageAltDetail />
              </span>
              Discussion Forum
            </div>
            <p>
              <IoMdArrowDropdown />
            </p>
          </li>
          <li className="flex items-center px-3">
            <span className="text-xl mr-1">
              <HiCurrencyDollar />
            </span>
            Market Stories
          </li>
          {/* sub list */}
          <ul className="ml-9">
            <li>Sentiment</li>
            <li>Market</li>
            <li>Sector</li>
            <li>Watchlist</li>
            <li>Events</li>
            <li>News/Interview</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
