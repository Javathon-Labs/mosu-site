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
import { DemoPaymentMethod } from "./pay-method.jsx";

export default function Hero() {
  const [showDonateDialog, setShowDonateDialog] = useState(false);

  return (
    <section className="mx-auto max-w-5xl py-8 md:py-12 lg:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance leading-tight lg:leading-[1.1] mb-4">
            Hello! I&apos;m weebthedev
          </h1>
          <p className="text-lg font-light max-w-xl text-foreground mb-6">
            I aim to create websites that are clean, simple, and provide an
            good user experience.
          </p>
          <div className="flex gap-4 items-center">
            <Button asChild>
              <Link href="/about">
                <ArrowDownRight className="mr-2 h-4 w-4" />
                Learn more
              </Link>
            </Button>
            <Dialog open={showDonateDialog} onOpenChange={setShowDonateDialog}>
              <DialogTrigger asChild>
                <Button>
                  <HandHeart className="mr-2 h-4 w-4" />
                  Donate
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Donate</DialogTitle>
                  <DialogDescription>
                    Thank you for your support! Choose a payment method below.
                  </DialogDescription>
                </DialogHeader>
                <DemoPaymentMethod />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <Avatar className="w-48 h-48">
            <AvatarImage src="https://photobox.cardboard.ink/user/avatar/ArB9z1qA" alt="weebthedev" />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}