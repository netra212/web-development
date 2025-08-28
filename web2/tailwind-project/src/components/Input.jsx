export const Input = ({
    onClick,
    type, 
    placeholder
}) => {
    // clsx, cx
    return <span
        onClick={onClick} className={`rounded-2xl text-4xl px-2 py-2 text-white cursor-pointer "bg-blue-200" : "bg-green-400"}`}
    >
        <input type={type} placeholder={placeholder} className="bg-blue-200 outline-none"/>
    </span>
}


