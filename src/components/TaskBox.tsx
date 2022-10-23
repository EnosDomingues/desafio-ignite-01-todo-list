import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react';
import { Task } from '../App';
import styles from './TaskBox.module.css'

interface TaskBoxProps {
  handleAddtask: (task: Task) => void;
}

export function TaskBox({ handleAddtask }: TaskBoxProps) {
  const [newTaskContent, setNewTaskContent] = useState('');

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()
    handleAddtask({ content: newTaskContent, done: false, id: Date.now() })
    setNewTaskContent('')
  }

  return (
    <form 
      className={styles.taskBox}
      onSubmit={handleSubmitForm}
    >
      <input 
        type="text" 
        onChange={(e) => setNewTaskContent(e.target.value)} 
        value={newTaskContent}
        placeholder="Adicionar uma nova tarefa"
        required
      />
      <button type='submit'>
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  )
}