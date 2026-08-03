import Hero from "@/components/sections/Hero";
import DersSection from "@/components/sections/DersSection";
import CafeSection from "@/components/sections/CafeSection";
import WeekendSection from "@/components/sections/WeekendSection";
import OzelDersSection from "@/components/sections/OzelDersSection";
import StatsVideoSection from "@/components/sections/StatsVideoSection";
import LocationSection from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <DersSection />
      <CafeSection />
      <WeekendSection />
      <OzelDersSection />
      <StatsVideoSection />
      <LocationSection />
    </>
  );
}
