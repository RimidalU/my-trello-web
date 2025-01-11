import { createContext, Dispatch } from 'react'

import { Action, State } from '../models/taskContext.model'
import { TaskItem } from '../models/task.model'
import tasks from '../assets/data/tasks.json'
import { getTasks } from '../repositories/tasks.repository'

const initialState: State = {
    tasks: getTasks() ?? (tasks as TaskItem[]),
}

const TaskContext = createContext<
    { state: State; dispatch: Dispatch<Action> } | undefined
>({ state: initialState, dispatch: () => {} })

export { TaskContext, initialState }
