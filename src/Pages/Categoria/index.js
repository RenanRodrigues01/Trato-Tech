import Header from "components/Header";
import Item from "components/Item";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './Categoria.module.scss';


const Categoria = () => {
    const { categoriaId } = useParams()
    const { categoria, itens } = useSelector(state => {
      const regExp = new RegExp(state.busca, 'i')
      return {
        categoria: state.categorias.find(categoria => categoria.id === categoriaId),
        itens: state.itens.filter(item => item.categoria === categoriaId && item.titulo.match(regExp))
      }
    });

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.thumbnail}
       />
       <div className={styles.itens}>
            {itens?.map(item =>(
                <Item key={item.id} {...item} />
            ))}
       </div>
    </div>
  )
}

export default Categoria
