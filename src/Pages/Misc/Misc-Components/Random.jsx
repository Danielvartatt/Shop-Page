import { Link } from "react-router-dom";
import image from "/Images/Zelengorsknoback.png";
import styles from "./Misc.module.css";
export default function Random() {
  return (
    <>
      <div className={styles.buttonMisc}>
        <div>
          <div>
            {" "}
            <h2>Sorry, we cant find the page you were looking for.</h2>
          </div>
          <div>
            <p>Please return to the main page.</p>
            <p>
              You can use this link <Link to="/">here</Link> to return
            </p>
            <p>heres an image of Zelengorsk ^_____^</p>
          </div>
        </div>
        <div>
          <img src={image}></img>
        </div>
      </div>
    </>
  );
}
