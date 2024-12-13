import React, { useState } from 'react'

function ListaTarefa() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, newTask])
            setNewTask('')
        }
    }

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    return(
        <div>
            <input 
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Nova Tarefa'
            />
            <button onClick={addTask}>Adicionar Tarefa</button>
            <ul>
                {tasks.map((task,index)=>(
                    <li key={index}>
                        {task}
                        <button onClick={()=> removeTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaTarefa