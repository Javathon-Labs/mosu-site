import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance leading-tight lg:leading-[1.1]">
        Hello! I&apos;m weebthedev
      </h1>
      <p className="text-lg font-light max-w-xl text-center text-foreground">
        I aim to create websites that are clean, simple, and provide an
        good user experience.
      </p>
      <div className="flex gap-4 py-4 md:pb-10 items-center">
        <Button asChild>
          <Link href="/about">Learn more</Link>
        </Button>
      </div>
    </section>
  );
}
