"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";

const LOGOS = [
  "Spektrum Brendlar",
  "Anglers Only",
  "Recondition",
  "BEPO",
  "Cosatto",
  "SportsShoes",
];

export default function Hero() {
  const logoTrack = [...LOGOS, ...LOGOS];
  const visualRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = visualRef.current?.getBoundingClientRect();
    if (!rect || !wrapRef.current) return;
    const mx = (e.clientX - rect.left) / rect.width - 0.5;
    const my = (e.clientY - rect.top) / rect.height - 0.5;
    wrapRef.current.style.setProperty("--mx", mx.toFixed(3));
    wrapRef.current.style.setProperty("--my", my.toFixed(3));
  }

  function handleMouseLeave() {
    wrapRef.current?.style.setProperty("--mx", "0");
    wrapRef.current?.style.setProperty("--my", "0");
  }

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;

    let ticking = false;

    function update() {
      ticking = false;
      const rect = visual!.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when the visual is centered in the viewport, growing toward 1 as
      // it scrolls up and out of view.
      const progress = Math.min(Math.max((vh * 0.5 - rect.top) / vh, 0), 1);
      visual!.style.setProperty("--scrollP", progress.toFixed(3));
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroTop}>
        <div className={styles.scrim} aria-hidden="true" />

        <div className={styles.inner}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              3D &amp; AI studiya ecommerce uchun &mdash; UG3D&reg;
            </span>

            <h1 className={styles.title}>
              <span className={styles.titleLine}>Mijoz ishonchini</span>
              <span className={`${styles.titleLine} ${styles.titleGhost}`}>
                tez yarating.
              </span>
            </h1>

            <p className={styles.subtitle}>
              ~3 daqiqalik video&rsquo;dan raqamli egizak yarating. 3D, AR va
              AI kontentni bitta platformada boshqaring. Xaridorlarni tezroq
              mijozga aylantiring.
            </p>

            <a href="/register" className={styles.primaryBtn}>
              Yaratishni boshlash &rarr;
            </a>
          </div>

          <div
            className={styles.visual}
            aria-hidden="true"
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.glowOrb} />
            <div className={styles.heroFloat}>
              <div className={styles.heroImageWrap} ref={wrapRef}>
                <span className={styles.heroVideoTag}>360&deg; &middot; AI</span>
                <video
                  className={styles.heroVideo}
                  poster="/videos/hero-shoe-rotate-poster.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/hero-shoe-rotate.webm" type="video/webm" />
                  <source src="/videos/hero-shoe-rotate.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <svg
              className={styles.trail}
              viewBox="0 0 500 200"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M20,140 C140,220 300,220 420,90"
                stroke="url(#trailGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="trailGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#e8672f" stopOpacity="0" />
                  <stop offset="55%" stopColor="#ff9d4d" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffd8a8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className={styles.powerCard}>
            <span className={styles.powerEyebrow}>UG3D&reg; asosida</span>
            <p>
              Voxelo emas, Kubo3D &mdash; UG3D&reg; deb ataladigan mulkiy
              texnologiya yordamida ishlaydi. Bu deyarli har kimga 3
              daqiqalik video suratga olib, 3D dunyosiga sayohatni boshlash
              imkonini beradi.
            </p>
            <a href="/register" className={styles.powerCta}>
              Bepul sinash &rarr;
            </a>
          </div>
        </div>
      </div>

      <div className={styles.logoSection}>
        <span className={styles.logoEyebrow}>Ishonch bildirgan mijozlar</span>
        <div className={styles.marqueeWrap}>
          <div className={styles.marquee}>
            {logoTrack.map((name, i) => (
              <span className={styles.logo} key={`${name}-${i}`}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollCue}>
        <span>Pastga aylantiring</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
