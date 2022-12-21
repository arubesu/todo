import { ChangeEvent, useState } from 'react';
import { Trash2 } from 'react-feather';
import styles from './TaskItem.module.css';
import { TaskItem as TaskItemType } from './TaskList';

interface TaskItemProps {
    task: TaskItemType;
    onToggleTaskStatus: (task: TaskItemType) => void;
    onDeleteTask: (taskID: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onToggleTaskStatus,
    onDeleteTask,
}) => {
    const handleChange = () => {
        onToggleTaskStatus(task)
    };

    const {
        description,
        id
    } = task;

    const taskDescriptionStyle = task.isDone ? styles.done : styles.todo;

    return (
        <li
            key={description}
            className={styles.listItem}>
            <div className={styles.taskDescriptionContainer}>
                <label className={styles.checkboxContainer}>
                    <input
                        value={task.id}
                        checked={task.isDone}
                        onChange={handleChange}
                        type="checkbox"
                        name="task"
                        id=""
                    />
                    <span className={styles.checkmark}></span>
                </label>
                <p className={[styles.taskDescription, taskDescriptionStyle].join(' ')}>
                    {
                        description
                    }
                </p>
            </div>
            <Trash2 width={24} height={24} onClick={() => onDeleteTask(id)} />
        </li>
    )
}
