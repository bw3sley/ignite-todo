import { Header } from "./components/Header";
import { List } from "./components/List";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <List />
      </main>
    </div>
  )
}