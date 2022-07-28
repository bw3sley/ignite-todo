import { Header } from "./components/Header";
import { Form } from "./components/Form";

import "./global.css";

import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />
    
      <main className={styles.wrapper}>
        <Form />
      </main>
    </>
  )
}