import clsx from 'clsx'
import { useDraggable } from '@dnd-kit/core'
import { ChangeEvent, useState } from 'react'

import { TaskItem, TaskType } from '../models/task.model'
import {
    dateToTimestampConvertor,
    timestampToDateConvertor,
} from '../utils/common.utils'
import { isTaskOverdue } from '../utils/task.utils'
import { useTasks } from '../contexts/TaskProvider'
import { TaskAction } from '../models/taskContext.model'

import TaskCardActions from './TaskCardActions'
import CardFIeld from './CardFIeld'

interface TaskCardProps {
    task: TaskItem
    className?: string
}

function TaskCard({ task, className }: TaskCardProps) {
    const { dispatch } = useTasks()

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
        data: task,
    })
    const isOverdue = isTaskOverdue(task.endDay) && task.type !== TaskType.Done
    const displayEditIcon = task.type === TaskType.Todo

    const initTask = {
        ...task,
        startDay: timestampToDateConvertor(task.startDay),
        endDay: timestampToDateConvertor(task.endDay),
    }

    const [isEditing, setIsEditing] = useState(false)
    const [editedTask, setEditedTask] = useState(initTask)

    const style = transform
        ? {
              transform: `translate(${transform.x}px, ${transform.y}px)`,
          }
        : undefined

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        dispatch({
            type: TaskAction.update_task,
            task: {
                ...editedTask,

                startDay: dateToTimestampConvertor(editedTask.startDay),
                endDay: dateToTimestampConvertor(editedTask.endDay),
            },
        })
        setIsEditing(false)
    }

    const handleCancel = () => {
        setEditedTask(initTask)

        setIsEditing(false)
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()

        let { name, value } = event.target
        setEditedTask((prevTask) => ({ ...prevTask, [name]: value }))
    }

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
                value={editedTask.startDay}
            />

            <CardFIeld
                fieldName={'endDay'}
                isEditing={isEditing}
                isOverdue={isOverdue}
                onChange={handleInputChange}
                value={editedTask.endDay}
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
