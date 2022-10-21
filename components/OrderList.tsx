import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "../styles/orderList.module.css";
import OrderItem from "./OrderItem";
import { useOrderData } from "../components/context/context";
import { orderDataForOrderList } from "../sharedVar";

// domain.com/order -> use for order page

const OrderList: NextPage = () => {
  const { orderList } = useOrderData();
  // console.log(orderList);
  return (
    <>
      <div>
        <div className={styles.orderListForm}>
          <div>
            <h1 className={styles.bigTitle}>Order List</h1>
          </div>
          <div>
            <div className={styles.orderList}>
              {orderList.map((item) => {
                return <OrderItem key={item.order_id} props={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
