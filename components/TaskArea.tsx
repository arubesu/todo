import styles from './TaskArea.module.css';
import { TaskList } from './TaskList';

export const TaskArea: React.FC = () => {
    return (
        <section className={styles.container}>

            <div className={styles.tasksStatusContainer}>
                <div className={styles.createdTasksContainer}>
                    <p>Created Tasks</p>
                    <span className={styles.tasksCounter}>5</span>
                </div>
                <div className={styles.doneTasksContainer}>
                    <p>Done</p>
                    <span className={styles.tasksCounter}>2 of 5</span>
                </div>
            </div>
            <hr />
            <TaskList />
        </section>
    )
}
