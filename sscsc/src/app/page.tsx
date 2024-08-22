import Image from "next/image";
import styles from "./page.module.css";
import ServerComponent from "@/component/ServerComponent";
import ClientComponent from "@/component/ClientComponent";



export default function Home() {
  return (
    <main className={styles.main}>
      <ServerComponent />
      <ClientComponent />

    </main>
  );
}
