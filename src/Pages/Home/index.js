import Header from 'components/Header';
import styles from './Home.module.scss';
import Relogio from 'assets/inicial.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const categorias = useSelector(state => state.categorias);
  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produto no melhor site do Brasil!'
        className={styles.header}
        imagem={Relogio}
      />
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>Categorias</h1>
        </div>
      </div>
      <div className={styles['categorias-container']}>
        {categorias.map((categoria, index) => (
          <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
            <img src={categoria.thumbnail} alt={categoria.nome}/>
            <h1>{categoria.nome}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
