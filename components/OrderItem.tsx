import type { NextPage } from "next";
import styles from "../styles/orderItem.module.css";
import { easyFetch, orderDataForOrderList, orderListItem } from "../sharedVar";
import { fetchToOrderApi, fetchToPlayerApi } from "../sharedVar";
import { useState } from "react";
import { useOrderData } from "./context/context";

const OrderItem: NextPage<{ props: orderDataForOrderList }> = ({ props }) => {
  const { setOrderList } = useOrderData();
  const [doneOrder, setDoneOrder] = useState(props.done_order);
  // console.log(props);
  const doneHandler = (id: number) => {
    const body = {
      order_id: id,
      done_order: true,
    };
    fetchToOrderApi("PUT", body).then((data) => {
      if (data) {
        setDoneOrder(1);
      }
    });
    easyFetch(`/api/player/${props.discord_id}`, "GET").then((data) => {
      const playerBody = {
        discord_id: `${props.discord_id}`,
        balance: parseInt(data.result.balance) + parseInt(props.price),
      };
      // console.log(playerBody);
      fetchToPlayerApi("PUT", playerBody);
    });
    console.log(`done ${id}`);
  };
  const deleteHandler = (id: number) => {
    const body = {
      order_id: id,
    };
    fetchToOrderApi("DELETE", body).then((data) => {
      if (data) {
        setOrderList(
          (prev: orderDataForOrderList[]): orderDataForOrderList[] => {
            return prev.filter((item) => {
              return item.order_id != id;
            });
          }
        );
      }
    });
    console.log(`delete ${id}`);
  };
  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.idNameContainer}>
          <div className={styles.idContainer}>
            <div>
              <p>{doneOrder ? "🟢" : "🔴"}</p>
            </div>
            <p>ID: {props.order_id} </p>
          </div>
          <div>
            <h3>{props.request}</h3>
          </div>
        </div>
        <div className={styles.eachItemContainer}>
          <div className={styles.idNameContainer}>
            <p>ID:{props.discord_id}</p>
            <h3>{props.nickname || "NO PLAYER"}</h3>
          </div>
        </div>
        <div className={styles.eachItemContainer}>
          <h3>{props.buyer}</h3>
        </div>
        <div className={styles.eachItemContainer}>
          <div className={styles.priceContainer}>
            <div className={styles.idNameContainer}>
              <p>Ori : RM{props.full_price}</p>
              <h3>RM{props.price}</h3>
            </div>
          </div>
        </div>
        <div className={styles.eachItemContainer}>
          <div className={styles.btnContainer}>
            <button
              className={styles.itemBtn}
              onClick={() => {
                doneHandler(props.order_id);
              }}
              disabled={doneOrder || props.discord_id === "0" ? true : false}
            >
              DONE
            </button>
            <button
              className={styles.itemBtn}
              onClick={() => {
                deleteHandler(props.order_id);
              }}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
