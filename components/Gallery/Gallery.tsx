import styles from "./Gallery.module.scss";

const ITEMS = [
  { label: "Sneaker — Live 3D", tag: "3D", size: "tall" },
  { label: "Divan — AR ko'rinish", tag: "AR", size: "wide" },
  { label: "Soat — Hotspot'lar", tag: "3D", size: "normal" },
  { label: "Kurtka — 360°", tag: "3D", size: "normal" },
  { label: "Stol — AI lifestyle", tag: "AI", size: "wide" },
  { label: "Sumka — Live 3D", tag: "3D", size: "tall" },
];

export default function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Galereya</span>
          <h2 className={styles.title}>Real mahsulotlar, real natijalar.</h2>
          <p className={styles.subtitle}>
            Kubo3D orqali yaratilgan interaktiv 3D va AR namunalar bilan
            tanishing.
          </p>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item, i) => (
            <article
              className={`${styles.tile} ${styles[item.size]}`}
              key={i}
            >
              <div className={styles.tileSurface}>
                <span className={styles.tag}>{item.tag}</span>
                <div className={styles.tileOverlay}>
                  <span>{item.label}</span>
                  <span className={styles.viewLink}>3D&rsquo;da ko&rsquo;rish &rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
