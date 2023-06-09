import "./About.css";
import { Link } from "react-router-dom";
import jumbo from "../assets/imgs/about-jumbo.png";

export default function About() {
  return (
    <>
      <main className="main_about">
        <img src={jumbo} alt="" />
        <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="main_about__explore_span">
          <p>Your destination is waiting. Your van is ready.</p>
          <Link to="/vans">Explore our vans</Link>
        </div>
      </main>
    </>
  )
}
