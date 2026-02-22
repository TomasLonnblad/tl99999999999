import Image from 'next/image';
import Link from 'next/link';

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <Link
        href=""
        className="group flex items-center justify-center gap-x-1.5"
        target=""
      >

        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
        
        </span>
      </Link>
      <Link
        href=""
        className="group flex items-center justify-center gap-x-1.5"
        target="k"
      >

        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
      
        </span>
      </Link>
    </div>
  );
};
export default NavIcons;
