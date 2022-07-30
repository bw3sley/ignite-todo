import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Info } from "./components/Info";
import { EmptyContent } from "./components/EmptyContent";
import { Task } from "./components/Task";

import "./global.css";

import styles from './App.module.css';

const tasks = [
  {
    id: "1",
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  }
]

export function App() {
  return (
    <>
      <Header />
    
      <main className={styles.wrapper}>
        <Form />

        <Info />

        { tasks.length == 0 ? <EmptyContent /> : <Task /> }
      </main>
    </>
  )
}