import { TaskType } from '../models/task.model'

function Board() {
    return (
        <div>
            <ul>
                {Object.values(TaskType).map((task) => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default Board
