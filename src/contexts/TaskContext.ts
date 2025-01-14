import { createContext, Dispatch } from 'react'

import { Action, State } from '../models/taskContext.model'
import { getInitialTasks, getTasks } from '../repositories/tasks.repository'

const initialState: State = {
    filteredTasks: [],
    tasks: getTasks() ?? getInitialTasks(),
}

const TaskContext = createContext<
    { state: State; dispatch: Dispatch<Action> } | undefined
>({ state: initialState, dispatch: () => {} })

export { TaskContext, initialState }
