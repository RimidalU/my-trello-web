import { IconComponentProps } from '../../models/common.model'

const CheckIcon = ({ className }: IconComponentProps) => {
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
                d="M8.28741 19.7365L1.3142 12.7633C0.895266 12.3444 0.895266 11.6651 1.3142 11.2462L2.83134 9.72899C3.25027 9.31001 3.92957 9.31001 4.34851 9.72899L9.046 14.4264L19.1075 4.36498C19.5264 3.94605 20.2057 3.94605 20.6247 4.36498L22.1418 5.88216C22.5607 6.3011 22.5607 6.98035 22.1418 7.39933L9.80458 19.7366C9.3856 20.1555 8.70634 20.1555 8.28741 19.7365Z"
                fill="#0184CF"
            />
        </svg>
    )
}

export default CheckIcon
