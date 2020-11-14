import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import styles from "./Nav.module.css";

const language = [
  { href: "https://github.com/vercel/next.js", label: "Language" },
  { href: "https://github.com/vercel/next.js", label: "English" },
  { href: "https://github.com/vercel/next.js", label: "VietNam" },
  { href: "https://github.com/vercel/next.js", label: "Spanish" },
];
const homePage = [
  { href: "/", label: "Home" },
  { href: "https://nextjs.org/docs", label: "Blog" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav>
      <div className="navbar flex justify-between items-center p-2 bg-blue-600 ">
        <ul className="flex justify-between items-center space-x-4">
          {homePage.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className="text-white no-underline uppercase font-bold text-xs">
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-between items-center space-x-4">
          {language.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className="text-white uppercase font-bold">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header items-center bg-gray-500 py-6">
        <div className="flex justify-center uppercase font-bold text-white text-center list-none px-8 space-x-24">
          <li className="">
            <Link href="/">
              <a>
                <HomeIcon />
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/">
              <a>about</a>
            </Link>
          </li>
          <li className="">
            <Link href="/">
              <a>skill</a>
            </Link>
          </li>
          <li className="">
            <Link href="/">
              <a>work</a>
            </Link>
          </li>
          <li className="">
            <Link href="/">
              <a>experience</a>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
