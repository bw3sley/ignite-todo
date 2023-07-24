import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { PlusCircle } from "phosphor-react";

import { Info } from "./Info";
import { Empty } from "./Empty";
import { Task } from "./Task";

import styles from "./List.module.css";

export interface TaskProps {
    id: string,
    title: string,
    isCompleted: boolean
}

export function List() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [newTaskText, setNewTaskText] = useState("");

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        const newTask: TaskProps = {
            id: self.crypto.randomUUID(),
            title: newTaskText,
            isCompleted: false
        }

        setTasks((state) => [...state, newTask]);

        setNewTaskText("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");

        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório");
    }
  
    function deleteTask(taskId: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskId;
        })

        setTasks(tasksWithoutDeletedOne);
    }

    function updateTaskStatus(taskId: string) {
        const tasksWithUpdatedOne = tasks.map(task => {
            if (taskId === task.id) {
                task.isCompleted = !task.isCompleted;
            }

            return task;
        })

        setTasks(tasksWithUpdatedOne);
    }
  
    const isTasksEmpty = tasks.length === 0;
    const isNewTaskEmpty = newTaskText.length === 0;

    const amountOfCompletedTasks = tasks.filter(task => task.isCompleted === true).length;

    return (
        <div>
            <form className={styles.taskForm} onSubmit={handleCreateNewComment}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                
                <button type="submit" disabled={isNewTaskEmpty}>
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>

            <Info amountOfCreatedTasks={tasks.length} amountOfCompletedTasks={amountOfCompletedTasks} />

            {isTasksEmpty && <Empty />}
            
            <section>
                {tasks.map(task => {
                    return ( 
                        <Task 
                            key={task.id}

                            task={task}

                            onDeleteTask={deleteTask}
                            onUpdateTask={updateTaskStatus}
                        />
                    )
                })}
            </section>
        </div>
    )
}