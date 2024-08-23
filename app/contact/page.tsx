import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaDiscord, FaTwitter, FaEnvelope, FaGuilded } from 'react-icons/fa';

export default function Page() {
  return (
    <main className="px-4 flex flex-col py-6 max-w-4xl mx-auto">
      <Button variant="ghost" className="self-start mb-6" asChild>
        <Link href="/">
          <span>&larr; Go back</span>
        </Link>
      </Button>

      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-4">
        Reach out to me
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        I&apos;m always open to new opportunities
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Primary Contacts</CardTitle>
            <CardDescription>Best ways to reach me</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full flex items-center justify-center" asChild>
              <Link href="https://www.guilded.gg/i/2bWdCCK8AR">
                <FaGuilded className="mr-2" style={{ color: '#F5C400' }} />
                <span>Guilded</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alternative Contacts</CardTitle>
            <CardDescription>If I'm not active on primary platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                  <Link href="https://twitter.com/yourusername">
                    <FaTwitter className="mr-2" style={{ color: '#1DA1F2' }} />
                    <span>Twitter</span>
                  </Link>
                </Button>
              </li>
              <li className="flex items-center">
                <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                  <Link href="mailto:weebjs@gmail.com">
                    <FaEnvelope className="mr-2 text-gray-600" />
                    <span>weebjs@gmail.com</span>
                  </Link>
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="leading-7 mt-8">
        I am mostly active on Twitter or Guilded. If I'm not available on either of those platforms,
        feel free to reach out via Discord or my business email.
      </p>
    </main>
  );
}