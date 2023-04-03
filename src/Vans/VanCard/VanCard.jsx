import { Link } from "react-router-dom";
import "./VanCard.css";

export default function VanCard(props) {
  return (
    <div key={props.van.id} className="van_card">
      <Link to={"/vans/" + props.van.id}>
        <img src={props.van.imageUrl} />
        <div className="van_info">
          <h3>{props.van.name}</h3>
          <p className="van_info__price">
            ${props.van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${props.van.type} selected`}>
          {props.van.type}
        </i>
      </Link>
    </div>
  );
}
