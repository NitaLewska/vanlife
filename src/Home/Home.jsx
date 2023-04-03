import { Link } from "react-router-dom"
import Footer from "../Partials/Footer/Footer"
import Nav from "../Partials/Nav/Nav"
import "./Home.css"

function Home() {
    return(
        <>
        <Nav />
            <main className="home_main">
                <h2>You got the travel plans, we got the travel vans.</h2>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link className="btn">Find your van</Link>
            </main>
        <Footer/>
        </>
        
    )
}

export default Home