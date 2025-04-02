import Card from "../src/components/Card";
import resumeData from "../src/resumeData";

function Contact(props) {
    const { name, pronouns, location, phone, email, linkedin } = resumeData.personalInfo;
    
    return (
        <Card title="Contact Information">
            <div style={{ lineHeight: '1.6' }}>
                <h3>{name}</h3>
                <p><strong>Pronouns:</strong> {pronouns}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
                <p><strong>LinkedIn:</strong> <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
            </div>
        </Card>
    );
}

export default Contact;