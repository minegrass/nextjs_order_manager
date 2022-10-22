import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "../styles/playerList.module.css";
import PlayerItem from "./playerItem";
import { player } from "../sharedVar";

type props = {
  data: player[];
};

const PlayerList: NextPage<props> = ({ data }) => {
  return (
    <>
      <div className={styles.playerListContainer}>
        <div className={styles.playerListForm}>
          <div>
            <h1>Player List</h1>
          </div>
          <div className={styles.playerList}>
            {data.map((item) => {
              return <PlayerItem key={item.discord_id} value={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerList;
