import clsx from 'clsx'

import { ColumnNameType, TaskType } from '../models/task.model'

import GhostIcon from './icons/GhostIcon'
import HappyIcon from './icons/HappyIcon'
import SmileIcon from './icons/SmileIcon'
import UpsideDownIcon from './icons/UpsideDownIcon'

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
        <h2
            className={clsx(
                'flex gap-2 text-foregroundBold text-2xl font-bold mb-4',
                className
            )}
        >
            {icon}
            {text}
        </h2>
    )
}

export default ColumnHeader
