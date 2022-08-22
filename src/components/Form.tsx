import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Info } from "./Info";
import { Task } from "./Task";
import { EmptyContent } from "./EmptyContent";

import { PlusCircle } from "phosphor-react";

import styles from "./Form.module.css";

export function Form() {
    const [tasks, setTask] = useState<string[]>([]);
    const [newTaskText, setNewTaskText] = useState("");

    function handleCreateNewToDo(event: FormEvent) {
        event.preventDefault();

        setTask((task) => [...task, newTaskText]);
        setNewTaskText("");
    }

    function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");

        setNewTaskText(event?.target.value);
    }

    function handleNewToDoInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

    function deleteTask(taskToDelete: string) {
        const taskWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete;
        });

        setTask(taskWithoutDeletedOne);
    }

    const isNewToDoEmpty = newTaskText.length === 0;

    return (
        <>
            <form onSubmit={handleCreateNewToDo} className={styles.form}>
                <input 
                    type="text" 
                    name="toDoText"
                    value={newTaskText} 
                    placeholder="Adicione uma nova tarefa"
                    required
                    
                    onChange={handleNewToDoChange}
                    onInvalid={handleNewToDoInvalid}
                />

                <button 
                    type="submit"
                    
                    disabled={isNewToDoEmpty}    
                >
                    Criar

                    <PlusCircle size={16}/>
                </button>
            </form>

            <Info taskLength={tasks.length} />

            { tasks.length == 0 ? <EmptyContent /> 
                :
            tasks.map(task => { 
                return ( 
                    <Task 
                        key={task}
                        content={task}
                        onDeleteTask={deleteTask}
                    /> 
                )
            }) }
        </>
    )
}