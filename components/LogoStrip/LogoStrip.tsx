import styles from "./LogoStrip.module.scss";

const LOGOS = [
  "Spektrum Brendlar",
  "Anglers Only",
  "Recondition",
  "BEPO",
  "Cosatto",
  "SportsShoes",
];

export default function LogoStrip() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className={styles.strip} aria-label="Ishonch bildirgan mijozlar">
      <div className={styles.label}>Ishonch bildirgan mijozlar</div>

      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {track.map((name, i) => (
            <span className={styles.logo} key={`${name}-${i}`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
