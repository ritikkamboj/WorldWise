import styles from "./SideBar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      {/* <p>List of cities </p> */}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; CopyRight {new Date().getFullYear()} by WorldWise Inc
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
