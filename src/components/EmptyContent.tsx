import styles from "./EmptyContent.module.css";

import OutlinedClipboardSvg from "../assets/outlined-clipboard.svg";  

export function EmptyContent() {
    return (
        <>
            <section className={styles.emptyContent}>
                <img 
                    src={OutlinedClipboardSvg} 
                    alt="" 
                />

                <strong>
                    Você ainda não tem tarefas cadastradas {"\n"}
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </strong>
            </section>
        </>
    )
}