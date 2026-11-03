export type Content = {
    id: number
    title: string
    category: string
    duration: string
    premium?: boolean
}

type CardProps = {
    content: Content
}

function Card ({ content }: CardProps) {
    return (
        <div className="bg-white border border-[#F2F2F2] rounded-md p-4 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="bg-[#F4FBFF] h-[120px] rounded-md flex items-center justify-center text-[#00A2F7] font-bold">
                {content.category}
            </div>
            <p className="font-bold text-[#00A2F7]">{content.title}</p>
            <div className="flex justify-between items-center text-xs text-[#00A2F7]">
                <span>{content.duration}</span>
                {content.premium && (
                    <span className="bg-[#00A2F7] text-white font-bold rounded-[5px] px-2 py-0.5">Premium</span>
                )}
            </div>
        </div>
    )
}

export default Card
