import clsx from 'clsx'
import { DndContext, DragEndEvent } from '@dnd-kit/core'

import { TaskItem, TaskType } from '../models/task.model'
import { useTasks } from '../contexts/TaskProvider'
import { TaskAction } from '../models/taskContext.model'

import Column from './Column'

interface BoardProps {
    className?: string
}

function Board({ className }: BoardProps) {
    const { dispatch } = useTasks()

    const handleDragEnd = (event: DragEndEvent): void => {
        const { active, over } = event

        if (!over) return

        const currentTask = active.data.current as TaskItem
        const newStatus = over.id as TaskType

        dispatch({
            type: TaskAction.update_task,
            task: {
                ...currentTask,
                type: newStatus,
            },
        })
    }

    return (
        <ul
            className={clsx(
                'flex gap-10 justify-center w-full max-w-screen-fullHd',
                className
            )}
        >
            <DndContext onDragEnd={handleDragEnd}>
                {Object.values(TaskType).map((taskType) => (
                    <li key={taskType}>
                        <Column taskType={taskType} />
                    </li>
                ))}
            </DndContext>
        </ul>
    )
}

export default Board
