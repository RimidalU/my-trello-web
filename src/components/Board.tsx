import clsx from 'clsx'

import { TaskType } from '../models/task.model'

import Column from './Column'

interface BoardProps {
    className?: string
}

function Board({ className }: BoardProps) {
    return (
        <ul
            className={clsx(
                'flex gap-10 justify-center w-full max-w-screen-fullHd',
                className
            )}
        >
            {Object.values(TaskType).map((taskType) => (
                <li key={taskType}>
                    <Column taskType={taskType} />
                </li>
            ))}
        </ul>
    )
}

export default Board
