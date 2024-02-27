"use client";
import Hero from "./components/home/hero-module/hero";
import StatsPage from "./components/home/stats-module/statsPage";
import Carousels from "./components/ecyce/carousels";
import WorkPage from "./components/home/our-work-module/workPage";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import LetsWorkPage from "./components/home/lets-work-module/letsWorkPage";
import Navbar from './components/ecyce/navbar';

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
      <Navbar />
      <Hero />
      <StatsPage />
      <Carousels type="work" />
      <WorkPage />
      <Carousels type={"talk"} />
      <LetsWorkPage />
    </main>
  );
}
