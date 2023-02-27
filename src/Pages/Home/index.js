import Header from 'components/Header';
import styles from './Home.module.scss';
import Relogio from 'assets/inicial.png'

const Home = () => {
  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produto no melhor site do Brasil!'
        className={styles.header}
        imagem={Relogio}
      />
    </div>
  )
}

export default Home
