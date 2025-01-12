import { TaskItem } from './task.model'

enum TaskAction {
    add_task = 'ADD_TASK',
    remove_task = 'REMOVE_TASK',
    update_task = 'UPDATE_TASK',
    load_tasks = 'LOAD_TASKS',
    remove_done_tasks = 'REMOVE_DONE_TASKS',
}

type Action =
    | { type: TaskAction.add_task; task: TaskItem }
    | { type: TaskAction.remove_task; id: number | string }
    | { type: TaskAction.update_task; task: TaskItem }
    | { type: TaskAction.load_tasks; tasks: TaskItem[] }
    | { type: TaskAction.remove_done_tasks }

type State = {
    tasks: TaskItem[]
}

export { TaskAction }
export type { Action, State }
