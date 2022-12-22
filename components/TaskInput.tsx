import React, { ChangeEvent, InputHTMLAttributes, KeyboardEventHandler } from 'react';

import styles from './TaskInput.module.css';
import { PlusCircle } from "react-feather";

type TaskItem = {
    id: string;
    description: string
    isDone: boolean
}

interface TaskInputProps {
    content: string;
    onTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onAddNewTask: () => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({
    content,
    onAddNewTask,
    onTaskChange,
}) => {

    const onKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            onAddNewTask();
        }
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                name="add-task"
                value={content}
                id="add-task"
                placeholder='Add a new task'
                onChange={onTaskChange}
                maxLength={150}
                onKeyDown={onKeyDown}
            />
            <button onClick={onAddNewTask} >
                Add
                <PlusCircle height={16} />
            </button>
        </div>
    )
}
