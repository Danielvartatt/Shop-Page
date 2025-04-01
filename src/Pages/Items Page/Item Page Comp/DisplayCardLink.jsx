import styles from "./Comp.module.css";
import CartButton from "./CartButton";
export default function DisplayCardLink({
  data: {
    item: { name, Description, ImageURL, inStock, RetailPrice },
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
          <p>items in stock:{inStock}</p>
          <CartButton />
        </div>
      </div>
    </>
  );
}
