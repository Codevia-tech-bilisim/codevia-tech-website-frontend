import React from "react";
import BackgroundGradient from "./components/effects/BackgroundGradient";
import AmbientLighting from "./components/effects/AmbientLighting";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero, Services, Work, Process, About, Contact } from "./components/sections";
import { TranslationProvider } from "./contexts/TranslationContext";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App() {
  // Global smooth scroll
  useSmoothScroll(true);

  return (
    <TranslationProvider>
      <div className="relative min-h-screen overflow-hidden bg-[#0b1020]">
        <BackgroundGradient />

        <div className="relative z-10 min-h-screen text-slate-100">
          <Header />

          <Hero />
          <Services />
          <Work />
          <Process />
          <About />
          <Contact />

          <Footer />
        </div>
      </div>
    </TranslationProvider>
  );
}