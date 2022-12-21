import { type } from 'os';
import React from 'react';
import { EmptyTaskBox } from './EmptyTaskBox';
import { TaskItem } from './TaskItem';

import styles from './TaskList.module.css';

export type TaskItem = {
    id: string;
    description: string
    isDone: boolean
}

interface TaskListProps {
    tasks: TaskItem[];
    onToggleTaskStatus: (task: TaskItem) => void;
    onDeleteTask: (taskId: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onToggleTaskStatus,
    onDeleteTask,
}) => {

    const isEmpty = tasks.length === 0;

    let tasksToRender = tasks.map((task) => {
        const {
            description,
            id,
            isDone
        } = task;
        return (
            <TaskItem
                key={id}
                task={task}
                onToggleTaskStatus={onToggleTaskStatus}
                onDeleteTask={onDeleteTask}
            />
        )
    })

    return (
        <div className={styles.tasksListContainer}>
            {
                isEmpty ?
                    <EmptyTaskBox /> :
                    <ul>
                        {
                            tasksToRender
                        }
                    </ul>
            }
        </div>
    );
}