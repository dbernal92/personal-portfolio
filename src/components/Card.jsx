import Content from "./Content"

function Card({ title, children }) {
    return (
        <div className="card">
            <h3>{title}</h3>
                <Content>{children}</Content>
        </div>
    )
}
export default Card