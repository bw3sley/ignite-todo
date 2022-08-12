import { useState } from "react";

import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface ITask {
    content: string;
    onDeleteTask: (comment: string) => void;
}

export function Task({ content, onDeleteTask }: ITask) {
    const [doneTask, setDoneTask] = useState(Boolean);
    
    function handleDeleteTask() {
        onDeleteTask(content);
    }

    function handleDoneTask() {
        doneTask != true ? setDoneTask(true) : setDoneTask(false);
    }

    return (
        <div className={styles.task}>
            <input 
                type="checkbox" 
                name="task-radio" 
                id="task-radio"

                onChange={handleDoneTask}

                checked={doneTask}
            />

            { doneTask === true ? 
                <label htmlFor="task-radio">
                    <del>{content}</del>
                </label>
                
                :

                <label htmlFor="task-radio">
                    {content}
                </label> 
            }



            <Trash 
                size={24} 
                className={styles.icon}

                onClick={handleDeleteTask}
            />
        </div>
    )
}