import React from "react";
import Container from "./Container";

export default function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 ${className}`}>
      <Container>
        <div className="mb-10 max-w-3xl">
          {eyebrow && (
            <span className="text-xs font-medium tracking-widest text-[#6b7b88]/90">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white">
              {title}
            </h2>
          )}
          {desc && (
            <p className="mt-3 text-slate-300 text-base sm:text-lg">
              {desc}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
