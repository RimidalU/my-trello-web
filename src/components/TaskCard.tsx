import clsx from 'clsx'

import { TaskItem } from '../models/task.model'
import { timestampToDateConvertor } from '../utils/common.utils'

interface TaskCardProps {
    task: TaskItem
    className?: string
}

function TaskCard({ task, className }: TaskCardProps) {
    return (
        <article className={clsx('bg-cardBackground p-4', className)}>
            <div className="card__field">
                <span>Начало:</span>
                <strong className="text-foregroundBold">
                    {timestampToDateConvertor(task.startDay)}
                </strong>
            </div>
            <div className="card__field">
                <span>Окончание:</span>
                <strong className="text-foregroundBold">
                    {timestampToDateConvertor(task.endDay)}
                </strong>
            </div>
            <div className="card__field">
                <span>Описание:</span>
                <strong className="text-foregroundBold">{task.text}</strong>
            </div>
        </article>
    )
}

export default TaskCard
