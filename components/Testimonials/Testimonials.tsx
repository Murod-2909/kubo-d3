import styles from "./Testimonials.module.scss";

const STATS = [
  { value: "+24%", label: "3D bilan konversiya o'sishi", source: "Forrester, 2024" },
  { value: "76%", label: "Iste'molchilar 3D'ni kutmoqda", source: "Adobe, 2023" },
  { value: "2 soat", label: "Video'dan jonli 3D modelgacha", source: "Kubo3D · UG3D®" },
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

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <div className={styles.statsRow}>
          {STATS.map((s) => (
            <div className={styles.statCard} key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
              <em>{s.source}</em>
            </div>
          ))}
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
