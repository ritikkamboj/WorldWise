
import SideBar from "../components/SideBar";
import styles from './AppLayout.module.css'
import Map from "../components/Map";
import User from "../components/User";
// import { Outlet } from "react-router-dom";


function AppLayout() {
  return (
    <div className={styles.app}>
     <SideBar/>
     <Map/>
     <User/>
    
    </div>
  );
}

export default AppLayout;
