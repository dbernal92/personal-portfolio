import Card from "../src/components/Card";
import resumeData from "../src/resumeData";

function Summary() {
    return (
        <Card title="Professional Summary">
            <div style={{
                lineHeight: '1.6',
                fontSize: '1rem',
                padding: '0.5rem 0'
            }}>
                {resumeData.summary}
            </div>
        </Card>
    );
}

export default Summary;