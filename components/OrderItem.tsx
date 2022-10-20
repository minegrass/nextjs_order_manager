import type { NextPage } from "next";
import styles from "../styles/orderItem.module.css";
// domain.com/order -> use for order page
const OrderItem: NextPage = () => {
  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.idNameContainer}>
          <div className={styles.idContainer}>
            <div className={styles.circleShape}></div>
            <p>ID:1234567890123</p>
          </div>
          <div>
            <h3>Silver 2 to Immo 3</h3>
          </div>
        </div>
        <div className={styles.eachItemContainer}>
          <h3>Tomato#9346</h3>
        </div>
        <div className={styles.eachItemContainer}>
          <div className={styles.priceContainer}>
            <h3>RM</h3>
            <h3>999.99</h3>
          </div>
        </div>
        <div className={styles.eachItemContainer}>
          <div className={styles.btnContainer}>
            <button className={styles.itemBtn}>DONE</button>
            <button className={styles.itemBtn}>DELETE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
