import styles from "./Solutions.module.scss";

const SOLUTIONS = [
  {
    title: "Poyabzal",
    description:
      "Har bir tikuv, taglik va materialni harakatlanuvchi 3D ko'rinishda ko'rsating.",
    image: "/images/solution-footwear.jpg",
  },
  {
    title: "Mebel",
    description:
      "Xaridorlar mebelni AR orqali o'z xonasida joylashtirib ko'rishi mumkin.",
    image: "/images/solution-furniture.jpg",
  },
  {
    title: "Kiyim-kechak",
    description:
      "Mato, tekstura va o'lchamlarni 360° aylanadigan modelda namoyish eting.",
    image: "/images/solution-apparel.jpg",
  },
  {
    title: "Zargarlik buyumlari",
    description:
      "Mayda detallar va yaltiroq sirtlarni yuqori aniqlikdagi 3D'da ko'rsating.",
  },
  {
    title: "Elektronika",
    description:
      "Portlar, tugmalar va qismlarni interaktiv hotspot'lar bilan tushuntiring.",
  },
  {
    title: "Uy-ro'zg'or buyumlari",
    description:
      "Mahsulot o'lchami va shaklini xaridor uchun aniq va ishonarli qiling.",
  },
];

export default function Solutions() {
  return (
    <section className={styles.solutions} id="solutions">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Yechimlar</span>
          <h2 className={styles.title}>
            Har qanday soha uchun mos yechim.
          </h2>
          <p className={styles.subtitle}>
            Poyabzaldan zargarlik buyumlarigacha — Kubo3D har xil turdagi
            mahsulotlar uchun moslashuvchan 3D ishlab chiqarish quvurini
            taqdim etadi.
          </p>
        </div>

        <div className={styles.grid}>
          {SOLUTIONS.map((item) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.cardVisual} aria-hidden="true">
                {item.image ? (
                  <img src={item.image} alt="" />
                ) : (
                  <div className={styles.cardVisualInner} />
                )}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
