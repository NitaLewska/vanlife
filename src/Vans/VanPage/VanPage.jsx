import React from "react";
import { useParams } from "react-router-dom";
import "./VanPage.css";
import { Link } from "react-router-dom";


export default function VanPage() {
  const params = useParams();
  console.log(params);
  const [van, setVan] = React.useState({});
  React.useEffect(
    function () {
      fetch("/api/vans")
        .then((res) => res.json())
        .then((data) => setVan(data.vans[params.id - 1]));
    },
    [params.id]
  );
  console.log(van);
  return (
    <>
      <main className="main_van_page">
          <img src={van.imageUrl} />
          <div className="van_page__info">
            <h3>{van.name}</h3>
            <p className="van_page__info__price">
              ${van.price}
              <span>/day</span>
            </p>
            <p className="van_page__info__description">{van.description}</p>
          </div>
            <Link>Rent this van</Link>
      </main>
    </>
  );
}
