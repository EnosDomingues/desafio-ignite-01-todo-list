import { useState } from "react"

import { Header } from "./components/Header"
import { TaskBox } from "./components/TaskBox"

import styles from './App.module.css'
import { TaskBoard } from "./components/TaskBoard";

export interface Task {
  id: number;
  done: boolean;
  content: string;
}


function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddtask(newTask: Task) {
    setTasks([...tasks, newTask])
    console.log([...tasks, newTask])
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <TaskBox handleAddtask={handleAddtask}/>
      <TaskBoard handleUpdateTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default App
