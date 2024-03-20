import { TiUser } from "react-icons/ti";
import { BiSolidBell, BiSolidMessageAltDetail } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

export default function SideMenu() {
  return (
    <div className="text-sm text-white">
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
      <hr />
      <div className="py-5 leading-8">
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
