export type orderListItem = {
  username: string;
  password: string;
  request: string;
  full_price: number;
  price: number;
  player_id: string;
  buyer: string;
  done_order: boolean;
};

export type orderDataForOrderList = {
  order_id: number;
  request: string;
  full_price: string;
  buyer: string;
  price: string;
  done_order: number;
  discord_id: string;
  nickname: string | null;
};

export type orderSenderBody = {
  username: string;
  password: string;
  request: string;
  buyer: string;
  price: number;
};

export const domain: string = process.env.DOMAIN_URL || "http://localhost:3000";

export const fetchToOrderApi = async (method: string, bodyValue: object) => {
  return fetch(`/api/order`, {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyValue),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return null;
    }
  });
};
