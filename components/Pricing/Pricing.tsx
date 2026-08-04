import styles from "./Pricing.module.scss";

const PLANS = [
  {
    name: "Bepul",
    price: "$0",
    period: "/oy",
    description: "O'zingiz sinab ko'rish uchun.",
    features: [
      "10 000 kredit · sinov",
      "10 tagacha 3D egizak",
      "3D hotspot'lar",
      "AR joylashtirish (beta)",
    ],
    cta: "Bepul boshlash",
    highlighted: false,
  },
  {
    name: "Boshlang'ich",
    price: "$49",
    period: "/oy",
    description: "Kichik onlayn do'konlar uchun.",
    features: [
      "5 000 kredit / oy",
      "5 tagacha 3D egizak / oy",
      "3D hotspot'lar",
      "Shopify integratsiyasi",
    ],
    cta: "Boshlash",
    highlighted: false,
  },
  {
    name: "Biznes",
    price: "$199",
    period: "/oy",
    description: "O'sib borayotgan brendlar uchun.",
    features: [
      "35 000 kredit / oy",
      "35 tagacha HD 3D egizak / oy",
      "Ustuvor qo'llab-quvvatlash",
      "Barcha platformalar bilan integratsiya",
    ],
    cta: "Boshlash",
    highlighted: true,
  },
  {
    name: "Korporativ",
    price: "Kelishilgan",
    period: "",
    description: "Katta katalogli bizneslar uchun.",
    features: [
      "Cheklanmagan kredit",
      "Shaxsiy o'qitish",
      "API kirish huquqi",
      "Maxsus integratsiyalar",
    ],
    cta: "Demo band qilish",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Narxlar</span>
          <h2 className={styles.title}>Har qanday byudjetga mos tarif.</h2>
          <p className={styles.subtitle}>
            Jamoangizga mos rejani tanlang. Istalgan vaqtda yangilash yoki
            pasaytirish mumkin.
          </p>
        </div>

        <div className={styles.grid}>
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.card} ${plan.highlighted ? styles.cardHighlighted : ""}`}
            >
              {plan.highlighted && (
                <span className={styles.badge}>Eng mashhur</span>
              )}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>

              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                {plan.period && (
                  <span className={styles.period}>{plan.period}</span>
                )}
              </div>

              <a href="/register" className={styles.planCta}>
                {plan.cta} &rarr;
              </a>

              <ul className={styles.featureList}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
