import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { ViewTransitions } from 'next-view-transitions'
type TLayout = Readonly<{
  children: React.ReactNode;
}>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "weebthedev",
  description: "anime otaku who likes to code.",
};

export default function Layout({ children }: TLayout) {
  return (
    <html lang="en" className="h-full dark">
      <body className={cn(inter.className, "h-full")}>
        <div className="h-full flex flex-col items-center">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
          {children}
          <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
