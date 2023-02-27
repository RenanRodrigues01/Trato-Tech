import styles from './Footer.module.scss';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa';

const iconesProp = {
    color: 'white',
    size: 24
}

const Footer = () => {
  return (
   <footer className={styles.footer}>
        <div>
            <FaFacebook {...iconesProp} />
            <FaTwitter {...iconesProp} />
            <FaInstagram {...iconesProp} />
        </div>
        <span>
            Desenvolvido por Renan Rodrigues
        </span>
   </footer>
  )
}

export default Footer
