import styles from './TaskArea.module.css';
import clipBoardImg from '../public/Clipboard.svg'
import Image from 'next/image';

export const TaskArea: React.FC = () => {
    return (
        <section className={styles.container}>

            <div className={styles.tasksContainer}>
                <div className={styles.createdTasksContainer}>
                    <p>Created Tasks</p>
                    <span className={styles.tasksCounter}>0</span>
                </div>
                <div className={styles.doneTasksContainer}>
                    <p>Done</p>
                    <span className={styles.tasksCounter}>0</span>
                </div>
            </div>

            <hr />

            <Image
                alt='Clipboard Image'
                src={clipBoardImg}
                height={56}
                width={56}
            />

            <p>You still have no tasks registered</p>
            <p>Create tasks and organize your life</p>

        </section>
    )
}
