import styles from './Navbar.module.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import classNames from 'classnames';
import {RiShoppingCart2Line, RiShoppingCartFill} from 'react-icons/ri';
import Busca from 'components/Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const iconesProp = {
  color: "white",
  size: 24
}
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate('/')}/>
      <div className={styles.links}>
        <div>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Pagina inicial
          </Link>
        </div>   
      </div>
      <div className={styles.busca}>
          <Busca />
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
