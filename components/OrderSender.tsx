import type { NextPage } from "next";
import styles from "../styles/orderSender.module.css";
import { orderListItem } from "../sharedVar";
import { fetchToOrderApi } from "../sharedVar";
import React, { useState } from "react";
import { orderSenderBody } from "../sharedVar";
import { useOrderData } from "../components/context/context";
import Router from "next/router";
// domain.com/order -> use for order page

const initOrderSender: orderSenderBody = {
  username: "",
  password: "",
  request: "",
  buyer: "",
  price: 0,
};

const OrderSender: NextPage = () => {
  const [inputValue, setInputValue] = useState(initOrderSender);
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setInputValue(initOrderSender);
    fetchToOrderApi("POST", inputValue).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className={styles.allContainer}>
        <div>
          <div className={styles.bigTitleContainer}>
            <h1 className={styles.bigTitle}>Order Sender</h1>
          </div>
          <form onSubmit={submitHandler}>
            <div className={styles.allInputContainer}>
              <div className={styles.inputContainer}>
                <label>Username:</label>
                <input
                  value={inputValue.username}
                  maxLength={16}
                  onChange={inputChange}
                  name="username"
                  type="text"
                />
              </div>
              <div className={styles.inputContainer}>
                <label>Password:</label>
                <input
                  maxLength={30}
                  value={inputValue.password}
                  onChange={inputChange}
                  name="password"
                  type="text"
                />
              </div>
              <div className={styles.inputContainer}>
                <label>Request:</label>
                <input
                  maxLength={30}
                  value={inputValue.request}
                  onChange={inputChange}
                  name="request"
                  type="text"
                />
              </div>
              <div className={styles.inputContainer}>
                <label>Buyer:</label>
                <input
                  maxLength={30}
                  value={inputValue.buyer}
                  onChange={inputChange}
                  name="buyer"
                  type="text"
                />
              </div>
              <div className={styles.inputContainer}>
                <label>Price:</label>
                <input
                  value={inputValue.price}
                  onChange={inputChange}
                  name="price"
                  className={styles.priceInput}
                  type="number"
                  min={0}
                  max={999}
                />
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
