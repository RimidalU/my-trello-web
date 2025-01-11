interface TrashIconProps {
    className?: string
}

const TrashIcon = ({ className }: TrashIconProps) => {
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
                d="M20.7264 5.27586H16.0364V4.38586C16.0327 3.75568 15.7813 3.15224 15.3364 2.70586C15.1148 2.48349 14.8514 2.30715 14.5613 2.18702C14.2713 2.06688 13.9603 2.00531 13.6464 2.00586H10.3864C10.0725 2.00531 9.76152 2.06688 9.47147 2.18702C9.18142 2.30715 8.91801 2.48349 8.69641 2.70586C8.25522 3.15386 8.00746 3.7571 8.00641 4.38586V5.27586H3.31641C3.11749 5.27586 2.92673 5.35488 2.78608 5.49553C2.64542 5.63618 2.56641 5.82695 2.56641 6.02586C2.56641 6.22478 2.64542 6.41554 2.78608 6.55619C2.92673 6.69685 3.11749 6.77586 3.31641 6.77586H4.73641V18.5359C4.73233 18.9916 4.8186 19.4437 4.99024 19.8659C5.16188 20.2882 5.41549 20.6722 5.73641 20.9959C6.39074 21.637 7.27034 21.996 8.18641 21.9959H15.8064C16.7225 21.996 17.6021 21.637 18.2564 20.9959C18.5773 20.6722 18.8309 20.2882 19.0026 19.8659C19.1742 19.4437 19.2605 18.9916 19.2564 18.5359V6.77586H20.6864C20.8853 6.77586 21.0761 6.69685 21.2167 6.55619C21.3574 6.41554 21.4364 6.22478 21.4364 6.02586C21.4364 5.82695 21.3574 5.63618 21.2167 5.49553C21.0761 5.35488 20.8853 5.27586 20.6864 5.27586H20.7264ZM9.52641 4.38586C9.52645 4.27044 9.54946 4.15618 9.5941 4.04973C9.63873 3.94329 9.70411 3.84679 9.78641 3.76586C9.95173 3.60236 10.1739 3.50919 10.4064 3.50586H13.6664C13.7834 3.50513 13.8994 3.52775 14.0076 3.5724C14.1158 3.61704 14.214 3.68281 14.2964 3.76586C14.4599 3.93118 14.5531 4.15337 14.5564 4.38586V5.27586H9.55641L9.52641 4.38586ZM10.8564 16.9959C10.8564 17.2611 10.751 17.5154 10.5635 17.703C10.376 17.8905 10.1216 17.9959 9.85641 17.9959C9.59119 17.9959 9.33684 17.8905 9.1493 17.703C8.96176 17.5154 8.85641 17.2611 8.85641 16.9959V11.5659C8.85641 11.3006 8.96176 11.0463 9.1493 10.8588C9.33684 10.6712 9.59119 10.5659 9.85641 10.5659C10.1216 10.5659 10.376 10.6712 10.5635 10.8588C10.751 11.0463 10.8564 11.3006 10.8564 11.5659V16.9959ZM15.2164 16.9959C15.2164 17.2611 15.111 17.5154 14.9235 17.703C14.736 17.8905 14.4816 17.9959 14.2164 17.9959C13.9512 17.9959 13.6968 17.8905 13.5093 17.703C13.3218 17.5154 13.2164 17.2611 13.2164 16.9959V11.5659C13.2164 11.3006 13.3218 11.0463 13.5093 10.8588C13.6968 10.6712 13.9512 10.5659 14.2164 10.5659C14.4816 10.5659 14.736 10.6712 14.9235 10.8588C15.111 11.0463 15.2164 11.3006 15.2164 11.5659V16.9959Z"
                fill="white"
                fillOpacity="0.8"
            />
        </svg>
    )
}

export default TrashIcon
