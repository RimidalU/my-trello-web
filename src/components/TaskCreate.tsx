import { useTasks } from '../contexts/TaskProvider'
import { TaskAction } from '../models/taskContext.model'

const CREATE_BUTTON = '+ Добавить'

function TaskCreate() {
    const { dispatch } = useTasks()

    const CreateTask = () => {
        dispatch({
            type: TaskAction.start_create_task,
        })
    }

    return (
        <div className={'cursor-pointer'} onClick={CreateTask}>
            <span className="hover:text-active">{CREATE_BUTTON}</span>
        </div>
    )
}

export default TaskCreate
