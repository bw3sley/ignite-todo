import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

import { TaskProps } from "./List";

interface TaskTypes {
    task: TaskProps,
    onDeleteTask: (taskId: string) => void,
    onUpdateTask: (taskId: string) => void
}

export function Task({ task, onDeleteTask, onUpdateTask }: TaskTypes) {
    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    function handleUpdateTask() {
        onUpdateTask(task.id);
    }

    const isTaskCompleted = task.isCompleted;
    
    return (
        <div className={styles.task}>
            <input id="task" type="checkbox" checked={isTaskCompleted} onChange={handleUpdateTask} />

            <label htmlFor="task">{task.title}</label>
            
            <Trash size={24} onClick={handleDeleteTask} />
        </div>
    )
}