import Card from "../src/components/Card"
import cardData from "../src/data"

function Projects(props) {
    return (
        <Card title="Projects">
            {cardData.projects[0].names.map((name, index) => (
                <div key={index}>
                    <h4>{name}:</h4>
                    <p>{cardData.projects[0].tech[index]}</p>
                    {/* <p>{cardData.projects[0].dates[index]}</p> */}
                </div>
            ))}
        </Card>
    )
}

export default Projects