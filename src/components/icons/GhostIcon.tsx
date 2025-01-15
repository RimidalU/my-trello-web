import { IconComponentProps } from '../../models/common.model'

const GhostIcon = ({ className }: IconComponentProps) => {
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
                d="M3 11V19H3.051C3.296 20.692 4.741 22 6.5 22C7.674 22 8.574 21.583 9.172 20.826C9.54388 21.1994 9.98605 21.4954 10.473 21.697C10.9599 21.8985 11.4819 22.0016 12.0089 22.0003C12.5359 21.999 13.0574 21.8934 13.5433 21.6894C14.0293 21.4854 14.47 21.1872 14.84 20.812C15.441 21.574 16.344 22 17.5 22C19.43 22 21 20.43 21 18.5V11C21 6.038 16.963 2 12 2C7.037 2 3 6.038 3 11ZM9 12C7.897 12 7 11.103 7 10C7 8.897 7.897 8 9 8C10.103 8 11 8.897 11 10C11 11.103 10.103 12 9 12ZM15 8C16.103 8 17 8.897 17 10C17 11.103 16.103 12 15 12C13.897 12 13 11.103 13 10C13 8.897 13.897 8 15 8Z"
                fill="white"
                fillOpacity="0.8"
            />
        </svg>
    )
}

export default GhostIcon
