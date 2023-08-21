import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
                  What is VScope?
        </h1>
        <p className={styles.desc}>
                  This is Health Services Management System for San Sebastian College Recolletos de Cavite.
                  Vitaliscope (VScope) is formed by merging the words "vital" and "scope," which implies the significance of well-being and the wide array of data encompassed by the system. The name emphasizes the project's objective of delivering an all-encompassing platform for accessing health services information. </p>
        <Button url="/services" text="See our services here"/> //services
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
