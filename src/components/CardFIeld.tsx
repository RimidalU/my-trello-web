import clsx from 'clsx'
import { ChangeEvent } from 'react'

import { FieldNameType } from '../models/common.model'

interface CardFIeldProps {
    fieldName: keyof typeof FieldNameType
    isEditing: boolean
    isOverdue?: boolean
    className?: string
    value: string
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
            <span>{`${FieldNameType[fieldName]}:`}</span>
            <strong
                className={clsx(
                    isOverdue && !isEditing ? 'text-warning' : 'text-white-87'
                )}
            >
                {isEditing ? (
                    <input
                        type="text"
                        name={fieldName}
                        value={value}
                        onChange={onChange}
                        className="border rounded border-white-50 hover:border-active focus:border-active w-full pl-[5px] bg-transparent "
                    />
                ) : (
                    value
                )}
            </strong>
        </div>
    )
}

export default CardFIeld
