import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TastimonialCard from "@/components/TastimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TastimonialCard/>
    </main>
  );
}
