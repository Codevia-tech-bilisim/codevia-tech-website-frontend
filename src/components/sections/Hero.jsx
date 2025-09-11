import React from "react";
import Container from "../common/Container";
import Pill from "../common/Pill";
import PlanetFX from "../effects/PlanetFX";
import TeknoKentExtrude3D from "../TeknoKentExtrude3D";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden min-h-[90vh] pb-10 pt-40 md:pt-48">
      <PlanetFX />
      <Container>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Fikirler Sizden, Kod Bizden
            <br className="hidden sm:block" />
            <span className="text-white/90">Geleceği Birlikte Yazıyoruz</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Codevia; kendi kendine servis edilebilen ekip araçları, analitik ve modern arayüzlerle yöneticilerinizi
            güçlendirir, çalışanlarınızı her yerden bağlı tutar.
          </p>

          <div className="mt-10 flex justify-center">
            <TeknoKentExtrude3D width={560} height={380} />
          </div>
        </div>
      </Container>
    </section>
  );
}