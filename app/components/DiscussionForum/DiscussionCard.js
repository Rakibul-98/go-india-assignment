import { FcBusinessman } from "react-icons/fc";

export default function DiscussionCard() {
  return (
      <div className="grid grid-cols-6">
        <div>
        <FcBusinessman />
        </div>
        <div className="col-span-4">
            <div className="flex">
                <h3>Name</h3>
                <button>Sector 2</button>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem. Velit omnis excepturi, necessitatibus cupiditate dignissimos quas officiis sit atque?</p>
            </div>
            <div className="flex justify-between">
                <div>like</div>
                <div>videw</div>
                <div>comment</div>
                <div>share</div>
            </div>
        </div>
        <div>
            <small><span>2</span> mins ago</small>
        </div>
      </div>
  );
}
