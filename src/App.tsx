import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Info } from "./components/Info";
import { EmptyContent } from "./components/EmptyContent";
import { Task } from "./components/Task";

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