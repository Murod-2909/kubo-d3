"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./FeaturesPage.module.scss";

const TABS = [
  {
    index: "01",
    tabLabel: "Interaktiv 3D",
    eyebrow: "01 · Interaktiv 3D",
    heading: "Xaridorlar aylantirib, kattalashtirib ko'radigan raqamli egizak.",
    description:
      "Kubo3D — UG3D® texnologiyasi asosida ishlaydigan, 3D'ni hamma uchun ochiq va kengaytiriladigan qiladigan yangi turdagi virtual studiya. Har qanday kamera egasi endi raqamli egizak yarata oladi. Suratga olish, yaratish yoki konvertatsiya qilish uchun mutaxassis kerak emas.",
    features: [
      "360° aylanish va kattalashtirish",
      "Yengil 4-17MB fayllar",
      "Hotspot va izohlar",
      "Bitta qatorli joylashtirish",
      "Har qanday qurilmada ishlaydi",
    ],
    stats: [
      { value: "$50/oy", label: "3D hamma uchun ochiq", sub: "" },
      {
        value: "$10-20",
        label: "O'rtacha SKU narxi",
        sub: "Kubo3D taxmini · tekshiring",
      },
    ],
    tag: "LIVE 3D",
    image: "/images/solution-footwear.jpg",
  },
  {
    index: "02",
    tabLabel: "Kengaytirilgan reallik",
    eyebrow: "02 · Kengaytirilgan reallik",
    heading: "Xarid qilishdan oldin uni xonada joylashtirib ko'ring.",
    description:
      "Xaridorlar mahsulotni to'g'ridan-to'g'ri brauzerdan, o'z makonida haqiqiy o'lchamda ko'rishlari mumkin.",
    features: [
      "Mahsulotni o'z makonida ko'rish",
      "O'lchamlarni ko'rsatish yoki yashirish",
      "Ilova yuklab olish shart emas",
      "Bir bosishda faollashadi",
    ],
    stats: [
      {
        value: "42%",
        label: "Qaytarishlar — mahsulot kutilganidek chiqmagani sababli",
        sub: "Manba: ICSC so'rovi, 2024",
      },
      { value: "0", label: "Ilova yuklab olish", sub: "Brauzerda ishlaydi" },
    ],
    tag: "LIVE AR",
    image: "/images/benefits-sofa.jpg",
  },
  {
    index: "03",
    tabLabel: "AI mahsulot tasvirlari",
    eyebrow: "03 · AI mahsulot tasvirlari",
    heading: "Bitta suratdan — cheksiz mahsulot va lifestyle tasvirlari.",
    description:
      "Bir xil raqamli egizakdan brendingizga mos lifestyle va studiya tasvirlarini yarating. Fonni almashtiring, yorug'likni o'zgartiring — soniyalarda, haftalar emas.",
    features: [
      "Surat uslubini tanlash",
      "Fonni almashtirish",
      "Yorug'lik variantlari",
      "Model turi va kayfiyatini boshqarish",
    ],
    stats: [
      {
        value: "1 = ∞",
        label: "Bitta surat, cheksiz tasvir",
        sub: "Bitta raqamli egizakdan",
      },
      {
        value: "Soatlar",
        label: "Haftalar emas",
        sub: "Kampaniyaga tayyor suratlar",
      },
    ],
    tag: "AI",
    image: "/images/feature-handbag.jpg",
  },
  {
    index: "04",
    tabLabel: "Izohli 3D va Hotspot'lar",
    eyebrow: "04 · Izohli 3D va Hotspot'lar",
    heading: "Xususiyatlarni interaktiv &lsquo;hotspot&rsquo;larga aylantiring.",
    description:
      "Material, o'lcham va xususiyatlarga interaktiv izohlarni belgilang. Namuna, texnik jadval va brend hikoyasini joylashtiring.",
    features: [
      "Xususiyat izohlari",
      "Texnik jadvallar",
      "Brend hikoyasi",
      "Istalgan vaqtda tahrirlash",
    ],
    stats: [
      { value: "+12%", label: "Sahifada o'tkazilgan vaqt", sub: "Kubo3D taxmini" },
      {
        value: "1 yo'l",
        label: "Ko'rishdan xariddgacha",
        sub: "Xaridor ishonchini tezda shakllantiradi",
      },
    ],
    tag: "HOTSPOTS",
    image: "/images/solution-furniture.jpg",
  },
];

