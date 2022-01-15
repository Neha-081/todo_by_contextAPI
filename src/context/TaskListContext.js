import React,{createContext,useState} from 'react'

export const TaskListContext=createContext()

const TaskListContextProvider=(props)=>{
    const [tasks,setTasks]=useState([
        {title:"reading a book",id:1},
        {title:"wash a car",id:2},
        {title:"go for shopping",id:3}
    ])
    return <TaskListContext.Provider value={{tasks}}>
     {props.children}
    </TaskListContext.Provider>
}

export default TaskListContextProvider