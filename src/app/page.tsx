import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mantine/core";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Megamind les coulers</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="filled" color="violet" size="md">
            <a href="/jeu">Jouir</a>
          </Button>
          <Button variant="filled" color="violet" size="md">
            <a href="#">Voir les scores</a>
          </Button>
        </div>
      </main>
    </div>
  );
}
