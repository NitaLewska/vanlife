import React from "react";
import VanCard from "./VanCard/VanCard";
import "./Vans.css"

export default function Vans() {
    
  const [vans, setVans] = React.useState([]);
  React.useEffect(function () {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [])

  const vanElements = vans.map(van => (
    <VanCard van={van}/>
))

  return (
    <>
      <main className="main_vans">
        <h2>Explore our van options</h2>
        {vanElements}
      </main>
    </>
  )
}
