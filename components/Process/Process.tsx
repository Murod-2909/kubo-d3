import styles from "./Process.module.scss";

const STEPS = [
  {
    index: "01",
    title: "Capture",
    heading: "Mahsulotingizni suratga oling.",
    description:
      "Har qanday mobil telefon yoki DSLR kamerada ~3 daqiqalik video suratga oling va yuklang. Shu qadar oddiy.",
    facts: ["3 daq. video kiritish", "Har qanday qurilma", "0 mutaxassis"],
    image: "/images/how-it-works-chair.jpg",
  },
  {
    index: "02",
    title: "Create",
    heading: "Bitta platformada yarating.",
    description:
      "Videongiz ~2 soat ichida raqamli egizakka aylanadi. Shu bitta asetdan mahsulot suratlari, 3D model, AR va video yarating.",
    facts: ["3D · Live 360°", "AR ko'rinish", "AI tasvirlar"],
    image: "/images/feature-handbag.jpg",
  },
  {
    index: "03",
    title: "Convert",
    heading: "Ko'proq mijozga aylantiring.",
    description:
      "Jonli 3D'ni mahsulot sahifalariga joylashtiring. Xaridorlarga ishonch va o'z makonida vizuallashtirish imkonini bering.",
    facts: ["Har qanday platforma", "AR bilan sinab ko'rish", "+24% konversiya"],
    image: "/images/benefits-sofa.jpg",
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="product">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Qanday ishlaydi</span>
          <h2 className={styles.title}>
            Video&rsquo;dan jonli 3D&rsquo;gacha, uchta bosqichda.
          </h2>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step) => (
            <article className={styles.step} key={step.index}>
              <div className={styles.stepVisual}>
                <img src={step.image} alt="" />
              </div>
              <div className={styles.stepIndex}>{step.index}</div>
              <span className={styles.stepEyebrow}>{step.title}</span>
              <h3 className={styles.stepHeading}>{step.heading}</h3>
              <p className={styles.stepDescription}>{step.description}</p>

              <ul className={styles.factList}>
                {step.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
