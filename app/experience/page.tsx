"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";

export default function Page() {
  return (
    <main className="px-4 flex flex-col py-6 max-w-3xl mx-auto w-full">
      <div>
        <Button variant="ghost" className="mt-4" asChild>
          <Link href="/">
            <span>&larr; Go back</span>
          </Link>
        </Button>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mt-4">
          My Experience
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          A brief overview of my skills
        </p>
      </div>
      <div className="mt-8">
        <ul className="flex flex-col items-left gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Svelte</CardTitle>
                <CardDescription>
                Svelte is a front-end, open-source JavaScript framework for making interactive webpages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CircleIcon className="mr-1 h-3 w-3 fill-orange-400 text-orange-400" />
                    Svelte
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>React</CardTitle>
                <CardDescription>
                React is a free and open-source front-end JavaScript library for building user interfaces based on components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                    React
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Next.js</CardTitle>
                <CardDescription>
                Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CircleIcon className="mr-1 h-3 w-3 fill-white-400 text-white-400" />
                    Next.js
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Javascript</CardTitle>
                <CardDescription>
                JavaScript is a scripting language used to create and control dynamic website content.                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CircleIcon className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                    Javascript
                  </div>
                </div>
              </CardContent>
            </Card>
        </ul>
      </div>
    </main>
  );
}
