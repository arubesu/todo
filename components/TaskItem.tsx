import { Trash2 } from 'react-feather';
import styles from './TaskItem.module.css';
import { TaskItem as TaskItemType } from './TaskList';

interface TaskItemProps {
    task: TaskItemType;
    onCompleteTask: (task: TaskItemType) => void;
    onDeleteTask: (taskID: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onCompleteTask,
    onDeleteTask,
}) => {
    const {
        description,
        id
    } = task;

    return (
        <li
            key={description}
            className={styles.listItem}>
            <div className={styles.taskDescriptionContainer}>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox" name="task" id="" />
                    <span className={styles.checkmark}></span>
                </label>
                <p className={styles.taskDescription}>
                    {
                        description
                    }
                </p>
            </div>
            <Trash2 width={24} height={24} onClick={() => onDeleteTask(id)} />
        </li>
    )
}
