import Image from "next/image";
import Link from "next/link";
import { Socials } from "../components";

const Header = () => {
  return (
    <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-1 py-8">
          {/* logo */}
          <Link href={'/'}>
            {/* <Image 
              src={'/logo.svg'}
              width={220}
              height={48}
              alt=""
              priority={true}
            /> */}
            <div className="">
              <p className="text-[34px] xl:text-[28px] font-bold text-white">
                HIZZ<span className="text-accent font-extralight">DEV.</span>
              </p>
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
