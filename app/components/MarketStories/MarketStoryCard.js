import Image from "next/image";

export default function MarketStoryCard({ story }) {
  const { title, url, text } = story;

  return (
    // stories card
    <div className="mb-10 border hover:shadow-lg">
      {/* external card image load from dummy data */}
      <Image
        className="h-40 w-full"
        src={url}
        alt="road"
        height={1000}
        width={1000}
      />
      {/* card body */}
      <div className="px-5 py-5">
        <h3 className="font-bold mb-3">{title}</h3>
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
}
