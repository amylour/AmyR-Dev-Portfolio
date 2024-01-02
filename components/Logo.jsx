import Link from 'next/link';
import Image from 'next/image';


const Logo = () => {
  return (
    <Link href='/'>
      <div className="rounded-full overflow-hidden">
        <Image src='/falcon.png' width={50} height={50} priority alt='falcon placeholder' />
      </div>
    </Link>
  );
}

export default Logo;
