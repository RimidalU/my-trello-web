import clsx from 'clsx'

import { ColumnNameType, TaskType } from '../models/task.model'

import GhostIcon from './icons/GhostIcon'
import HappyIcon from './icons/HappyIcon'
import SmileIcon from './icons/SmileIcon'
import UpsideDownIcon from './icons/UpsideDownIcon'
import TaskPurge from './TaskPurge'
import TaskCreate from './TaskCreate'

interface ColumnHeaderProps {
    taskType: TaskType
    className?: string
}

const iconMap = {
    todo: { icon: <HappyIcon />, text: ColumnNameType.todo },
    in_progress: { icon: <SmileIcon />, text: ColumnNameType.in_progress },
    review: { icon: <UpsideDownIcon />, text: ColumnNameType.review },
    done: { icon: <GhostIcon />, text: ColumnNameType.done },
}

function ColumnHeader({ taskType, className }: ColumnHeaderProps) {
    const { icon, text } = iconMap[taskType] || {
        icon: null,
        text: 'Unknown task type',
    }

    return (
        <div className={clsx('flex justify-between', className)}>
            <h2 className="flex gap-2 text-white-87 text-lg xl:text-2xl font-bold">
                {icon}
                {text}
            </h2>
            {taskType === TaskType.Done && <TaskPurge />}
            {taskType === TaskType.Todo && <TaskCreate />}
        </div>
    )
}

export default ColumnHeader
