import Content from "./Content"

function Card({ title, children }) {
    return (
        <div className="card">
            <Content>
                <h3>{title}</h3>
                {children}
            </Content>
        </div>
    )
}
export default Card