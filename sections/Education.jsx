import Card from "../src/components/Card"
import cardData from "../src/data"

function Education() {
    return (
        <Card title="Education">
            {cardData.education[0].degrees.map((degree, index) => (
                <div key={index}>
                    <h4>{degree}:</h4>
                    <p>{cardData.education[0].schools[index]}</p>
                    <p>{cardData.education[0].dates[index]}</p>
                </div>
            ))}
        </Card>
    )
}

export default Education