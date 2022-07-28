import { ChangeEvent, FormEvent, InvalidEvent } from "react";

import { PlusCircle } from "phosphor-react";

import styles from "./Form.module.css";

export function Form() {
    function handleCreateNewToDo(event: FormEvent) {
        event.preventDefault();
    }

    function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");
    }

    function handleNewToDoInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    // const isNewToDoEmpty = newToDoText.length === 0;

    return (
        <form onSubmit={handleCreateNewToDo} className={styles.form}>
            <input 
                type="text" 
                name="toDoText"
                // value={} 
                placeholder="Adicione uma nova tarefa"
                required
                
                onChange={handleNewToDoChange}
                onInvalid={handleNewToDoInvalid}
            />

            <button 
                type="submit"
                
                // disabled={isNewToDoEmpty}    
            >
                Criar

                <PlusCircle size={16}/>
            </button>
        </form>
    )
}