import { ChangeEvent, useState } from 'react';
import styles from './TaskArea.module.css';
import { TaskInput } from './TaskInput';
import { TaskItem, TaskList } from './TaskList';


export const TaskArea: React.FC = () => {

    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState<TaskItem[]>([])

    const createdTasksCount = tasks.length;
    const doneTasksCount = tasks.filter(t => t.isDone).length;
    const isEmptyTask = tasks.length === 0;

    const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
        const task = event.target.value;
        setNewTask(task);
    }

    const createNewTask = (description: string) => (
        {
            id: crypto.randomUUID(),
            description,
            isDone: false,
        }
    )

    const handleAddNewTask = () => {
        setTasks([
            ...tasks,
            createNewTask(newTask)
        ]);
    }

    const handleCompleteTask = (task: TaskItem) => {
        const taskCompletedIndex = tasks.findIndex(t => t.id === task.id);

        let newTasks = [...tasks];

        newTasks[taskCompletedIndex] = {
            ...task,
            isDone: true,
        }

        setTasks(newTasks);
    }

    const handleDeleteTask = (taskId: string) => {
        const tasksWithoutDeletedOne = tasks.filter(t => t.id !== taskId);
        setTasks(tasksWithoutDeletedOne);
    }

    return (
        <>
            <TaskInput
                content={newTask}
                onTaskChange={handleNewTaskChange}
                onAddNewTask={handleAddNewTask}
            />
            <section className={styles.container}>

                <div className={styles.tasksStatusContainer}>
                    <div className={styles.createdTasksContainer}>
                        <p>Created Tasks</p>
                        <span className={styles.tasksCounter}>{createdTasksCount}</span>
                    </div>
                    <div className={styles.doneTasksContainer}>
                        <p>Done</p>
                        <span className={styles.tasksCounter}>
                            {
                                isEmptyTask ? "0" :
                                    <>
                                        {doneTasksCount} of {createdTasksCount}
                                    </>
                            }
                        </span>
                    </div>
                </div>
                <hr />
                <TaskList
                    tasks={tasks}
                    onCompleteTask={handleCompleteTask}
                    onDeleteTask={handleDeleteTask}
                />
            </section>
        </>
    )
}
