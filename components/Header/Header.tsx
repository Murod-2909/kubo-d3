"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";

const PRODUCT_MENU = [
  {
    title: "Xususiyatlar",
    caption: "Interaktiv 3D · AR · AI",
    href: "/features",
    image: "/images/feature-handbag.jpg",
  },
  {
    title: "Qanday ishlaydi",
    caption: "Capture → Create → Convert",
    href: "#product",
    image: "/images/how-it-works-chair.jpg",
  },
  {
    title: "Foydalari",
    caption: "Ko'proq xaridorni jalb qiling",
    href: "#product",
    image: "/images/benefits-sofa.jpg",
  },
];

const SOLUTION_MENU = [
  {
    title: "Poyabzal",
    caption: "Har bir tikuvni 3D'da ko'ring",
    href: "#solutions",
    image: "/images/solution-footwear.jpg",
  },
  {
    title: "Kiyim-kechak",
    caption: "Matoni 3D'da his qiling",
    href: "#solutions",
    image: "/images/solution-apparel.jpg",
  },
  {
    title: "Mebel",
    caption: "AR orqali xonangizda ko'ring",
    href: "#solutions",
    image: "/images/solution-furniture.jpg",
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

type DropdownKey = "product" | "solution";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [barVisible, setBarVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openDropdown) return;

    function handlePointerDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenDropdown(null);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown]);

  function toggleDropdown(key: DropdownKey) {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }

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
          <a href="/" className={styles.logo}>
            <span className={styles.logoMark}>
              <LogoMark />
            </span>
            kubo<span className={styles.logoAccent}>.3d</span>
          </a>

          <nav className={styles.nav} aria-label="Asosiy navigatsiya" ref={navRef}>
            <div className={styles.navItem}>
              <button
                className={styles.navTrigger}
                type="button"
                aria-expanded={openDropdown === "product"}
                onClick={() => toggleDropdown("product")}
              >
                Mahsulot
              </button>
              <div
                className={`${styles.megaMenu} ${
                  openDropdown === "product" ? styles.megaMenuOpen : ""
                }`}
              >
                <div className={styles.megaCols}>
                  {PRODUCT_MENU.map((item) => (
                    <a
                      href={item.href}
                      className={styles.megaCard}
                      key={item.title}
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className={styles.megaCardVisual}>
                        <img src={item.image} alt="" />
                      </span>
                      <span className={styles.megaCardTitle}>{item.title}</span>
                      <span className={styles.megaCardCaption}>{item.caption}</span>
                      <span className={styles.megaCardLink}>Batafsil &rarr;</span>
                    </a>
                  ))}
                </div>
                <div className={styles.megaSide}>
                  <h4>Kompaniya</h4>
                  <a href="#top" onClick={() => setOpenDropdown(null)}>
                    Biz haqimizda
                  </a>
                  <a href="#top" onClick={() => setOpenDropdown(null)}>
                    Yangiliklar
                  </a>
                  <span className={styles.megaSideDivider} />
                  <a
                    href="#demo"
                    className={styles.megaSideCta}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Demo band qilish &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.navItem}>
              <button
                className={styles.navTrigger}
                type="button"
                aria-expanded={openDropdown === "solution"}
                onClick={() => toggleDropdown("solution")}
              >
                Yechimlar
              </button>
              <div
                className={`${styles.megaMenu} ${
                  openDropdown === "solution" ? styles.megaMenuOpen : ""
                }`}
              >
                <div className={styles.megaCols}>
                  {SOLUTION_MENU.map((item) => (
                    <a
                      href={item.href}
                      className={styles.megaCard}
                      key={item.title}
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className={styles.megaCardVisual}>
                        <img src={item.image} alt="" />
                      </span>
                      <span className={styles.megaCardTitle}>{item.title}</span>
                      <span className={styles.megaCardCaption}>{item.caption}</span>
                      <span className={styles.megaCardLink}>Batafsil &rarr;</span>
                    </a>
                  ))}
                </div>
                <div className={styles.megaSide}>
                  <h4>Biznes hajmi</h4>
                  <a href="#top" onClick={() => setOpenDropdown(null)}>
                    Kichik biznes
                  </a>
                  <a href="#top" onClick={() => setOpenDropdown(null)}>
                    Korporativ
                  </a>
                  <span className={styles.megaSideDivider} />
                  <a
                    href="#gallery"
                    className={styles.megaSideCta}
                    onClick={() => setOpenDropdown(null)}
                  >
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
            <a href="/login" className={styles.loginBtn}>
              Kirish
            </a>
            <a href="#demo" className={styles.ghostBtn}>
              Demo so&rsquo;rash
            </a>
            <a href="/register" className={styles.primaryBtn}>
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
            <a href="/register" className={styles.primaryBtn}>
              Bepul sinash &rarr;
            </a>
          </div>
        )}
      </header>
    </>
  );
}
