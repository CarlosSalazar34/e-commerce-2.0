
const SearchBar = () => {
    return (
            <input type="text" placeholder="Search Products, branchs" className="
            outline-none border border-gray-400 focus:border-blue-500 focus:ring-2 
            focus:ring-blue-300 px-3 py-2 rounded-xl transition-all duration-200 bg-gray-100 w-xl" />
    )
}

export default function Header() {
    const categorys = ["Phones", "Headphones", "Tablets", "Deals"]
    return (
        <header className="flex flex-row items-center justify-around m-5">
            <div className="flex items-center justify-center gap-4">
                <div className="bg-blue-500 text-xl p-2 rounded-xl">
                    ⚡
                </div>
                Tech Store
            </div>
            <SearchBar />
            <div className="flex gap-2">
                {
                    categorys.map((category, index)=>{
                        if (category === 'Deals'){
                            return <p className="text-red-500 cursor-pointer font-500 text-md hover:underline" key={index}>{category}</p>
                        }
                        return <p key={index} className="cursor-pointer font-500 text-md hover:underline">{category}</p>
                    })
                }
            </div>
            <div>

            </div>

        </header>
    )
}