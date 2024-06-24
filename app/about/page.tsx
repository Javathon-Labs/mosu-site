import { Button } from "@/components/ui/button";
import { FaHandPeace } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  return (
    <main className="px-4 flex flex-col py-6 max-w-3xl mx-auto">
      <div>
        <Button variant="ghost" className="mt-4" asChild>
          <Link href="/">
            <span>&larr; Go back</span>
          </Link>
        </Button>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mt-4">
          About Me
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Get to know me better
        </p>
      </div>
      <div className="mt-8">
        <p className="leading-7">
          I'm Tahfari Chin (known as "weebthedev"), a fullstack web developer getting to know more about web development, i currently have experience with NextJS, Javascript, React, Svelte, HTML, and CSS.
        </p>
        
        
        <p className="mt-10">
          I also make Guilded bots, and have fun working on random projects i make. I play games such as Brawlhalla, Roblox, MultiVersus, etc.
        </p>

        <p className="mt-10">
          :D
        </p>

        <p className="mt-10">
          <FaHandPeace className="h-10 w-10"/>
        </p>
      </div>
    </main>
  );
}
