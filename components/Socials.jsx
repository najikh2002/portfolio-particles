import Link from "next/link";
import { 
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookLine,
    RiLinkedinLine
 } from "react-icons/ri";

 const socials = [
  {
    comp: <RiYoutubeLine />,
    link: 'https://www.youtube.com'
  },
  {
    comp: <RiInstagramLine />,
    link: 'https://www.instagram.com'
  },
  {
    comp: <RiFacebookLine />,
    link: 'https://www.facebook.com'
  },
  {
    comp: <RiLinkedinLine />,
    link: 'https://www.linkedin.com'
  }
];

const Socials = () => (
  <div className="flex gap-x-5 text-xl">
    {socials.map((social, index) => (
      <Link href={social.link} key={index} className="hover:text-accent transition-all duration-300">
        {social.comp}
      </Link>
    ))}
  </div>
);
export default Socials;
