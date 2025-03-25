import styles from "./Comp.module.css";
import CartButton from "./CartButton";

export default function DisplayCard({
  data: { name, Description, ImageURL, inStock, Price, RetailPrice },
}) {
  return (
    <>
      <div>
        <img src={ImageURL}></img>
        <div id="displayhover">
          <h2>{name}</h2>
          <p>{RetailPrice}</p>
          <p>{Description}</p>
          <p>{inStock}</p>
          <CartButton />
        </div>
      </div>
    </>
  );
}
