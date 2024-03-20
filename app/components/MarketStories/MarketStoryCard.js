import Image from 'next/image';
// import imageUrl from 'https://ibb.co/7rCsCF9';

export default function MarketStoryCard({story}) {

  const {title, url,text} = story;

  return (
    <div>
        <div className='border'>
            <Image className='w-full' src={url} alt="road" width={1000} height={1000}/>
            <div className='px-5 py-2'>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}
