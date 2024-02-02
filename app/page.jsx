"use client";
import Hero from "@/app/components/home/hero-module/hero";
import StatsPage from "./components/home/stats-module/statsPage";
import Carousels from "./components/ecyce/carousels";
import WorkPage from "./components/home/our-work-module/workPage";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Hero />
      <StatsPage />
      <Carousels type="work" />
      <WorkPage />
    </main>
  );
}
