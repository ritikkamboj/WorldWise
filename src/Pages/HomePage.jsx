import { Link } from "react-router-dom"
import PageNav from "../components/Pagenav"

function HomePage() {
    return (
        <div>

            <p>Worldwise</p>
            <PageNav/>
            {/* <a href="/product">product</a> */}
            <Link to="/product">Product</Link>
          
        </div>
    )
}

export default HomePage
