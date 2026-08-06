"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./Testimonials.module.scss";
import StatRing from "./StatRing";

const RING_STATS = [
  { percent: 24, display: "+24%", label: "3D bilan konversiya o'sishi", source: "Forrester, 2024" },
  { percent: 76, display: "76%", label: "Iste'molchilar 3D'ni kutmoqda", source: "Adobe, 2023" },
];

const QUOTES = [
  {
    quote:
      "Kubo3D biz uchun o'yin qoidalarini o'zgartirdi — an'anaviy narx to'siqlarisiz, katta miqyosda yuqori sifatli 3D asetlarni yetkazib beradigan yechim.",
    name: "Jasur Karimov",
    role: "CTO · SportShop.uz",
  },
  {
    quote:
      "Mahsulotimizning farqlarini va xususiyatlarini tushuntirish juda muhim, ayniqsa odamlar onlayn xarid qilganda — Kubo3D bilan yaratgan raqamli egizagimiz yangi mijozlarni jalb qilishning ajoyib vositasi bo'ldi.",
    name: "Dilnoza Yusupova",
    role: "Asoschisi · Uy Dizayn",
  },
];

function TimeStatCard() {
  const numberRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const numberEl = numberRef.current;
    if (!wrap || !numberEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played.current) {
            played.current = true;
            d3.select(numberEl)
              .transition()
              .duration(1200)
              .ease(d3.easeCubicOut)
              .tween("text", () => {
                const interpolate = d3.interpolate(0, 2);
                return (t: number) => {
                  numberEl.textContent = interpolate(t).toFixed(1) + " soat";
                };
              });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.statCard} ref={wrapRef}>
      <strong ref={numberRef}>0.0 soat</strong>
      <span>Video&rsquo;dan jonli 3D modelgacha</span>
      <em>Kubo3D · UG3D&reg;</em>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <div className={styles.statsRow}>
          {RING_STATS.map((s) => (
            <StatRing
              key={s.label}
              percent={s.percent}
              display={s.display}
              label={s.label}
              source={s.source}
            />
          ))}
          <TimeStatCard />
        </div>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Mijozlar fikri</span>
          <h2 className={styles.title}>Mijozlarimiz nima deydi.</h2>
        </div>

        <div className={styles.grid}>
          {QUOTES.map((t) => (
            <figure className={styles.card} key={t.name}>
              <blockquote className={styles.quote}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true" />
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
