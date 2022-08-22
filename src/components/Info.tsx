import styles from "./Info.module.css";

interface IInfo {
    taskLength: number
}

export function Info({ taskLength }: IInfo) {
    return (
        <section className={styles.info}>
            <div className={styles.created}>
                <strong>Tarefas criadas</strong>
                <span>{taskLength}</span>
            </div>

            <div className={styles.done}>
                <strong>Concluídas</strong>
                <span>{0} de {taskLength}</span>
            </div>
        </section>
    )
}