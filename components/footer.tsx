import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { FaGuilded } from "react-icons/fa";

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
          <Link
            href="https://github.com/joeribreedveld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github className="h-4 w-4 mr-2" />
              @joeribreedveld
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/joeribreedveld/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Linkedin className="h-4 w-4 mr-2" />
              @joeribreedveld
            </Button>
          </Link>
        </li>
        <li>
          <Link href="mailto:joeri.breedveld123@gmail.com">
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              joeri.breedveld123@gmail.com
            </Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
