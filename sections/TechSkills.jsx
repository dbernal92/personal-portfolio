import Card from "../src/components/Card"
import resumeData from "../src/resumeData"

function TechSkills(props) {
    return (
        <Card title="Technical Skills">
            <h4>Programming Languages:</h4>
            <ul>
                {resumeData.techSkills[0].programLanguages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <h4>Frontend:</h4>
            <ul>
                {resumeData.techSkills[0].frontend.map((front, index) => (
                    <li key={index}>{front}</li>
                ))}
            </ul>
            <h4>Backend:</h4>
            <ul>
                {resumeData.techSkills[0].backend.map((back, index) => (
                    <li key={index}>{back}</li>
                ))}
            </ul>
            <h4>Tools:</h4>
            <ul>
                {resumeData.techSkills[0].tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                ))}
            </ul>
            <h4>Concepts:</h4>
            <ul>
                {resumeData.techSkills[0].concepts.map((concept, index) => (
                    <li key={index}>{concept}</li>
                ))}
            </ul>
        </Card>
    )
}

export default TechSkills