"use client";

import styles from "./Footer.module.scss";

const COLUMNS = [
  {
    title: "Mahsulot",
    links: ["Xususiyatlar", "Galereya", "Narxlar", "Integratsiyalar"],
  },
  {
    title: "Kompaniya",
    links: ["Biz haqimizda", "Karyera", "Blog", "Aloqa"],
  },
  {
    title: "Resurslar",
    links: ["Hujjatlar", "Yordam markazi", "Holat", "Maxfiylik siyosati"],
  },
];

const SOCIALS = ["X", "In", "Ig", "Yt"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a href="#top" className={styles.logo}>
              <span className={styles.logoMark} aria-hidden="true" />
              kubo<span className={styles.logoAccent}>3d</span>
            </a>
            <p className={styles.tagline}>
              Ecommerce uchun 3D &amp; AI studiya. Video&rsquo;dan
              ultra-realistik 3D modelgacha, soatlar ichida.
            </p>

            <form className={styles.newsletter} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email manzilingiz"
                aria-label="Email manzilingiz"
                required
              />
              <button type="submit">Obuna bo&rsquo;lish</button>
            </form>
          </div>

          <div className={styles.linkCols}>
            {COLUMNS.map((col) => (
              <div className={styles.linkCol} key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; {new Date().getFullYear()} Kubo3D. Barcha huquqlar himoyalangan.</span>

          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a href="#" key={s} className={styles.socialLink} aria-label={s}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
