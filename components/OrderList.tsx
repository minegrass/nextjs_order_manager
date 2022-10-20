import type { NextPage } from "next";
import styles from "../styles/orderList.module.css";
import OrderItem from "./OrderItem";
// domain.com/order -> use for order page

const sampleData = [
  {
    order_id: 1,
    username: "tom",
    password: "12333",
    request: "s1 to s2",
    full_price: "123.42",
    price: "100",
    player_id: null,
    buyer: "FB YAP",
    done_order: false,
  },
  {
    order_id: 2,
    username: "toms",
    password: "12333",
    request: "s1 to s2",
    full_price: "123.42",
    price: "100",
    player_id: null,
    buyer: "FB YAP",
    done_order: false,
  },
];

export const getServerSideProps = async () => {
  console.log("heloa");
};

const OrderList: NextPage = () => {
  return (
    <>
      <div>
        <div className={styles.orderListForm}>
          <div>
            <h1 className={styles.bigTitle}>Order List</h1>
          </div>
          <div>
            <div className={styles.orderList}>
              <OrderItem />
              <OrderItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
