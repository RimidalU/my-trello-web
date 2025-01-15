import clsx from 'clsx'

import EditIcon from './icons/EditIcon'
import CrossIcon from './icons/CrossIcon'
import CheckIcon from './icons/CheckIcon'

interface TaskCardActions {
    isEditing: boolean
    className?: string
    handleSave: (event: React.MouseEvent) => void
    handleEdit: (event: React.MouseEvent) => void
    handleCancel: (event: React.MouseEvent) => void
}

function TaskCardActions({
    isEditing,
    className,
    handleSave,
    handleEdit,
    handleCancel,
}: TaskCardActions) {
    return (
        <div
            className={clsx(
                'flex gap-1 xl:gap-2 justify-end flex-row  mt-2 ',
                className
            )}
        >
            {isEditing ? (
                <>
                    <div
                        className="text-white hover:text-active p-[9px] rounded-full bg-white-8 hover:bg-white-20"
                        onPointerDown={handleSave}
                    >
                        <CheckIcon className="cursor-pointer  text-inherit" />
                    </div>
                    <div
                        className="text-white hover:text-active p-[9px] rounded-full bg-white-8 hover:bg-white-20"
                        onPointerDown={handleCancel}
                    >
                        <CrossIcon className="cursor-pointer text-inherit" />
                    </div>
                </>
            ) : (
                <div
                    className="text-white hover:text-active p-[9px] rounded-full bg-white-8 hover:bg-white-20"
                    onPointerDown={handleEdit}
                >
                    <EditIcon className="cursor-pointer text-inherit" />
                </div>
            )}
        </div>
    )
}

export default TaskCardActions
