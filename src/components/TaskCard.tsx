import clsx from 'clsx'

import { TaskItem } from '../models/task.model'

interface TaskCardProps {
    task: TaskItem
    className?: string
}

function TaskCard({ task, className }: TaskCardProps) {
    return <article className={clsx('', className)}>{task.text}</article>
}

export default TaskCard
