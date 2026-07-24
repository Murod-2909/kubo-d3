import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>UG3D&reg; texnologiyasi</span>

          <h1 className={styles.title}>
            Mahsulotingizga <span className={styles.accentText}>ishonch</span>{" "}
            yarating.
          </h1>

          <p className={styles.subtitle}>
            ~3 daqiqalik video&rsquo;dan raqamli egizak yarating. 3D, AR va
            AI kontentni bitta platformada boshqaring. Xaridorlarni tezroq
            mijozga aylantiring.
          </p>

          <div className={styles.actions}>
            <a href="#trial" className={styles.primaryBtn}>
              Bepul boshlash &rarr;
            </a>
            <a href="#demo" className={styles.ghostBtn}>
              Demo ko&rsquo;rish
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>3 daqiqa</strong>
              <span>Video kiritish</span>
            </div>
            <div className={styles.stat}>
              <strong>~2 soat</strong>
              <span>Tayyor 3D model</span>
            </div>
            <div className={styles.stat}>
              <strong>+24%</strong>
              <span>Konversiya o&rsquo;sishi</span>
            </div>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.scene}>
            <div className={styles.cube}>
              <div className={`${styles.face} ${styles.front}`} />
              <div className={`${styles.face} ${styles.back}`} />
              <div className={`${styles.face} ${styles.right}`} />
              <div className={`${styles.face} ${styles.left}`} />
              <div className={`${styles.face} ${styles.top}`} />
              <div className={`${styles.face} ${styles.bottom}`} />
            </div>
            <div className={styles.ring} />
            <div className={styles.dot1} />
            <div className={styles.dot2} />
            <div className={styles.dot3} />
          </div>
        </div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span>Pastga aylantiring</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
