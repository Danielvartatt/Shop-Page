import { Link } from "react-router-dom";

export default function DisplayCardLink({
  data: {
    item: { name, Description, ImageURL, RetailPrice },
  },
}) {
  return (
    <>
      <div>
        <img src={ImageURL}></img>
        <div id="manul">
          <h2>{name}</h2>
          <p>{RetailPrice}</p>
          <p>{Description}</p>
          <Link to={`/${id}`}>more info</Link>
        </div>
      </div>
    </>
  );
}