const COMPARE_ROWS = [
  {
    label: "Fayl hajmi",
    values: ["4-17MB", "3D modelni ulashadi", "yo'q (rasm)", "4-17MB"],
  },
  {
    label: "Platformalar",
    values: ["Barcha yirik CMS", "iOS / Android", "Har qanday", "Barcha yirik CMS"],
  },
  {
    label: "Tayyor bo'lish vaqti",
    values: ["~2 soat", "Bir bosishda", "Soniyalarda", "Bir bosishda"],
  },
];

const INTEGRATIONS = ["Shopify", "Adobe Commerce", "WooCommerce", "BigCommerce"];

export default function FeaturesPage() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>
              UG3D&reg; texnologiyasi &middot; Kubo3D nima yaratadi
            </span>
            <h1 className={styles.title}>
              Bitta suratga olish.
              <br />
              To&rsquo;rtta natija.
            </h1>
            <p className={styles.subtitle}>
              Bitta 3 daqiqalik mahsulot videosidan Kubo3D onlayn sotish
              uchun kerak bo&rsquo;lgan hamma narsani yaratadi — interaktiv
              3D, AR, AI mahsulot tasvirlari va izohli tajribalar. Qayta
              suratga olish yo&rsquo;q. Mutaxassis kerak emas.
            </p>
          </div>

          <div className={styles.tabBar}>
            {TABS.map((t, i) => (
              <button
                key={t.index}
                className={`${styles.tabBtn} ${i === active ? styles.tabBtnActive : ""}`}
                onClick={() => setActive(i)}
                type="button"
              >
                <span className={styles.tabIndex}>{t.index}</span>
                {t.tabLabel}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.tabContent}>
          <div className={styles.tabInner}>
            <div className={styles.tabText}>
              <span className={styles.tabEyebrow}>{tab.eyebrow}</span>
              <h2
                className={styles.tabHeading}
                dangerouslySetInnerHTML={{ __html: tab.heading }}
              />
              <p className={styles.tabDescription}>{tab.description}</p>

              <ul className={styles.featureList}>
                {tab.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className={styles.statRow}>
                {tab.stats.map((s) => (
                  <div className={styles.stat} key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                    {s.sub && <em>{s.sub}</em>}
                  </div>
                ))}
              </div>

              <a href="/register" className={styles.tabCta}>
                Bepul sinash &rarr;
              </a>
            </div>

            <div className={styles.tabVisual}>
              <span className={styles.tabTag}>{tab.tag}</span>
              <img src={tab.image} alt="" />
              <span className={styles.tabHotspot} aria-hidden="true">
                +
              </span>
            </div>
          </div>
        </section>

        <section className={styles.compare}>
          <div className={styles.compareInner}>
            <span className={styles.eyebrow}>Solishtirish</span>
            <h2 className={styles.compareTitle}>
              To&rsquo;rtta natija, bitta jarayon.
            </h2>

            <div className={styles.compareTableWrap}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th></th>
                    {TABS.map((t) => (
                      <th key={t.index}>{t.tabLabel}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr key={row.label}>
                      <th>{row.label}</th>
                      {row.values.map((v, i) => (
                        <td key={i}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={styles.integrations}>
          <div className={styles.integrationsInner}>
            <div>
              <span className={styles.eyebrow}>Integratsiyalar</span>
              <h2 className={styles.integrationsTitle}>
                Bir qatorli joylashtirish.
                <br />
                Siz sotayotgan joyda ishlaydi.
              </h2>
            </div>
            <div className={styles.integrationsList}>
              {INTEGRATIONS.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2>Mahsulotlaringizni 3D&rsquo;da ko&rsquo;rishga tayyormisiz?</h2>
            <p>
              Capture &middot; Create &middot; Convert — qisqa mahsulot
              videosidan jonli 3D modelgacha, taxminan 2 soatda.
            </p>
            <div className={styles.ctaActions}>
              <a href="/register" className={styles.ctaPrimary}>
                Bepul sinash &rarr;
              </a>
              <a href="#demo" className={styles.ctaGhost}>
                Demo band qilish
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
