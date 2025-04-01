import Card from "../src/components/Card"
import cardData from "../src/data"

function TechSkills(props) {
    return (
        <Card title="Technical Skills">
            <h4>Programming Languages:</h4>
            <ul>
                {cardData.techSkills[0].programLanguages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <h4>Frontend:</h4>
            <ul>
                {cardData.techSkills[0].frontend.map((front, index) => (
                    <li key={index}>{front}</li>
                ))}
            </ul>
            <h4>Backend:</h4>
            <ul>
                {cardData.techSkills[0].backend.map((back, index) => (
                    <li key={index}>{back}</li>
                ))}
            </ul>
        </Card>
    )
}

export default TechSkills