import { Trash2 } from 'react-feather';
import styles from './TaskItem.module.css';

interface TaskItemProps {
    isDone: boolean;
    description: string;
}

export const TaskItem: React.FC<TaskItemProps> = ({
    description,
    isDone
}) => {
    const checkMarkStyle = isDone ? styles.done : styles.todo;

    return (
        <li
            key={description}
            className={styles.listItem}>
            <label className={styles.checkboxContainer}>
                <input type="checkbox" name="task" id="" />
                <span className={styles.checkmark}></span>
            </label>
            <p className={styles.taskDescription}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash2 width={24} height={24} />
        </li>
    )
}
