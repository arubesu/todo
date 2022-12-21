import { Header } from '../components/Header'
import { TaskArea } from '../components/TaskArea'
import { TaskInput } from '../components/TaskInput'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TaskInput />
        <TaskArea />
      </main>
    </>
  )
}
