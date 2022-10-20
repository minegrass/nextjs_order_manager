import type { NextPage } from "next";
import OrderList from "../components/OrderList";
import OrderSender from "../components/OrderSender";
import styles from "../styles/orderPage.module.css";
// domain.com/order -> use for order page
const OrderPage: NextPage = () => {
  return (
    <>
      <div className={styles.allContainer}>
        <div className={styles.ItemContainer}>
          <div>
            <OrderSender />
          </div>
          <div>
            <OrderList />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
