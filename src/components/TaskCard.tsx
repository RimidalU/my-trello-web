import clsx from 'clsx'
import { useDraggable } from '@dnd-kit/core'
import { ChangeEvent, useState } from 'react'

import { TaskItem, TaskType } from '../models/task.model'
import { timestampToDateConvertor } from '../utils/common.utils'
import { isTaskOverdue } from '../utils/task.utils'

import TaskCardActions from './TaskCardActions'
import CardFIeld from './CardFIeld'

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
    const displayEditIcon = task.type === TaskType.Todo

    const [isEditing, setIsEditing] = useState(false)
    const [editedTask, setEditedTask] = useState({ ...task })

    const style = transform
        ? {
              transform: `translate(${transform.x}px, ${transform.y}px)`,
          }
        : undefined

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        setIsEditing(false)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()

        const { name, value } = event.target
        setEditedTask((prevTask) => ({ ...prevTask, [name]: value }))
    }
    displayEditIcon
    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation()
        handleEdit()
    }

    const list = isEditing ? null : listeners
    return (
        <article
            ref={setNodeRef}
            {...list}
            {...attributes}
            style={style}
            className={clsx(
                'bg-black-10 p-2 xl:p-4 rounded touch-none text-xs xl:text-sm flex flex-col gap-2',
                className
            )}
        >
            <CardFIeld
                fieldName={'startDay'}
                isEditing={isEditing}
                onChange={handleInputChange}
                value={timestampToDateConvertor(editedTask.startDay)}
            />

            <CardFIeld
                fieldName={'endDay'}
                isEditing={isEditing}
                isOverdue={isOverdue}
                onChange={handleInputChange}
                value={timestampToDateConvertor(editedTask.endDay)}
            />

            <CardFIeld
                fieldName={'text'}
                isEditing={isEditing}
                onChange={handleInputChange}
                value={editedTask.text}
            />
            {displayEditIcon && (
                <TaskCardActions
                    handleEdit={handleClick}
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                    isEditing={isEditing}
                    className=""
                />
            )}
        </article>
    )
}

export default TaskCard
