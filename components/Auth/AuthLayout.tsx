"use client";

import { useRef, type ReactNode } from "react";
import styles from "./AuthLayout.module.scss";

function LogoMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <polygon
        points="14,2 25,8 25,20 14,26 3,20 3,8"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <polyline points="3,8 14,14 25,8" stroke="currentColor" strokeWidth="1" />
      <line x1="14" y1="14" x2="14" y2="26" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
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

  return (
    <div className={styles.page}>
      <div className={styles.visualPanel}>
        <a href="/" className={styles.backLink}>
          &larr; Bosh sahifa
        </a>

        <h1 className={styles.headline}>
          Bitta tez suratga olish.
          <br />
          Cheksiz mahsulot kontenti.
          <br />
          Mijozni tez ishontiring.
        </h1>

        <div
          className={styles.visual}
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.glowOrb} aria-hidden="true" />
          <div className={styles.float}>
            <div className={styles.imageWrap} ref={wrapRef}>
              <img src="/images/hero-shoe.png" alt="Kubo3D — namunaviy 3D egizak" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formPanel}>
        <div className={styles.formInner}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoMark}>
              <LogoMark />
            </span>
            kubo<span className={styles.logoAccent}>.3d</span>
          </a>

          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>

          {children}

          <p className={styles.footer}>{footer}</p>

          <p className={styles.terms}>
            Davom etish orqali siz bizning{" "}
            <a href="#">Foydalanish shartlari</a> va{" "}
            <a href="#">Maxfiylik siyosati</a>ga rozilik bildirasiz.
          </p>
        </div>
      </div>
    </div>
  );
}
