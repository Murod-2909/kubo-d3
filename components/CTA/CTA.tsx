import styles from "./CTA.module.scss";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>Boshlashga tayyormisiz</span>
        <h2 className={styles.title}>
          Mahsulotingizni <span className={styles.accentText}>3D&rsquo;da</span>{" "}
          ko&rsquo;ring.
        </h2>
        <p className={styles.subtitle}>
          Capture, Create &amp; Convert — qisqa mahsulot videosidan jonli 3D
          modelgacha, taxminan 2 soatda. Studiya kerak emas. Mutaxassis kerak
          emas. Murakkab jarayon kerak emas.
        </p>

        <div className={styles.actions}>
          <a href="#trial" className={styles.primaryBtn}>
            Bepul sinash &rarr;
          </a>
          <a href="#demo" className={styles.ghostBtn}>
            Demo band qilish
          </a>
        </div>
      </div>
    </section>
  );
}
