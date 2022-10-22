import type { GetServerSideProps, NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faDollarSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useOrderData } from "../components/context/context";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
const NavBar: NextPage = () => {
  const route = useRouter();
  console.log(route.pathname);
  const { orderList } = useOrderData();
  // console.log(orderList);
  const clickOrder = () => {
    route.push("/order");
  };
  const clickPlayer = () => {
    route.push("/player");
  };
  const clickLogout = async () => {
    await deleteCookie("accessToken");
    await route.push("/");
  };

  return (
    <>
      <div>
        <div className={styles.navbar}>
          {route.pathname === "/order" ? (
            <div className={styles.disableIconStyle}>
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
          ) : (
            <div className={styles.iconStyle} onClick={clickOrder}>
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
          )}
          {route.pathname === "/player" ? (
            <div className={styles.disableIconStyle}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          ) : (
            <div className={styles.iconStyle} onClick={clickPlayer}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          )}
          <div className={styles.iconStyle} onClick={clickLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
