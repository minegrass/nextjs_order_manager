import { orderDataForOrderList } from "../../sharedVar";
import { createContext, useContext, ReactNode, useState } from "react";
import OrderList from "../OrderList";
type orderDataContextType = {
  orderList: orderDataForOrderList[];
  setOrderList: (data: any) => void;
};

const orderDataContextDefaultValues: orderDataContextType = {
  orderList: [],
  setOrderList: () => {},
};

const orderDataContext = createContext<orderDataContextType>(
  orderDataContextDefaultValues
);

type Props = {
  children: ReactNode;
};

export function OrderDataProvider({ children }: Props) {
  const [orderList, setOrderList] = useState<orderDataForOrderList[]>([]);
  const value = { orderList: orderList, setOrderList: setOrderList };
  return (
    <>
      <orderDataContext.Provider value={value}>
        {children}
      </orderDataContext.Provider>
    </>
  );
}

export function useOrderData() {
  return useContext(orderDataContext);
}
