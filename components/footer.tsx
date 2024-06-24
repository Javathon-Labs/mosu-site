import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { FaDiscord, FaGuilded, FaTwitter } from "react-icons/fa6";

import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="px-4 md:container py-12 align-bottom mt-auto"
      id="footer"
    >
      <ul className="flex flex-wrap gap-4 justify-center">
        <li>
          <Link
            href="https://www.guilded.gg/u/weebwashere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <FaGuilded className="h-4 w-4 mr-2" />
              @weebwashere
            </Button>
          </Link>
        </li>
        <li>
          <Link href="mailto:weebjs@gmail.com">
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              weebjs@gmail.com
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <FaDiscord className="h-4 w-4 mr-2" />
              @weebguilded
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/weebthedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <FaTwitter className="h-4 w-4 mr-2" />
              @weebthedev
            </Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
