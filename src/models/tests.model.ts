import { TaskType } from './task.model'

const testsTasks = [
    {
        id: 1,
        type: TaskType.Done,
        startDay: 1700000000000,
        endDay: 1703740800000,
        text: 'Task 1',
    },
    {
        id: 2,
        type: TaskType.Todo,
        startDay: 1767206400000,
        endDay: 1767292800000,
        text: 'Task 2.',
    },
    {
        id: 5,
        type: TaskType.Done,
        startDay: 1700000030000,
        endDay: 1703740804000,
        text: 'Task 3',
    },
]

export { testsTasks }
