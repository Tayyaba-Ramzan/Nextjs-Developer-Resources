import Image from "next/image";
import styles from "./page.module.css";
import Images from "@/component/Images"; // Correctly imported as 'Images'

export default function Home() {
  return (
    <main className={styles.main}>
      <Images/> 
    </main>
  );
}
