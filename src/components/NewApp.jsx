import '../App.css'
import React from 'react'
import TaskList from './TaskList'
import TaskListContextProvider from '../context/TaskListContext'

function NewApp() {
    return (
        <TaskListContextProvider>
        <div className='container'>
            <div className='app-wrapper'>
                <div className='main'>
                <TaskList/>
                </div>
            </div>
        </div>
        </TaskListContextProvider>
    )
}

export default NewApp
