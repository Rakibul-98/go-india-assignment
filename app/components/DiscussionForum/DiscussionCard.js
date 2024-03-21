import { FcBusinessman } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { BiComment } from "react-icons/bi";
import { MdOutlineShare } from "react-icons/md";

export default function DiscussionCard({ post }) {
  const { name, text } = post;

  // icon array used to minimize code redundancy
  const icons = [
    { id: 1, img: <FaRegHeart />, text: "2K" },
    { id: 2, img: <IoEyeOutline />, text: "2K" },
    { id: 3, img: <BiComment />, text: "2K Comments" },
    { id: 4, img: <MdOutlineShare />, text: "Share" },
  ];

  return (
    <div className="discussion-card mb-8 p-2 shadow-md shadow-gray-400 border-r-2 border-t hover:shadow-xl">
      {/* card body */}
      <div className="grid grid-cols-6 md:text-sm text-xs">
        <div className="card-icon flex justify-center">
          <p className="text-3xl bg-slate-400 rounded-full h-fit p-1">
            <FcBusinessman />
          </p>
        </div>
        {/* post-body */}
        <div className="col-span-4">
        {/* post-header */}
          <div className="flex">
            <h3 className="font-bold mr-5">{name}</h3>
            <button className="bg-blue-600 text-white rounded-2xl px-3 text-xs cursor-default">
              Sector 2
            </button>
          </div>
          {/* post text */}
          <div>
            <p className="my-2 leading-5">{text}</p>
          </div>
          {/* post actions */}
          <div className="flex justify-between md:text-xs text-[10px]">
            {icons.map((icon) => (
              <div key={icon.id} className="flex items-center gap-1">
                {icon.img}
                <p>{icon.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* post time */}
        <div className="flex justify-end">
          <small className="text-[10px] text-blue-700">
            <span>2</span> mins ago
          </small>
        </div>
      </div>
    </div>
  );
}
