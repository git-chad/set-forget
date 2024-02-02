import Image from "next/image";
import Hero from "@/app/components/home/hero-module/hero";
import StatsPage from "./components/home/stats-module/statsPage";
import Carousels from "./components/ecyce/carousels";
import WorkPage from "./components/home/our-work-module/workPage";

export default function Home() {
  return (
    <main>
      <Hero/>
      <StatsPage/>
      <Carousels type='work'/>
      {/* <Carousels type='talk'/> */}
      <WorkPage/>
    </main>
  );
}
