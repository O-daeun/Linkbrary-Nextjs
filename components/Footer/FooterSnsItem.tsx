import Link from 'next/link';
import Image from 'next/image';
import facebookImg from '@/public/images/sns_facebook.png';
import twitterImg from '@/public/images/sns_twitter.png';
import youtubeImg from '@/public/images/sns_youtube.png';
import instagramImg from '@/public/images/sns_instagram.png';

const imgList = [facebookImg, twitterImg, youtubeImg, instagramImg];

interface Props {
  id: number;
  name: string;
  url: string;
}

export default function FooterSnsItem({ id, name, url }: Props) {
  return (
    <li>
      <Link href={url} target='_blank' rel='noreferrer'>
        <Image src={imgList[id - 1]} alt={name} width='20' height='20' />
      </Link>
    </li>
  );
}
