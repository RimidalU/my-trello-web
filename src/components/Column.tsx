import clsx from 'clsx'

import { TaskItem } from '../models/task.model'

interface ColumnProps {
    tasks: TaskItem[]
    className?: string
}
function Column({ tasks, className }: ColumnProps) {
    return (
        <ul className={clsx('', className)}>
            {tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
            ))}
        </ul>
    )
}

export default Column
