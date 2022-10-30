import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "../styles/playerItem.module.css";
import OrderItem from "./OrderItem";
import { player, fetchToPlayerApi } from "../sharedVar";

type props = {
  value: player;
};

const PlayerItem: NextPage<props> = ({ value }) => {
  const [state, setState] = useState({
    changingName: false,
    nickname: value.nickname,
    changingBal: false,
    balance: value.balance,
  });
  const updatedValue = {
    ...value,
    nickname: state.nickname,
    balance: state.balance,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const doneBtn = () => {
    setState((prev) => {
      return { ...prev, changingBal: false, changingName: false };
    });
    // console.log(updatedValue);
    fetchToPlayerApi("PUT", updatedValue);
  };
  const changeBtn = () => {
    // console.log("change");
    setState((prev) => {
      return { ...prev, changingName: !prev.changingName };
    });
  };
  const setBtn = () => {
    // console.log("set");
    setState((prev) => {
      return { ...prev, changingBal: !prev.changingBal };
    });
  };
  const clearBtn = () => {
    // console.log("clear");
    setState((prev) => {
      return { ...prev, balance: 0, changingBal: false, changingName: false };
    });
    fetchToPlayerApi("PUT", { ...updatedValue, balance: 0 });
  };

  return (
    <>
      <div>
        <div className={styles.itemContainer}>
          <div>
            <p>ID : {value.discord_id}</p>
            <div className={styles.nameContainer}>
              {state.changingName ? (
                <input
                  type="text"
                  value={state.nickname || ""}
                  name="nickname"
                  onChange={handleInputChange}
                />
              ) : (
                <h3>{state.nickname}</h3>
              )}
              {state.changingName ? (
                <button onClick={doneBtn}>DONE</button>
              ) : (
                <button onClick={changeBtn}>CHANGE</button>
              )}
            </div>
          </div>
          <div className={styles.eachItemContainer}>
            <h3>
              RM
              {state.changingBal ? (
                <input
                  min={0}
                  max={999}
                  type="number"
                  value={state.balance || 0}
                  name="balance"
                  onChange={handleInputChange}
                />
              ) : (
                <span>{state.balance}</span>
              )}
            </h3>
          </div>
          <div className={styles.eachItemContainer}>
            {state.changingBal ? (
              <button onClick={doneBtn}>DONE</button>
            ) : (
              <button onClick={setBtn}>SET</button>
            )}
            <button onClick={clearBtn}>CLEAR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerItem;
