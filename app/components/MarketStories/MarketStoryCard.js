import mImage from '../../../public/react.png';
import Image from 'next/image';

export default function MarketStoryCard() {
  return (
    <div>
        <div className='border'>
            <Image src={mImage} width={300} alt='bg'></Image>
            <div className='px-5 py-2'>
                <h3>Title</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At in cum dolor enim ex error iste porro nisi maxime accusamus.</p>
            </div>
        </div>
    </div>
  )
}
