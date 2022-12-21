import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <header>HEADER</header>
      <main>
        <div>
          <input type="text" name="add-task" id="add-task" placeholder='Add a new task' />
          <button></button>
        </div>

        <section>
          <div>
            <p>Created Tasks</p><span>0</span>
          </div>
          <div>
            <p>Done</p><span>0</span>
          </div>
          <hr />

          <p>ICON</p>
          <p>You still have no tasks registered</p>
          <p>Create tasks and organize your life</p>

        </section>
      </main>
    </>
  )
}
