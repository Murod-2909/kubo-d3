"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

const PRODUCT_MENU = [
  {
    title: "Xususiyatlar",
    caption: "Interaktiv 3D · AR · AI",
    href: "#product",
  },
  {
    title: "Qanday ishlaydi",
    caption: "Capture → Create → Convert",
    href: "#product",
  },
  {
    title: "Foydalari",
    caption: "Ko'proq xaridorni jalb qiling",
    href: "#product",
  },
];

const SOLUTION_MENU = [
  {
    title: "Poyabzal",
    caption: "Har bir tikuvni 3D'da ko'ring",
    href: "#solutions",
  },
  {
    title: "Kiyim-kechak",
    caption: "Matoni 3D'da his qiling",
    href: "#solutions",
  },
  {
    title: "Mebel",
    caption: "AR orqali xonangizda ko'ring",
    href: "#solutions",
  },
];

const NAV_LINKS = [
  { label: "Galereya", href: "#gallery" },
  { label: "Narxlar", href: "#pricing" },
];

function LogoMark() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
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
            <span className={styles.logoMark}>
              <LogoMark />
            </span>
            kubo<span className={styles.logoAccent}>.3d</span>
          </a>

          <nav className={styles.nav} aria-label="Asosiy navigatsiya">
            <div className={styles.navItem}>
              <button className={styles.navTrigger} type="button">
                Mahsulot
              </button>
              <div className={styles.megaMenu}>
                <div className={styles.megaCols}>
                  {PRODUCT_MENU.map((item) => (
                    <a href={item.href} className={styles.megaCard} key={item.title}>
                      <span className={styles.megaCardVisual} aria-hidden="true">
                        <span className={styles.megaCardVisualInner} />
                      </span>
                      <span className={styles.megaCardTitle}>{item.title}</span>
                      <span className={styles.megaCardCaption}>{item.caption}</span>
                      <span className={styles.megaCardLink}>Batafsil &rarr;</span>
                    </a>
                  ))}
                </div>
                <div className={styles.megaSide}>
                  <h4>Kompaniya</h4>
                  <a href="#top">Biz haqimizda</a>
                  <a href="#top">Yangiliklar</a>
                  <span className={styles.megaSideDivider} />
                  <a href="#demo" className={styles.megaSideCta}>
                    Demo band qilish &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.navItem}>
              <button className={styles.navTrigger} type="button">
                Yechimlar
              </button>
              <div className={styles.megaMenu}>
                <div className={styles.megaCols}>
                  {SOLUTION_MENU.map((item) => (
                    <a href={item.href} className={styles.megaCard} key={item.title}>
                      <span className={styles.megaCardVisual} aria-hidden="true">
                        <span className={styles.megaCardVisualInner} />
                      </span>
                      <span className={styles.megaCardTitle}>{item.title}</span>
                      <span className={styles.megaCardCaption}>{item.caption}</span>
                      <span className={styles.megaCardLink}>Batafsil &rarr;</span>
                    </a>
                  ))}
                </div>
                <div className={styles.megaSide}>
                  <h4>Biznes hajmi</h4>
                  <a href="#top">Kichik biznes</a>
                  <a href="#top">Korporativ</a>
                  <span className={styles.megaSideDivider} />
                  <a href="#gallery" className={styles.megaSideCta}>
                    Galereyani ko&rsquo;rish &rarr;
                  </a>
                </div>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href="#login" className={styles.loginBtn}>
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
            <a href="#product" onClick={() => setMenuOpen(false)}>
              Mahsulot
            </a>
            <a href="#solutions" onClick={() => setMenuOpen(false)}>
              Yechimlar
            </a>
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
