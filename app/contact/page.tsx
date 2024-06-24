import { Button } from "@/components/ui/button";
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
          Reach out to me
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          I&apos;m always open to new opportunities
        </p>
      </div>
      <div className="mt-8">
        <p className="leading-7">
          You can Reach out to me From either{" "}
          <Link
            href="https://discord.gg/2bWdCCK8AR"
            style={{
              color: "#7785cc",
            }}
          >
            Discord
          </Link>
          , or{" "}
          <Link
            href="https://discord.gg/2bWdCCK8AR"
            style={{
              color: "#F5C400",
            }}
          >
            Guilded
          </Link>
          , i am mostly active on both.
        </p>

        <p className="leading-7 mt-6">
          If im not active on either of those, you can cantact me on my twitter, or my buisness email down below.
        </p>
      </div>
    </main>
  );
}