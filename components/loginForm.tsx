import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/loginForm.module.css";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

type InputDetails = {
  user: string;
  pass: string;
};

const fetchLogin = async (cred: InputDetails) => {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(cred),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
};

type fetchData = {
  auth: boolean;
  token: string | null;
};

export default function LoginForm<NextPage>() {
  const route = useRouter();
  const [input, setInput] = useState({ user: "", pass: "" });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchLogin({ user: input.user, pass: input.pass }).then(
      (data: fetchData) => {
        if (data.auth === true && data.token) {
          setCookie("accessToken", data.token);
          route.push("/order");
        } else {
          console.log(data);
          return;
        }
      }
    );
  };

  const userChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev: InputDetails) => {
      return { ...prev, user: e.target.value };
    });
  };
  const passChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev: InputDetails) => {
      return { ...prev, pass: e.target.value };
    });
  };

  return (
    <>
      <section className={styles.loginFormContainer}>
        <div className={styles.loginForm}>
          <div className={styles.loginItemContainer}>
            <h1 className={styles.loginH1}>Login</h1>
            <form className={styles.form} onSubmit={submitHandler}>
              <div className={styles.input}>
                <label className={styles.inputLabel}>USERNAME:</label>
                <input
                  value={input.user}
                  className={styles.inputTextInput}
                  onChange={userChange}
                  type="text"
                />
              </div>
              <div className={styles.input}>
                <label className={styles.inputLabel}>PASSWORD:</label>
                <input
                  value={input.pass}
                  className={styles.inputTextInput}
                  onChange={passChange}
                  type="password"
                />
              </div>
              <button className={styles.submitBtn} type="submit">
                <h2>Submit</h2>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
