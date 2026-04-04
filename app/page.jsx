import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Image
          src="/hero.webp"
          alt="Hero"
          fill
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </div>
      <main className={`${styles.main} contentWidth`}>
        <p> this is main</p>
      </main>
    </div>
  );
}
