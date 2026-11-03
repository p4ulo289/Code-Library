type FilterProps = {
    search: string
    onSearchChange: (value: string) => void
}

function Filter ({ search, onSearchChange }: FilterProps) {
    return (
        <div className="flex flex-col items-center">
            <p className=" text-[#00A2F7] font-bold text-xl mt-4">Busque o conteúdo que deseja assistir hoje</p>
            <p className=" text-xs text-[#00A2F7] mb-2">Conteúdo exclusivo todos os dias</p>
            <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar por título ou categoria"
                className=" bg-white border border-[#F2F2F2] rounded-md w-full max-w-[615px] h-[35px] px-3"
            />
        </div>
    )
}

export default Filter
