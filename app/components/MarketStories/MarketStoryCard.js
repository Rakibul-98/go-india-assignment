import Image from "next/image";
// import imageUrl from 'https://ibb.co/7rCsCF9';

export default function MarketStoryCard({ story }) {
  const { title, url, text } = story;

  return (
    <div className="mb-10 border">
      <Image
        className="w-full"
        src={url}
        alt="road"
        width={1000}
        height={1000}
      />
      <div className="px-5 py-5">
        <h3 className="font-bold mb-3">{title}</h3>
        <p className="text-xs">{text}</p>
      </div>
    </div>
  );
}
