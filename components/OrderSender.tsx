import type { NextPage } from "next";
import styles from "../styles/orderSender.module.css";
import { orderListItem } from "../typeconfig";
// domain.com/order -> use for order page

const OrderSender: NextPage = () => {
  return (
    <>
      <div className={styles.allContainer}>
        <div>
          <div className={styles.bigTitleContainer}>
            <h1 className={styles.bigTitle}>Order Sender</h1>
          </div>
          <form>
            <div className={styles.allInputContainer}>
              <div className={styles.inputContainer}>
                <label>Username:</label>
                <input type="text" />
              </div>
              <div className={styles.inputContainer}>
                <label>Password:</label>
                <input type="text" />
              </div>
              <div className={styles.inputContainer}>
                <label>Request:</label>
                <input type="text" />
              </div>
              <div className={styles.inputContainer}>
                <label>Buyer:</label>
                <input type="text" />
              </div>
              <div className={styles.inputContainer}>
                <label>Price:</label>
                <input type="text" />
              </div>
            </div>
            <div className={styles.submitBtnContainer}>
              <input className={styles.submitBtn} type="submit"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderSender;
