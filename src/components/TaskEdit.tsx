import clsx from 'clsx'
import { ChangeEvent, useState } from 'react'

import {
    dateToTimestampConvertor,
    timestampToDateConvertor,
} from '../utils/common.utils'
import { TaskType } from '../models/task.model'
import { isTaskOverdue } from '../utils/task.utils'
import { useTasks } from '../contexts/TaskProvider'
import { TaskAction } from '../models/taskContext.model'

import TaskCardActions from './TaskCardActions'
import CardFIeld from './CardFIeld'

interface TaskEditProps {
    className?: string
}
function TaskEdit({ className }: TaskEditProps) {
    const { dispatch, state } = useTasks()

    const task = state.newTask

    if (!task) return

    const isOverdue = isTaskOverdue(task.endDay) && task.type !== TaskType.Done

    const currentTask = {
        ...task,
        startDay: timestampToDateConvertor(task.startDay),
        endDay: timestampToDateConvertor(task.endDay),
    }

    const [editedTask, setEditedTask] = useState(currentTask)

    const handleSave = () => {
        dispatch({
            type: TaskAction.add_task,
            task: {
                ...editedTask,

                startDay: dateToTimestampConvertor(editedTask.startDay),
                endDay: dateToTimestampConvertor(editedTask.endDay),
            },
        })
        dispatch({
            type: TaskAction.finish_create_task,
        })
    }

    const handleCancel = () => {
        setEditedTask(currentTask)

        dispatch({
            type: TaskAction.finish_create_task,
        })
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation()

        let { name, value } = event.target
        setEditedTask((prevTask) => ({ ...prevTask, [name]: value }))
    }

    return (
        <article
            className={clsx(
                'bg-black-10 p-2 xl:p-4 rounded touch-none text-xs xl:text-sm flex flex-col gap-2',
                className
            )}
        >
            <CardFIeld
                fieldName={'startDay'}
                isEditing={true}
                onChange={handleInputChange}
                value={editedTask.startDay}
            />

            <CardFIeld
                fieldName={'endDay'}
                isEditing={true}
                isOverdue={isOverdue}
                onChange={handleInputChange}
                value={editedTask.endDay}
            />

            <CardFIeld
                fieldName={'text'}
                isEditing={true}
                onChange={handleInputChange}
                value={editedTask.text}
            />

            <TaskCardActions
                handleEdit={() => {}}
                handleSave={handleSave}
                handleCancel={handleCancel}
                isEditing={true}
                className=""
            />
        </article>
    )
}

export default TaskEdit
