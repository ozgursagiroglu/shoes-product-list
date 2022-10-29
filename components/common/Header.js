import Link from 'next/link';

const Header = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 h-16 md:h-24 items-center sticky top-0 z-20 bg-white">
      <div></div>
      <div className="text-center">
        <Link href="/" passHref>
          <span className="logo">SHOES</span>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
