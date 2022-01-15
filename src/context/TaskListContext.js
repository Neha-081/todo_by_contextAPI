import React,{createContext,useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext=createContext()

const TaskListContextProvider=(props)=>{
    const [tasks,setTasks]=useState([
        {title:"reading a book",id:1},
        {title:"wash a car",id:2},
        {title:"go for shopping",id:3}
    ])

    const addTask=(title)=>{
   setTasks([...tasks,{title,id:uuidv4()}])
    }

    const removeTask=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
    }

    return <TaskListContext.Provider value={{tasks,addTask,removeTask}}>
     {props.children}
    </TaskListContext.Provider>
}

export default TaskListContextProvider