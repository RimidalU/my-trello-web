interface EditIconProps {
    className?: string
}

const EditIcon = ({ className }: EditIconProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.5793 2.94495C18.2042 2.57001 17.6956 2.35938 17.1653 2.35938C16.6349 2.35938 16.1263 2.57001 15.7512 2.94495L14.1063 4.59095L19.4093 9.89395L21.0543 8.24995C21.2401 8.06422 21.3874 7.84371 21.488 7.601C21.5886 7.3583 21.6403 7.09816 21.6403 6.83545C21.6403 6.57274 21.5886 6.3126 21.488 6.06989C21.3874 5.82719 21.2401 5.60668 21.0543 5.42095L18.5793 2.94495ZM17.9953 11.3079L12.6922 6.00495L3.85725 14.8399L2.78125 21.2199L9.16125 20.1429L17.9953 11.3079Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default EditIcon
