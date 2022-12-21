import React from 'react';
import { EmptyTaskBox } from './EmptyTaskBox';
import { TaskItem } from './TaskItem';

import styles from './TaskList.module.css';

export const TaskList: React.FC = () => {
    return (
        <div className={styles.tasksListContainer}>
            <ul>
                <TaskItem
                    description='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
                    isDone={false}
                />
                <TaskItem
                    description='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
                    isDone={false}
                />
                <TaskItem
                    description='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
                    isDone={true}
                />
                <TaskItem
                    description='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
                    isDone={true}
                />
            </ul>
            {/* <EmptyTaskBox /> */}
        </div>
    );
}