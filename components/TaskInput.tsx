import React from 'react';

import styles from './TaskInput.module.css';
import { PlusCircle } from "react-feather";

export const TaskInput: React.FC = () => {
    return (
        <div className={styles.container}>
            <input
                type="text"
                name="add-task"
                id="add-task"
                placeholder='Add a new task'
            />
            <button >
                Add
                <PlusCircle height={16} />
            </button>
        </div>
    )
}
