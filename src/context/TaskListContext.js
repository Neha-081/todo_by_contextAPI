import React,{createContext,useState} from 'react'

export const TaskListContext=createContext()

const TaskListContextProvider=()=>{
    return <div>Task List Context</div>
}

export default TaskListContextProvider