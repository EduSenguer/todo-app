import todologo from '../../assets/todologo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './header.module.css';
import { useState } from 'react';

export function Header({ onAddTask }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={todologo} />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder='agregar una nueva tarea' type='text' value={title} onChange={onChangeTitle} />
                <button>
                    Crear
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}