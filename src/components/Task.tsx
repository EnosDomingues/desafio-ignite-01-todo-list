import { ChangeEvent, ReactHTMLElement, useState } from 'react'
import { Task as TaskType } from '../App'
import { Check } from 'phosphor-react'
import trashHoverTrue from '../assets/hover=true.svg'
import trashHoverFalse from '../assets/hover=false.svg'
import styles from './Task.module.css'

interface TaskProps {
  task: TaskType;
  tasks: TaskType[];
  handleUpdateTasks: (tasks: TaskType[]) => void;
}

export function Task({ task, tasks, handleUpdateTasks }: TaskProps) {

  const [trashSrc, setTrashSrc] = useState(trashHoverFalse)

  function handleTrashSrcIn() {
    setTrashSrc(trashHoverTrue)
  }

  function handleTrashSrcOut() {
    setTrashSrc(trashHoverFalse)
  }

  function handleMarkTaskAsDone(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;

    const newTasks = tasks.map(iteratedTask => {
      if (iteratedTask.id === task.id) {
        iteratedTask.done = isChecked
      }

      return iteratedTask;
    })

    handleUpdateTasks(newTasks);
  }

  function handleDeleteTask() {
    const newTasks = tasks.filter(iteratedTask => iteratedTask.id !== task.id)

    handleUpdateTasks(newTasks);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" id={task.id.toString()} onChange={handleMarkTaskAsDone}/>
      <label htmlFor={task.id.toString()}>
        <Check weight='bold'/>
      </label>
      <span className={task.done ? styles.taskDone : ''}>
        {task.content}
      </span>
      <button onClick={handleDeleteTask}>
        <img 
          src={trashSrc} 
          onMouseOver={handleTrashSrcIn} 
          onMouseOut={handleTrashSrcOut} 
          alt="trash" 
        />
      </button>
    </div>
  )
}