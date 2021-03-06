import '../App.css'
import React from 'react'
import TaskList from './TaskList'
import TaskListContextProvider from '../context/TaskListContext'
import TaskForm from './TaskForm'
import Header from './Header'


function NewApp() {
    return (
        <TaskListContextProvider>
        <div className='container'>
            <div className='app-wrapper'>
                <Header/>
                <div className='main'>
                    <TaskForm/>
                <TaskList/>
                </div>
            </div>
        </div>
        </TaskListContextProvider>
    )
}

export default NewApp
