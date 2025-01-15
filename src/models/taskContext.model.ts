import { TaskItem } from './task.model'

enum TaskAction {
    add_task = 'ADD_TASK',
    remove_task = 'REMOVE_TASK',
    update_task = 'UPDATE_TASK',
    load_tasks = 'LOAD_TASKS',
    remove_done_tasks = 'REMOVE_DONE_TASKS',
    apply_filter = 'APPLY_FILTER',
    start_create_task = 'START_CREATE_TASK',
    finish_create_task = 'FINISH_CREATE_TASK',
}

type Action =
    | { type: TaskAction.add_task; task: TaskItem }
    | { type: TaskAction.remove_task; id: number | string }
    | { type: TaskAction.update_task; task: TaskItem }
    | { type: TaskAction.load_tasks; tasks: TaskItem[] }
    | { type: TaskAction.remove_done_tasks }
    | { type: TaskAction.apply_filter; filter: string }
    | { type: TaskAction.start_create_task }
    | { type: TaskAction.finish_create_task }

type State = {
    tasks: TaskItem[]
    newTask: TaskItem | null
    filteredTasks: TaskItem[]
}

export { TaskAction }
export type { Action, State }
