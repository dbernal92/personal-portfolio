import Card from "../src/components/Card"
import resumeData from "../src/resumeData"

function Experience(props) {
    return (
        <Card title="Work Experience">
            {resumeData.experience.map((job, index) => (
                <div key={index} style={{ marginBottom: '1.5rem' }}>
                    <h3>{job.title}</h3>
                    <p style={{ fontWeight: 'bold', margin: '0.25rem 0' }}>
                        {job.company}, {job.location}
                    </p>
                    <p style={{ fontStyle: 'italic', margin: '0.25rem 0 0.5rem 0' }}>
                        {job.date}
                    </p>
                    <ul style={{ marginTop: '0.5rem' }}>
                        {job.details.map((detail, i) => (
                            <li key={i} style={{ marginBottom: '0.3rem' }}>
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Card>
    );
}

export default Experience;