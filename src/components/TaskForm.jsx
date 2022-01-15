import React,{useContext,useEffect,useState} from 'react'
import { TaskListContext } from '../context/TaskListContext'

function TaskForm() {
   const {addTask,clearList,editItem,editTask}= useContext(TaskListContext)
  const [title,setTitle]=useState('')
  
   const handleChange=e=>{
    setTitle(e.target.value)
   }
   const handleSubmit=e=>{
  e.preventDefault()
  addTask(title)
  setTitle('')
}
   
useEffect(()=>{

})
   
   return (
       <form onSubmit={handleSubmit} className='form'>
           <input onChange={handleChange} type="text" className='task-input' placeholder='Add Task' required/>
           <div className='buttons'>
               <button 
               type='submit' 
               className='btn add-task-btn' 
               value={title}>Add Task</button>
               <button onClick={clearList}  
               className='btn clear-btn'>Clear</button>


           </div>
       </form>
    )
}

export default TaskForm
