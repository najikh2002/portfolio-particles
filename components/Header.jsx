import Link from "next/link";
import { Socials } from "../components";

const Header = () => {
  return (
    <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center py-8">
          {/* logo */}
          <Link href={'/'}>
            <div className="max-h-[48] text-center md:text-left">
              <h1 className="text-[40px] md:text-[30px]">
                <b className="tracking-[1.5px]">HIZZ</b><span className="font-light tracking-[-2px] text-accent
                ">DEV</span><span className="text-accent">.</span>
              </h1>
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
