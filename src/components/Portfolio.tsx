import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
    return (
        <div id="portfolio" className="flex flex-col items-center px-4 md:px-4 lg:px-4">
              <Title id="portfolio-title">Projects</Title>
              <div className="w-full flex justify-center"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {portfolio.map(project => (
                    <PortfolioItem
                    imgUrl={project.imgUrl}
                    description={project.description}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;