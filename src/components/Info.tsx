import styles from "./Info.module.css";

interface InfoProps {
    amountOfCreatedTasks: number,
    amountOfCompletedTasks: number
}

export function Info({ amountOfCreatedTasks, amountOfCompletedTasks }: InfoProps) {
    return (
        <section className={styles.info}>
            <div>
                <span className={styles.tasksCreated}>Tarefas criadas</span>
                <span className={styles.tasksCount}>{amountOfCreatedTasks}</span>
            </div>

            <div>
                <span className={styles.tasksCompleted}>Concluídas</span>
                
                { amountOfCompletedTasks > 0 ? (
                    <span className={styles.tasksCount}>{amountOfCompletedTasks} de {amountOfCreatedTasks}</span>
                ) : (
                    <span className={styles.tasksCount}>0</span>
                ) }
            </div>
        </section>
    )
}