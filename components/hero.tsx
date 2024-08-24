"use client"

import { Button } from "@/components/ui/button";
import { ArrowDownRight, HandHeart, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Hero() {
  const [showDonateDialog, setShowDonateDialog] = useState(false);

  return (
    <section className="flex justify-center items-center mx-auto max-w-5xl py-8 md:py-12 lg:py-24">
      <div className="flex flex-col items-center text-center">
        <div className="md:w-2/3">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance leading-tight lg:leading-[1.1] mb-4">
            Mosu
          </h1>
          <p className="text-lg font-light max-w-xl text-foreground mb-6 mx-auto">
            Moderation made simple.
          </p>
          <div className="flex justify-center gap-4 items-center">
            <Button asChild>
              <Link href="/about">
                <ArrowDownRight className="mr-2 h-4 w-4" />
                Learn more
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}