import { Hero } from "@/components/home/hero";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";
import { Journey } from "@/components/home/journey";
import { Outcomes } from "@/components/home/outcomes";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Journey />
      <Outcomes />
      <Testimonials />
      <FinalCta />
    </>
  );
}
