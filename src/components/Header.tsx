import styles from "./Header.module.css";

import ToDoLogoSvg from "../assets/todo-logo.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img 
                src={ToDoLogoSvg} 
                alt="Logo To-Do" 
            />
        </header>
    )
}