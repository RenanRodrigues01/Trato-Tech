import styles from './Navbar.module.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import classNames from 'classnames';
import {RiShoppingCart2Line, RiShoppingCartFill} from 'react-icons/ri';

const iconesProp = {
  color: white,
  size: 24
}
const NavBar = () => {
  return (
   <nav className={styles.nav}>
    <Logo className={styles.logo}/>
    <div className={styles.links}>
      <div>
        <a href='/' className={classNames(styles.link, {
          [styles.selected]: window.location.pathname === '/'
        })}>
          Pagina inicial
        </a>
      </div>   
    </div>
    <div className={styles.busca}>

    </div>
    <div className={styles.icones}>
      <a href='/carrinho'>
        {window.location.pathname === '/carrinho'
          ? <RiShoppingCartFill {...iconesProp} />
          : <RiShoppingCart2Line {...iconesProp} />
        }
      </a>
    </div>
   </nav>
  )
}

export default NavBar
