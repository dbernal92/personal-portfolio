import Card from "../src/components/Card"
import pfp from "../src/assets/LI-Profile-Pic.png"

console.log(pfp)

function AboutMe() {
    return (
        <>
            <Card title="About Me">
                <img src={pfp} className="img" id="profile-pic" alt="profile-pic" />
            </Card>

        </>
    )
}

export default AboutMe