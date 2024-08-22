interface PortfolioItemProps {
    title: string;
    imgUrl: string;
    description: string;
    stack: string[];
    link: string;
}

function PortfolioItem({title, imgUrl, description, stack,link}: PortfolioItemProps) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <a href={link} target="_blank" rel="noopener noreferrer">
            <img
                src={imgUrl}
                alt="portfolio"
                className="w-full h-35 md:h-48 object-cover cursor-pointer"
            />
            </a>
            <div className="w-full p-4">
                <h3 className="text-lg md: text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="text-sm text-stone-700 mb-2">
                    {description}
                </p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs">
                    {stack.map((item: string) => (
                        <span className="inline-block px-3 py-1 font-semibold border-2 border-stone-900 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;