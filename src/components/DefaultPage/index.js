import styles from './DefaultPage.module.scss';
import NavBar from "components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from 'components/Footer';


const DefaultPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultPage
