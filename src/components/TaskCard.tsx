import clsx from 'clsx'
import { useDraggable } from '@dnd-kit/core'
import { useState } from 'react'

import { TaskItem, TaskType } from '../models/task.model'
import { timestampToDateConvertor } from '../utils/common.utils'
import { isTaskOverdue } from '../utils/task.utils'

import EditIcon from './icons/EditIcon'
import TaskCardActions from './TaskCardActions'

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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setEditedTask((prevTask) => ({ ...prevTask, [name]: value }))
    }
    displayEditIcon
    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation()
        handleEdit()
    }

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
                    {isEditing ? (
                        <input
                            type="text"
                            name="startDay"
                            value={editedTask.startDay}
                            onChange={handleInputChange}
                        />
                    ) : (
                        timestampToDateConvertor(editedTask.startDay)
                    )}
                </strong>
            </div>
            isOverdue{' '}
            <div className="flex gap-2 xl:gap-4">
                <span>Окончание:</span>
                <strong
                    className={clsx(
                        isOverdue ? 'text-warning' : 'text-white-87',
                        isEditing ? 'hidden' : ''
                    )}
                >
                    {timestampToDateConvertor(editedTask.endDay)}
                </strong>
                <strong
                    className={clsx(
                        isOverdue ? 'text-warning' : 'text-white-87',
                        isEditing ? '' : 'hidden'
                    )}
                >
                    <input
                        type="text"
                        name="endDay"
                        value={editedTask.endDay}
                        onChange={handleInputChange}
                    />
                </strong>
            </div>
            <div className="flex gap-2 xl:gap-4">
                <span>Описание:</span>
                <strong className="text-white-87">
                    {isEditing ? (
                        <input
                            type="text"
                            name="text"
                            value={editedTask.text}
                            onChange={handleInputChange}
                        />
                    ) : (
                        editedTask.text
                    )}
                </strong>
            </div>
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
