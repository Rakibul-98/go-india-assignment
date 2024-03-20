import { FcBusinessman } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { BiComment } from "react-icons/bi";
import { MdOutlineShare } from "react-icons/md";


export default function DiscussionCard({ post }) {
  const { name, text } = post;

  const icons =[
    {id:1, img:<FaRegHeart/>, text:"2K"},
    {id:2, img:<IoEyeOutline/>, text:"2K"},
    {id:3, img:<BiComment/>, text:"2K Comments"},
    {id:4, img:<MdOutlineShare/>, text:"Share"}
  ]

  return (
    <div className="mb-8 p-2 shadow-md shadow-gray-400 border-r-2 border-t">
      <div className="grid grid-cols-6 text-sm">
        <div className="flex justify-center">
          <p className="text-3xl bg-slate-400 rounded-full h-fit p-1">
            <FcBusinessman />
          </p>
        </div>
        <div className="col-span-4">
          <div className="flex">
            <h3 className="font-bold mr-5">{name}</h3>
            <button className="bg-blue-600 text-white rounded-2xl px-3 text-xs cursor-default">
              Sector 2
            </button>
          </div>
          <div>
            <p className="my-2 leading-5">{text}</p>
          </div>
          <div className="flex justify-between text-xs">
            {
                icons.map((icon) => (
                  <div key={icon.id} className="flex items-center gap-1">
                    {icon.img}
                    <p>{icon.text}</p>
                  </div>
                ))

            }
          </div>
        </div>
        <div>
          <small className="text-[10px] text-blue-700">
            <span>2</span> mins ago
          </small>
        </div>
      </div>
    </div>
  );
}
