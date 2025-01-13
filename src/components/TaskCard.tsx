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
                'bg-black-10 p-2 xl:p-4 rounded touch-none text-xs xl:text-sm',
                className
            )}
        >
            <div className="flex gap-2 xl:gap-4">
                <span>Начало:</span>
                <strong className="text-white-87">
                    {timestampToDateConvertor(task.startDay)}
                </strong>
            </div>
            <div className="flex gap-2 xl:gap-4">
                <span>Окончание:</span>
                <strong
                    className={isOverdue ? 'text-warning' : 'text-white-87'}
                >
                    {timestampToDateConvertor(task.endDay)}
                </strong>
            </div>
            <div className="flex gap-2 xl:gap-4">
                <span>Описание:</span>
                <strong className="text-white-87">{task.text}</strong>
            </div>
        </article>
    )
}

export default TaskCard
