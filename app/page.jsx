import styles from "./page.module.css";
import { Banner } from "./Components/Banner/Banner";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner src="/bgshrine.webp" alt="banner"/>
      <main className={`${styles.main} contentWidth`}>
        <p> this is main</p>
      </main>
    </div>
  );
}
