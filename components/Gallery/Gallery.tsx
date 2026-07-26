import styles from "./Gallery.module.scss";

const ITEMS = [
  {
    label: "Krossovka — Live 3D",
    tag: "3D",
    size: "tall",
    image: "/images/solution-footwear.jpg",
  },
  {
    label: "Divan — AR ko'rinish",
    tag: "AR",
    size: "wide",
    image: "/images/benefits-sofa.jpg",
  },
  {
    label: "Kreslo — suratga olish",
    tag: "3D",
    size: "normal",
    image: "/images/how-it-works-chair.jpg",
  },
  {
    label: "Kurtka — 360°",
    tag: "3D",
    size: "normal",
    image: "/images/solution-apparel.jpg",
  },
  {
    label: "Sumka — AI tasvir",
    tag: "AI",
    size: "wide",
    image: "/images/feature-handbag.jpg",
  },
  {
    label: "Stul — Live 3D",
    tag: "3D",
    size: "tall",
    image: "/images/solution-furniture.jpg",
  },
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
                <img src={item.image} alt="" />
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
