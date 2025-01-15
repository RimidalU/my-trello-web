import clsx from 'clsx'
import { ChangeEvent } from 'react'

interface CardFIeldProps {
    fieldName: string
    isEditing: boolean
    isOverdue?: boolean
    className?: string
    value: string | number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CardFIeld = ({
    fieldName,
    isEditing,
    isOverdue = false,
    className,
    onChange,
    value,
}: CardFIeldProps) => {
    return (
        <div className={clsx('flex gap-2 xl:gap-4', className)}>
            <span>{`${fieldName}:`}</span>
            <strong
                className={clsx(
                    isOverdue && !isEditing ? 'text-warning' : 'text-white-87'
                )}
            >
                {isEditing ? (
                    <input
                        type="text"
                        name="startDay"
                        value={value}
                        onChange={onChange}
                    />
                ) : (
                    value
                )}
            </strong>
        </div>
    )
}

export default CardFIeld
