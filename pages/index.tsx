import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import LoginForm from "../components/loginForm";
import { dcLogin, dcListenTakeOrder } from "../discord/discordBot";

// domain.com/ -> use for login page

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Order Manager</title>
        <meta name="description" content="Simple app manages my order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoginForm />
      </main>
    </div>
  );
};

export default Home;
