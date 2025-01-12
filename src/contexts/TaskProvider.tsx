import { ReactNode, useContext, useEffect, useReducer } from 'react'

import { Action, State, TaskAction } from '../models/taskContext.model'
import {
    getInitialTasks,
    getTasks,
    saveTasks,
} from '../repositories/tasks.repository'
import { TaskType } from '../models/task.model'

import { initialState, TaskContext } from './TaskContext'

const taskReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LOAD_TASKS':
            return { ...state, tasks: action.tasks }
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.task] }
        case 'REMOVE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id),
            }
        case 'REMOVE_DONE_TASKS':
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.type !== TaskType.Done
                ),
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

        if (storedTasks.length) {
            dispatch({ type: TaskAction.load_tasks, tasks: storedTasks })
        } else {
            dispatch({
                type: TaskAction.load_tasks,
                tasks: getInitialTasks(),
            })
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
