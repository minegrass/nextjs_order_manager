import type { NextPage, GetServerSideProps } from "next";
import PlayerList from "../components/playerList";
import styles from "../styles/index.module.css";
import { prisma } from "../prisma/dbserver";
import { player } from "../sharedVar";
import NavBar from "../components/navbar";
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await prisma.player.findMany({});
  console.log(result);
  return {
    props: {
      result: JSON.stringify(result),
    },
  };
};

type props = {
  result: string;
};

// domain.com/player -> use for player page
const PlayerPage: NextPage<props> = (props) => {
  const playerlistdata: player[] = JSON.parse(props.result);
  const filteredListData = playerlistdata.filter((item) => {
    return item.discord_id !== "0";
  });
  return (
    <>
      <NavBar />
      <div>
        <PlayerList data={filteredListData} />
      </div>
    </>
  );
};

export default PlayerPage;
