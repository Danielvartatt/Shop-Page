import { Link } from "react-router-dom";
import Logo from "./Images/NeoWebLogo.png";
import styles from "./Comp.module.css";
export default function Header() {
  return (
    <>
      <div className={styles.ConatinerNav}>
        <div>
          <Link to="/Shop-Page/">
            <img
              src={Logo}
              alt="NeoWeb Marketplace Logo"
              className={styles.Image}
            ></img>
          </Link>
        </div>
        <div className={styles.ConatinerLink}>
          <div>
            <Link className={styles.LinkText} to="/Shop-Page/">
              | Home |
            </Link>
          </div>
          <div>
            <Link className={styles.LinkText} to="/Shop-Page/Marketplace/">
              Marketplace |
            </Link>
          </div>
        </div>
        <div className={styles.User}>
          <Link className={styles.LinkText} to="Login">
            Login|
          </Link>
        </div>
      </div>
    </>
  );
}
