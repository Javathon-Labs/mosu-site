import Hero from "@/components/hero";
import Features from "@/components/features";
import { ModeToggle } from "@/components/ui/themeswitch";

export default function Page() {
  return (
    <main className="px-4 flex items-center flex-col md:container">
      <Hero />
      <Features/>
    </main>
  );
}
