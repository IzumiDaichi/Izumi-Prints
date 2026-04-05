import Image from "next/image";
import styles from "./Banner.module.css";

function Banner({ src, alt }) {
  return (
    <div className={styles.hero}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export { Banner };