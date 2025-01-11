import { ReactNode, useContext, useEffect, useReducer } from 'react'

import { Action, State, TaskAction } from '../models/taskContext.model'
import { getTasks, saveTasks } from '../repositories/tasks.repository'

import { initialState, TaskContext } from './TaskContext'

const taskReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.task] }
        case 'REMOVE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id),
            }
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.task.id ? action.task : task
                ),
            }
        default:
            return state
    }
}

const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    useEffect(() => {
        const storedTasks = getTasks()

        if (storedTasks) {
            dispatch({ type: TaskAction.load_tasks, tasks: storedTasks })
        }
    }, [])

    useEffect(() => {
        saveTasks(state.tasks)
    }, [state.tasks])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

const useTasks = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider')
    }
    return context
}

export { TaskProvider, useTasks }
