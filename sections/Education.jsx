import Card from "../src/components/Card"
import resumeData from "../src/resumeData"

function Education(props) {
    return (
        <Card title="Education">
            {resumeData.education.map((edu, index) => (
                <div key={index}>
                    <h4>{edu.degree}</h4>
                    <p>{edu.school}, {edu.location}</p>
                    <p>{edu.date}</p>
                    <ul>
                        {edu.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </Card>
    )
}

export default Education