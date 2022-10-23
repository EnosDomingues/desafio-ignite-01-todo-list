import { TaskCounter } from './TaskCounter'
import { Task as TaskType } from '../App'

import styles from './TaskBoard.module.css'

import clipboard from '../assets/clipboard.svg'
import { Task } from './Task';

interface TaskBoardProps {
  tasks: TaskType[];
  handleUpdateTasks: (tasks: TaskType[]) => void;
}

export function TaskBoard({ tasks, handleUpdateTasks }: TaskBoardProps) {
  return (
    <div className={styles.taskBoard}>
      <header>
        <TaskCounter title="Tarefas Criadas" color="#4EA8DE" tasks={tasks}/>
        <TaskCounter title="Concluídas" color="#8284FA" tasks={tasks} done={true}/>
      </header>
      {tasks.length < 1 ? (
        <div className={styles.emptyTaskBoard}>
          <img src={clipboard} alt="clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      ): (
        <>
        {tasks.map(task => (
          <Task handleUpdateTasks={handleUpdateTasks} tasks={tasks} task={task} key={task.id}/>
        ))}
        </>
      )}
    </div>
  )
}