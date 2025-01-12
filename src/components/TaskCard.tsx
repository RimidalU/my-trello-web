import clsx from 'clsx'
import { useDraggable } from '@dnd-kit/core'

import { TaskItem, TaskType } from '../models/task.model'
import { timestampToDateConvertor } from '../utils/common.utils'
import { isTaskOverdue } from '../utils/task.utils'

interface TaskCardProps {
    task: TaskItem
    className?: string
}

function TaskCard({ task, className }: TaskCardProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
        data: task,
    })
    const isOverdue = isTaskOverdue(task.endDay) && task.type !== TaskType.Done

    const style = transform
        ? {
              transform: `translate(${transform.x}px, ${transform.y}px)`,
          }
        : undefined

    return (
        <article
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className={clsx(
                'bg-cardBackground p-4 rounded touch-none',
                className
            )}
        >
            <div className="flex gap-4">
                <span>Начало:</span>
                <strong className="text-foregroundBold">
                    {timestampToDateConvertor(task.startDay)}
                </strong>
            </div>
            <div className="flex gap-4">
                <span>Окончание:</span>
                <strong
                    className={
                        isOverdue ? 'text-warning' : 'text-foregroundBold'
                    }
                >
                    {timestampToDateConvertor(task.endDay)}
                </strong>
            </div>
            <div className="flex gap-4">
                <span>Описание:</span>
                <strong className="text-foregroundBold">{task.text}</strong>
            </div>
        </article>
    )
}

export default TaskCard
