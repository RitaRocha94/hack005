import { Link } from "react-router-dom"

function Landing() {
    return (
        <div>
            <h2>TheFoodFund</h2>
        <Link to="/donate">Doar</Link>
        <br/>
        <button>Recolher</button>
        </div>
    )
}
export default Landing;