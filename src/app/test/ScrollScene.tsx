"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollScene() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1000",
          scrub: 1,
          pin: true,
        },
      });

      timeline
        .to(".scene-title", {
          y: -100,
          opacity: 0,
          scale: 0.5,
        })
        .to(
          ".scene-card",
          {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.2,
          },
          "-=0.2",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b16] text-white"
    >
      <div className="scene-title absolute text-center">
        <p className="mb-4 text-sm tracking-[0.4em] text-blue-300">MARKETS YE</p>

        <h2 className="text-5xl font-bold md:text-7xl">أسعار اليمن</h2>

        <p className="mt-5 text-gray-400">اكتشف الأسعار، مدينةً بعد مدينة.</p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {["صنعاء", "تعز", "عدن"].map((city) => (
          <div
            key={city}
            className="scene-card translate-y-24 rounded-2xl border border-white/10 bg-white/5 p-8 text-center opacity-0 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold">{city}</h3>
            <p className="mt-3 text-gray-400">تابع أسعار المنتجات</p>
          </div>
        ))}
      </div>
    </section>
  );
}
