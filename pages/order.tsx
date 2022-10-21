import type { NextPage, GetServerSideProps } from "next";
import OrderList from "../components/OrderList";
import OrderSender from "../components/OrderSender";
import styles from "../styles/orderPage.module.css";
import { orderDataForOrderList } from "../sharedVar";
import { useOrderData } from "../components/context/context";
import { prisma } from "../prisma/dbserver";
import { useEffect } from "react";
const sampleData: orderDataForOrderList[] = [
  {
    order_id: 1,
    request: "s1 to s2",
    full_price: "123.42",
    buyer: "fb Tap",
    price: "100",
    done_order: 0,
    discord_id: "0",
    nickname: null,
  },
  {
    order_id: 2,
    request: "s2 to s3",
    full_price: "123.42",
    buyer: "fb Tap",
    price: "100",
    done_order: 0,
    discord_id: "0",
    nickname: null,
  },
  {
    order_id: 3,
    request: "asc 3 to immo with omen brim",
    full_price: "123.42",
    buyer: "shopee @Chong",
    price: "100",
    done_order: 1,
    discord_id: "0",
    nickname: null,
  },
];

type Props = {
  Data: string;
};
// server side
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result =
    await prisma.$queryRaw`SELECT orderlist.order_id,orderlist.request,orderlist.full_price,orderlist.buyer,orderlist.price,orderlist.done_order,player.discord_id,player.nickname
    FROM orderlist
    INNER JOIN player
    ON orderlist.player_id = player.discord_id;`;
  return {
    props: {
      Data: JSON.stringify(result),
    },
  };
};

// domain.com/order -> use for order page
const OrderPage: NextPage<Props> = (props) => {
  const { orderList, setOrderList } = useOrderData();
  useEffect(() => {
    setOrderList(JSON.parse(props.Data));
  }, []);
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
