import { Link } from "react-router-dom"

function Landing() {
    return (
        <div>
            <h2>TheFoodFund</h2>
        <Link to="/donate">Doar</Link>
        <br/>
        <Link to="/collect">Recolher</Link>
        </div>
    )
}
export default Landing;