import {
  Github,
  Linkedin,
} from "@/components/icons";
import Link from "next/link";

export default function SocialMedia() {
  return (

    // Social Icons
    <nav className="flex gap-2 ">
      <Link href={"https://www.linkedin.com/in/maila-khan-7a9083342/"} target="_blank">
        <Linkedin className={`w-6 h-6`} />
      </Link>
      <Link href={"https://github.com/Mailakhan67"} target="_blank">
        <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
}
