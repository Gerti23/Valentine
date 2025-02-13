import { FloatingHearts } from "@/components/FloatingHearts/FloatingHearts";
import { HeroSection } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className=" p-8 overflow-hidden">
      <HeroSection />
      <FloatingHearts />
    </main>
  );
}
