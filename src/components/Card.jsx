function Card({ children, fontColor='text-white', background="bg-primary",divider="bg-white", bordercolor="border-error",titleText= "Card", status=50, quantity=50 }) {
    return (
        <div className={`w-64 h-52 border-b-8 ${bordercolor}  rounded-md flex flex-col ${background} justify-start items-center py-4`}>

            <div className="text-primary-content text-2xl mb-2">
                {children}
            <span>{titleText}</span>
            </div>
            <div className={`divider ${divider}   h-0.5 mx-4 rounded-sm`}></div>
            <div className="flex justify-around mt-2 items-center">
                <div className={`text-5xl ${fontColor} `}>
                    {quantity}
                </div>
               
                    <div className={`radial-progress l ${fontColor}`}  style={{ "--value": status }}>
                        {status}%
                </div>

            </div>
        </div>
    )
}

export default Card;