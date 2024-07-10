
import SideBar from "../components/SideBar";
import styles from './AppLayout.module.css'
import Map from "../components/Map";
// import { Outlet } from "react-router-dom";


function AppLayout() {
  return (
    <div className={styles.app}>
     <SideBar/>
     <Map/>
    
    </div>
  );
}

export default AppLayout;
