import Link from "next/link";
import SocialMedia from "./SocialMedia";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className=" flex items-center justify-between xs:flex-row py-2 shadow-lg shadow-gray-100 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <nav className=" flex md:flex md:items-center md:justify-center md:gap-x-24 font-bold uppercase">
        <Link href={"/"} className="text-3xl text-dark dark:text-light">
        Delight<span className="text-3xl text-red-600"> in Every Bite</span>
        </Link>
        {/* <Link href={"/blogs"} className="bg-accentDarkSecondary px-4 py-1 rounded-lg text-dark ">Blogs</Link> */}
      </nav>
      <SocialMedia />
      <ThemeToggle />
    </header>
  );
}
