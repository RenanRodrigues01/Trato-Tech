import styles from './DefaultPage.module.scss';
import NavBar from "components/NavBar";
import { Outlet } from "react-router-dom";


const DefaultPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultPage
