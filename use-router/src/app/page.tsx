import Image from "next/image";
import styles from "./page.module.css";
import LearnUseRouter from "@/component/LearnUseRouter";

export default function Home() {
  return (
    <main className={styles.main}>
      <LearnUseRouter/>
    </main>
  );
}
