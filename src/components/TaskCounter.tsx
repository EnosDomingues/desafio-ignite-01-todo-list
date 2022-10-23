import { Task } from '../App';
import styles from './TaskCounter.module.css'

interface TaskCounterProps {
  title: string;
  color: string;
  tasks: Task[];
  done?: boolean;
}

export function TaskCounter({ title, color, tasks, done }: TaskCounterProps) {

  const tasksDone = tasks.filter(task => task.done)
  
  return (
    <div className={styles.wrapper}>
      <span style={{ color }}>{title}</span>
      {done ? (
        <div className={styles.counterDone}>{tasksDone.length} de {tasks.length}</div>
      ) : (
        <div className={styles.counter}>{tasks.length}</div>
      )}
    </div>
  )
}