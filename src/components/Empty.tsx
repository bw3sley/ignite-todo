import styles from "./Empty.module.css";

import emptyIcon from "../assets/empty-icon.svg";

export function Empty() {
    return (
        <section className={styles.empty}>
            <img src={emptyIcon} alt="" />

            <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </section>
    )
}