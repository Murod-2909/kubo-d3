"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Mahsulot", href: "#product" },
  { label: "Yechimlar", href: "#solutions" },
  { label: "Galereya", href: "#gallery" },
  { label: "Narxlar", href: "#pricing" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [barVisible, setBarVisible] = useState(true);

  return (
    <>
      {barVisible && (
        <div className={styles.announceBar}>
          <span>
            UG3D&reg; &mdash; video&rsquo;dan ultra-realistik 3D modelgacha,
            ~2 soatda
          </span>
          <a href="#product" className={styles.announceLink}>
            Bepul sinab ko&rsquo;ring &rarr;
          </a>
          <button
            aria-label="Yopish"
            className={styles.announceClose}
            onClick={() => setBarVisible(false)}
          >
            &times;
          </button>
        </div>
      )}

      <header className={styles.header}>
        <div className={styles.inner}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoMark} aria-hidden="true" />
            kubo<span className={styles.logoAccent}>3d</span>
          </a>

          <nav className={styles.nav} aria-label="Asosiy navigatsiya">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href="#login" className={styles.loginLink}>
              Kirish
            </a>
            <a href="#demo" className={styles.ghostBtn}>
              Demo so&rsquo;rash
            </a>
            <a href="#trial" className={styles.primaryBtn}>
              Bepul sinash &rarr;
            </a>
          </div>

          <button
            className={styles.burger}
            aria-label="Menyu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#trial" className={styles.primaryBtn}>
              Bepul sinash &rarr;
            </a>
          </div>
        )}
      </header>
    </>
  );
}
