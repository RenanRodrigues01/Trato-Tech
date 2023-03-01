import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './Categoria.module.scss';


const Categoria = () => {
    const { categoriaId } = useParams()
    const { categoria, itens } = useSelector(state => ({
        categoria: state.categorias.find(categoria => categoria.id === categoriaId),
        itens: state.itens.filter(item => item.categoria === categoriaId)
    }));

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.thumbnail}
       />
       <div className={styles.itens}>
            {itens?.map(item =>(
                <div key={item.id}>
                    {item.titulo}
                </div>
            ))}
       </div>
    </div>
  )
}

export default Categoria
