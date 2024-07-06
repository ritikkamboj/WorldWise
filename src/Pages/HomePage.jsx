import { Link } from "react-router-dom"
import PageNav from "../components/Pagenav"
import AppNav from "../components/AppNav"

function HomePage() {
    return (
        <div>

            <h1 >Worldwise</h1>
            <PageNav/>
            <AppNav/>
            {/* <a href="/product">product</a> */}
            <Link to="/app">Applayout</Link>
          
        </div>
    )
}

export default HomePage
