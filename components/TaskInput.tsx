import React, { ChangeEvent, InputHTMLAttributes } from 'react';

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
    return (
        <div className={styles.container}>
            <input
                type="text"
                name="add-task"
                id="add-task"
                placeholder='Add a new task'
                onChange={onTaskChange}
                maxLength={150}
            />
            <button onClick={onAddNewTask} >
                Add
                <PlusCircle height={16} />
            </button>
        </div>
    )
}
