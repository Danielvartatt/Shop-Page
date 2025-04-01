import CartButton from "./CartButton";
import styles from "./Comp.module.css";
export default function DisplayCard({
  data: { name, description, imageURL, inStock, price, retailPrice },
}) {
  return (
    <>
      <div className={styles.DisplayCardContainer}>
        <div className={styles.ItemBox}>
          <div>
            <img src={imageURL} className={styles.DisplayCardImage}></img>
          </div>
          <div className={styles.DisplayCard}>
            <div id="displayhover" className={styles.ItemCard}>
              <h2>{name}</h2>
              <p>{description}</p>
              <p>{retailPrice} $</p>
              <CartButton inStock={inStock} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
